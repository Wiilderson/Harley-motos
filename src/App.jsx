import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShowMotos from "./Components/Products/Motos";
import SingleMotoItem from "./Components/Products/Singleproduct/SingleMotoItem";
import Cart from "./Components/Cart/Cart";

import Login from "./Pages/Login";
import SignUp from "./Components/SignUp/SignUp";
import useAuth from "./ContextAuth/UseAuth";
import { AuthProvider } from "./ContextAuth/Context";

function App() {
  const Private = ({ Home }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Homepage /> : <Login />;
  };

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Private Home={<Homepage />} />} />
            <Route path="/cadastrar" element={<SignUp />} />
            <Route path="*" element={<Login />} />
            <Route path="/produtos" element={<ShowMotos />} />
            <Route path="/detalhes/:id" element={<SingleMotoItem />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
