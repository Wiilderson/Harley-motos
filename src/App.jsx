import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ShowMotos from "./Components/Products/Motos";
import SingleMotoItem from "./Components/Products/Singleproduct/SingleMotoItem";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/produtos" element={<ShowMotos />} />
          <Route path="/detalhes/:id" element={<SingleMotoItem />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
