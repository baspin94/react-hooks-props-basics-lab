import React from "react";

function Home({name, city, color}) {
  const divStyle = {
    color: `${color}`
  };
  return (
    <div id="home">
      <h1 style={divStyle}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
