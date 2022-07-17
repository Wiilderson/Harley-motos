import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../ContextAuth/UseAuth";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink,
} from "./Styled";

function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };
  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Cadastre-se</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="E-mail"
              type="text"
              required
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Confirme e-mail"
              type="text"
              required
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              required
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </CardFieldset>

          <CardFieldset>
            <CardButton onClick={handleSignup} type="button">
              Cadastrar
            </CardButton>
          </CardFieldset>
          <span>{error}</span>
          <CardFieldset>
            <Link to="/">
              <CardLink>
                Já tem uma conta? <strong>Entre agora!</strong>
              </CardLink>
            </Link>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default SignUp;
