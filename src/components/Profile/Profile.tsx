import profileIcon from "../../assets/profile-icon.png";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileIcon} className="icon" alt="" />
    </div>
  );
};

export default Profile;
