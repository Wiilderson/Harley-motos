import LogoTech from "../../Assets/Logo.svg";
import {
  ContainerHeader,
  Dropdown,
  DropdownBtn,
  DropdownContent,
  Menu,
} from "./Styled";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  //const state1 = 20;

  const state = useSelector((state) => state.handleCart);

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
                <DropdownContent
                  onClick={(e) => {
                    setIsActive(false);
                  }}
                >
                  {state.length > 0 ? (
                    <>
                      <span>Cart is full!</span>
                    </>
                  ) : (
                    <span>Cart is Empty!</span>
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
