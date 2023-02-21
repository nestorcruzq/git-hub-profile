import { useState } from "react";
import useGitHubProfile from "../hooks/useGitHubProfile";
import ProfileCard from "./ProfileCard";

const ProfileForm = () => {
  const [username, setUsername] = useState("");
  const { fetchProfileInfo, profileInformation } = useGitHubProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchProfileInfo(username);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label>GitHub username</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            type="button"
            className="btn btn-info"
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </button>
        </div>
        <div className="col-4">
          {profileInformation.avatar_url ? <ProfileCard profileInfo={profileInformation}></ProfileCard>:"Enter information"}
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
