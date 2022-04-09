import React from "react";

function Profile(props) {
  const buttonStyle = {
    color: "white",
    backgroundColor: "yellowgreen",
    border: "none",
    padding: "10px 15px",
    borderRadius: 5,
  };
  return (
    <div>
      <div style={{ width: 300, margin: "0 auto" }}>{props.children}</div>
      <h1>{props.fullName}</h1>
      <h2>{props.profession}</h2>
      <p>{props.bio}</p>
      <button
        style={buttonStyle}
        onClick={() => props.handleName(`My name is ${props.fullName}`)}
      >
        Click here
      </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "OKPE NNANNA O",
  profession: "Software Engineer",
  bio: "Steadily chasing my dreams.",
  children: (
    <img
      style={{ width: 300 }}
      src="https://wallpapercave.com/dwp2x/wp2155532.png"
      alt=""
    ></img>
  ),
};

export default Profile;
