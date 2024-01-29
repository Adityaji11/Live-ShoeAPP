import axios from "axios";
import { url} from "../api";

const getUsers = async () => {
  const response = await axios.get(`${url}/all-users`);
  return response.data;
};

export const customerService ={
  getUsers,
}