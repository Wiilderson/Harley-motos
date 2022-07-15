import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Item } from "./Styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../../Redux/Action";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const dispatch = useDispatch();

  const removeItemCart = (item) => {
    dispatch(delCart(item));
  };
  return (
    <>
      <Navbar />
      <Container>
        <Item>
          <div>
            {state.map((state) => (
              <div className="" key={state.id}>
                <img className="" src={state.image} alt={state.name} />
                <div className="">
                  <span className="span1">{state.title}</span>
                  <span>R${state.price}</span>
                  <FaTrash
                    onClick={() => removeItemCart(state)}
                    size={18}
                    // color="#f7f8f8"
                    color="#0a0a0a"
                    style={{
                      backgroundColor: "transparent",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Item>
        <div> bloco 2 itens</div>
      </Container>
    </>
  );
}

export default Cart;
