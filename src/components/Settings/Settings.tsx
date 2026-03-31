import { useState } from "react";
import settingsIcon from "../../assets/settings-icon.png";
import "./Settings.css";

const Settings = () => {
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 700);
  };

  return (
    <div
      className={`settings-icon ${isClick ? "animate" : ""}`}
      onClick={handleClick}
    >
      <img src={settingsIcon} className="icon" alt="" />
    </div>
  );
};

export default Settings;
