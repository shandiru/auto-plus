import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto max-w-full md:max-w-xs p-5 rounded-xl shadow-lg z-50
                     bg-[#000000] text-white border border-[#E30613]/30 transition-all duration-300"
        >
          <p className="text-sm mb-2 text-center text-gray-200">
            We use cookies to improve your experience.
          </p>
          <p className="mb-3 text-center">
            <a
              href="/privacy-policy"
              className="underline text-[#E30613] hover:text-[#ff2b37] transition"
            >
              See our Privacy Policy
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="bg-transparent border border-[#E30613] text-[#E30613] px-4 py-2 rounded text-sm 
                         hover:bg-[#E30613] hover:text-white transition duration-300"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#E30613] text-white px-4 py-2 rounded text-sm 
                         hover:bg-[#ff2b37] transition duration-300"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon in Red Circle */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E30613] shadow-[0_0_12px_rgba(227,6,19,0.6)] 
                       flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border border-[#111]"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain invert brightness-0 saturate-0"
            />
          </button>
        </div>
      )}
    </>
  );
}
