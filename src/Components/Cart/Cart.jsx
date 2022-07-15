import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Item, TotalItens } from "./Styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, delCart } from "../../Redux/Action";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const dispatch = useDispatch();

  const removeItemCart = (item) => {
    dispatch(delCart(item));
  };

  const buyProductCart = (item) => {
    console.log(item);
    dispatch(clearCart(item));
  };

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      state.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state]);

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
        <TotalItens>
          <div>
            <h1>Subtotal ({state.length}) itens</h1>
            <h2>Total: R$ {total}</h2>

            <Link to="/produtos">
              <button onClick={() => buyProductCart(state)}>Comprar</button>
            </Link>
          </div>
        </TotalItens>
      </Container>
    </>
  );
}

export default Cart;
