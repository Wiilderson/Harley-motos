import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../ContextAuth/UseAuth";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink,
  Span,
} from "./Styled";

function SignIn() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Entrar Agora</CardHeading>
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
              placeholder="Password"
              type="password"
              required
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </CardFieldset>

          <CardFieldset>
            <CardButton onClick={handleLogin} type="button">
              Sign Up
            </CardButton>
          </CardFieldset>
          <Span>{error}</Span>
          <CardFieldset>
            <Link to="/cadastrar">
              <CardLink>
                Não tem uma conta? <strong>Inscreva-se agora!</strong>
              </CardLink>
            </Link>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default SignIn;
