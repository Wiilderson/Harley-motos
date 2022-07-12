import { Link } from "react-scroll";
import LogoTech from "../../Assets/Logo.svg";
import { ContainerHeader, Menu } from "./Styled";

function Navbar() {
  return (
    <ContainerHeader>
      <Menu>
        <img src={LogoTech} alt="Logo Tech" />
        <ul>
          <li>Produtos</li>
          <li>
            <Link
              to="noticias"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Usuário
            </Link>
          </li>
          <li>
            <Link
              to="agenda"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Cart
            </Link>
          </li>
        </ul>
      </Menu>
    </ContainerHeader>
  );
}

export default Navbar;
