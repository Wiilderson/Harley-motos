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
            <h4>{moto.category}</h4>
            <h1> {moto.title}</h1>
            <p>
              Rating {moto.rating && moto.rate}
              <i></i>
            </p>
            <h3>R${moto.price}</h3>
            <p>{moto.description}</p>
            <button onClick={() => addProductTocart(moto)}>Add to Cart</button>

            {/* <Link className="Link" to="/cart">
              Cart
            </Link> */}
          </div>
        </InforProduct>
      </Container>
    </>
  );
}

export default SingleMotoItem;
