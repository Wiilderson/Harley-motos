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
                <div>
                  <p>R$ {product.price},00</p>
                  <p>Cilindrada: {product.cc}</p>
                </div>
              </CardInfos>
              <Link className="link" to={`/detalhes/${product.id}`}>
                <button>Details</button>
              </Link>
            </CardNews>
          ))}
        </CardsNewsContainer>
      </Container>
    </>
  );
}

export default ShowMotos;
