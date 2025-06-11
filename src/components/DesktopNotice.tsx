import { useEffect, useState } from "react";

const DesktopNotice = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Only show on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      setShowNotice(true);
    }
  }, []);

  const handleClose = () => {
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="desktop-notice">
      <span>
        <strong>Tip:</strong> For best experience, please view this website in <strong>desktop mode</strong>.
      </span>
      <button onClick={handleClose}>×</button>
    </div>
  );
};

export default DesktopNotice;
