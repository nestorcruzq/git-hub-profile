const ProfileCard = (props) => {
  if (!props.profileInfo) return;

  const { avatar_url, name, html_url } = props.profileInfo;

  return (
    <>
      <div className="row">
        <img src={avatar_url} alt="git hub profile"></img>
      </div>
      <div className="row">
        <p>{name}</p>
        <a href={html_url} rel="noreferrer" target="_blank">Go to Profile</a>
      </div>
    </>
  );
};

export default ProfileCard;