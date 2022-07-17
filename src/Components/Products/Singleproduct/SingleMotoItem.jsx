import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCart } from "../../../Redux/action";
import API from "../../../Services/API";
import Navbar from "../../Navbar/Navbar";
import { Container, ImgProduct, InforProduct } from "./Styled";

function SingleMotoItem() {
  const { id } = useParams();
  //   console.log('id: ', id);
  const [moto, setMoto] = useState([]);

  const dispatch = useDispatch();

  const addProductTocart = (item) => {
    dispatch(addCart(item));
  };

  const getSingleMoto = async () => {
    await API.get(`/${id}`)
      .then((response) => setMoto(response.data))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getSingleMoto();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ImgProduct>
          <img src={moto.image} alt="imagem product" className="img" />
        </ImgProduct>
        <InforProduct>
          <div>
            <h1> {moto.title}</h1>
            <h3>R${moto.price},00</h3>
            <h4>{moto.cc} - Cilindradas</h4>
            <p>{moto.description}</p>
            <button onClick={() => addProductTocart(moto)}>Add to Cart</button>
          </div>
        </InforProduct>
      </Container>
    </>
  );
}

export default SingleMotoItem;
