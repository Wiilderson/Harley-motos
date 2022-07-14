import LogoTech from "../../Assets/Logo.svg";
import {
  ContainerHeader,
  Dropdown,
  DropdownBtn,
  DropdownContent,
  FlexCart,
  Menu,
  SpanCont,
} from "./Styled";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../../Redux/Action";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const dispatch = useDispatch();

  const removeItemCart = (item) => {
    dispatch(delCart(item));
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <ContainerHeader>
      <Menu>
        <img src={LogoTech} alt="Logo Tech" />
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/produtos">
              products
            </Link>
          </li>
          <li>
            <Dropdown>
              <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
                <BsFillCartPlusFill
                  size={23}
                  // color="#f7f8f8"
                  color="#f7f8f8"
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                />
                <span> {state.length} </span>

                <RiArrowDownSFill
                  size={23}
                  // color="#f7f8f8"
                  color="#f7f8f8"
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    marginLeft: "4px",
                  }}
                />
              </DropdownBtn>

              {isActive && (
                <DropdownContent>
                  {state.length > 0 ? (
                    <>
                      {state.map((state) => (
                        <>
                          <FlexCart>
                            <span key={state.id} />
                            <img src={state.image} alt={state.name} />
                            <div>
                              <span>{state.title.substr(0, 10)}</span>
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
                          </FlexCart>
                        </>
                      ))}
                    </>
                  ) : (
                    <SpanCont>
                      <span>Cart is Empty!</span>
                    </SpanCont>
                  )}
                </DropdownContent>
              )}
            </Dropdown>
          </li>
        </ul>
      </Menu>
    </ContainerHeader>
  );
}

export default Navbar;

// {cart.map((prod) => (
//   <span className="cartitem" key={prod.id}>
//     <img
//       src={prod.image}
//       className="cartItemImg"
//       alt={prod.name}
//     />
//     <div className="cartItemDetail">
//       <span>{prod.name}</span>
//       <span>₹ {prod.price.split(".")[0]}</span>
//     </div>
//     <AiFillDelete
//       fontSize="20px"
//       style={{ cursor: "pointer" }}
//       onClick={() =>
//         dispatch({
//           type: "REMOVE_FROM_CART",
//           payload: prod,
//         })
//       }
//     />
//   </span>
// ))}
