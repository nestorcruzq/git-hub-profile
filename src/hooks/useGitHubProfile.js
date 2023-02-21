import { useState } from "react";

const useGitHubProfile = ()=>{
    const [profileInformation, setProfileInformation] = useState({});

    const fetchProfileInfo = async (profileName) => {
        const request = await fetch(`https://api.github.com/users/${profileName}`);
        const result = await request.json();
        setProfileInformation(result);
    }

    return {profileInformation, fetchProfileInfo}
}

export default useGitHubProfile;
