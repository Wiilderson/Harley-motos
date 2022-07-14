import React, { useEffect, useState } from "react";
import API from "../../Services/API";
import { CardsNewsContainer, Container, CardInfos, CardNews } from "./Styled";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function ShowMotos() {
  const [data, setData] = useState([]);

  const handleMotos = () => {
    API.get()
      .then((response) => setData(response.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    handleMotos();
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <Container>
        <CardsNewsContainer>
          {data.map((product) => (
            <CardNews key={product.id}>
              <img src={product.image} alt="imagem product" />
              <CardInfos>
                {/* <AiOutlineCalendar size={20} color="#565656" /> */}
                <h3>{product.title.substring(0, 12)}</h3>

                <p>${product.price}</p>
              </CardInfos>
              <Link to={`/detalhes/${product.id}`}>Details</Link>
              {/* <button>Details</button> */}
            </CardNews>
          ))}
        </CardsNewsContainer>
      </Container>
    </>
  );
}

export default ShowMotos;
