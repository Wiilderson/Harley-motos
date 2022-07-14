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

function Navbar() {
  const state = 0;

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
                <span className="fas fa-caret-down"></span>
              </DropdownBtn>

              {isActive && (
                <DropdownContent
                  onClick={(e) => {
                    setIsActive(false);
                  }}
                >
                  {state > 0 ? (
                    <>
                      <span>Cart is full!</span>
                      {/* <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link> */}
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
