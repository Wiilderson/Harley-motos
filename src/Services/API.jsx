import axios from "axios";

//api de loja
// const API = axios.create({
//   baseURL: "https://fakestoreapi.com/products",
// });

//api das motos
const API = axios.create({
  baseURL: "http://localhost:3001/products",
});

export default API;
