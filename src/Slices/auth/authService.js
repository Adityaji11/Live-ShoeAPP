import axios from "axios"
import { url} from "../api";


const register = async(userData)=>{
    const token = await axios.post(`${url}/register`, userData);
      return token.data;
}

const login = async(userData)=>{
    const token = await axios.post(`${url}/login`,userData);

      localStorage.setItem("token", token.data);
      // console.log(token);
      return token.data;
}

export const authService ={
    register,
    login,
}