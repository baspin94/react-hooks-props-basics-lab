import React from "react";
import user from "../data/user";

import Links from "./Links"

function About({bio}) {
  function displayBio() {
    if(bio) {
      return (<p>{bio}</p>);
    } else {
      return null;
    }
  };
  return (
    <div id="about">
      <h2>About Me</h2>
      {displayBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default About;
