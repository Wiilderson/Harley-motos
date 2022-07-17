import LogoMoto from "../../Assets/Moto.svg";
import {
  Button,
  ContainerHeader,
  Dropdown,
  DropdownBtn,
  DropdownContent,
  FlexCart,
  Menu,
  SpanCont,
} from "./Styled";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../../Redux/Action";
import useAuth from "../../ContextAuth/UseAuth";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const dispatch = useDispatch();

  const removeItemCart = (item) => {
    dispatch(delCart(item));
  };

  const [isActive, setIsActive] = useState(false);

  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <Menu>
        <img src={LogoMoto} alt="LogoMOTO" />

        <ul>
          <li>
            <Link className="Link" to="/home">
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
                          <FlexCart key={state.id}>
                            {/* <span key={index} /> */}
                            <img src={state.image} alt={state.name} />
                            <div>
                              <span>{state.title.substring(0, 10)}</span>
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
                  {state.length > 0 ? (
                    <div>
                      <Link to="/cart">
                        <button className="button">GotoCart</button>
                      </Link>
                    </div>
                  ) : null}
                </DropdownContent>
              )}
            </Dropdown>
          </li>
          <li>
            <Button onClick={() => [signout(), navigate("/")]}>
              <FiLogOut
                size={18}
                color="#fafafa"
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginRight: "2px",
                }}
              />
              Sair
            </Button>
          </li>
        </ul>
      </Menu>
    </ContainerHeader>
  );
}

export default Navbar;
