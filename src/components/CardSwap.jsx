"use client";
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-2xl border border-[#1E1E1E] bg-[#0C0C0C] shadow-[0_8px_30px_rgba(0,0,0,0.35)] [transform-style:preserve-3d] [backface-visibility:hidden] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${customClass ?? ""} ${
      rest.className ?? ""
    }`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i, total) => ({
  x: 0,
  y: -i * 45,
  z: -i * 10,
  zIndex: total - i,
});

const placeNow = (el, slot) =>
  gsap.set(el, {
    xPercent: -50,
    yPercent: -50,
    x: slot.x,
    y: slot.y,
    z: slot.z,
    rotateX: 1.2,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 900,
  height = 480, // 🔹 reduced height for tighter layout
  delay = 5000,
  pauseOnHover = true,
  easing = "power2.out",
  children,
}) => {
  const config = {
    ease: easing,
    durDrop: 0.8,
    durMove: 0.8,
    durReturn: 0.8,
    overlap: 0.3,
  };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, total)));

    const swap = () => {
      if (order.current.length < 2) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline({ defaults: { ease: config.ease } });
      tlRef.current = tl;

      // Drop front card
      tl.to(elFront, {
        y: "+=100",
        opacity: 0,
        scale: 0.97,
        duration: config.durDrop,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.overlap}`);

      // Move others up
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, refs.length);
        tl.to(
          el,
          {
            y: slot.y,
            z: slot.z,
            opacity: 1,
            duration: config.durMove,
          },
          `promote+=${i * 0.1}`
        );
      });

      // Return dropped card to back
      const backSlot = makeSlot(refs.length - 1, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * 0.3}`);
      tl.set(elFront, { zIndex: backSlot.zIndex }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          z: backSlot.z,
          scale: 1,
          opacity: 1,
          duration: config.durReturn,
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }

    return () => clearInterval(intervalRef.current);
  }, [delay, pauseOnHover, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
        })
      : child
  );

  return (
    <div
      ref={container}
      className="relative mx-auto flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d] overflow-visible"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
