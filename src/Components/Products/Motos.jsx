import React, { useEffect, useState } from "react";
import API from "../../Services/API";
import { CardsNewsContainer, Container, CardInfos, CardNews } from "./Styled";
import { Link } from "react-router-dom";

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
    <Container>
      <CardsNewsContainer>
        {data.map((product) => (
          <CardNews key={product.id}>
            <img src={product.image} alt="imagem card 1" />
            <CardInfos>
              {/* <AiOutlineCalendar size={20} color="#565656" /> */}
              <h3>{product.title.substring(0, 12)}</h3>

              <p>${product.price}</p>
            </CardInfos>
            <button>Details</button>
          </CardNews>
        ))}
      </CardsNewsContainer>
    </Container>
  );
}

export default ShowMotos;

{
  /* <CardsNewsContainer>
  <CardNews>
    <img src={News1} alt="imagem card 1" />
    <CardInfos>
      <AiOutlineCalendar size={20} color="#565656" />
      <h3>17 Abr 2022</h3>

      <p>Participe da nossa Live sobre React e testes TDD</p>
    </CardInfos>
  </CardNews>
  <CardNews>
    <img src={News2} alt="imagem card 2" />
    <CardInfos>
      <AiOutlineCalendar size={20} color="#565656" />
      <h3>21 Abr 2022</h3>

      <p>Participe da nossa live de Nuxt para a Turing</p>
    </CardInfos>
  </CardNews>
  <CardNews>
    <img src={News3} alt="imagem card 3" />
    <CardInfos>
      <AiOutlineCalendar size={20} color="#565656" />
      <h3>03 Mai 2022</h3>
      <Paragrf>
        <p>Como apoiar uma desenvolvedora em início de carreira?</p>
      </Paragrf>
    </CardInfos>
  </CardNews>
</CardsNewsContainer>; */
}

// {data.map((p) => (
//   <div className="col-md-3 mb-4" key={p.id}>
//     <div className="card h-100 text-center p-4">
//       <img
//         src={p.image}
//         className="card-img-top"
//         alt={p.title}
//         height="100px"
//       />
//       <div className="card-body">
//         <h5 className="card-title mb-0">
//           {p.title.substring(0, 12)}
//         </h5>
//         <p className="card-text lead fw-bold">${p.price}</p>
//         {/* <Link to={`/product/${p.id}`} className="btn btn-outline-dark">
//     Buy Now
//   </Link> */}
//       </div>
//     </div>
//   </div>
// ))}
