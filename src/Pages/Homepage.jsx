import React from "react";
import Harley from "../Assets/harleymotos.webp";

import Navbar from "../Components/Navbar/Navbar";
import { HomeContainer } from "./Styled";

function Homepage() {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <h1>Bem-vindo à Harley!</h1>
        <img src={Harley} alt="" />
      </HomeContainer>
    </>
  );
}

export default Homepage;
