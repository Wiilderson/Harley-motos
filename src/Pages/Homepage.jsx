import React from "react";
import Harley from "../Assets/harleymotos.webp";

import Navbar from "../Components/Navbar/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Bem-vindo à Harley!</h1>
        <img className="img" src={Harley} alt="" />
      </div>
    </>
  );
}

export default Homepage;
