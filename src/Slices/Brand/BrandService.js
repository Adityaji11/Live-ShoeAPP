import axios from "axios";
const { url } = require("../api")

const getallBrands = async () => {
  const response = await axios.get(`${url}/getallBrand`);

  return response.data;
};

const createBrand = async (brandData) => {
  const response = await axios.post(`${url}/createBrand`, brandData);

  return response.data;
};


export const BrandService={
    getallBrands,
    createBrand
}