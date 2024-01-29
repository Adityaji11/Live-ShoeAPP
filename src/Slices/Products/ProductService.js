import axios from "axios";
const { url } = require("../api")


const getProducts = async () => {
  const response = await axios.get(`${url}/products`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${url}/products`, product);

  return response.data;
};

export const ProductService ={
  getProducts,
  createProduct,
}