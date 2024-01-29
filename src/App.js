import Layout from "./Components/Layout/Layout";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import Slider from "./Pages/Slider/Slider";
import Login from "./Components/Form/Login";
import SignUp from "./Components/Form/SignUp";
import MainMiddle from "./Pages/Middle/MainMiddle";
import Footer from "./Components/Layout/Footer/Footer";
import Error from "./Pages/Error";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import AdminLayout from "./Admin/AdminLayout";
import { useSelector } from "react-redux";
import MainLayout from "./Admin/AdminComponents/MainLayout";
import Customers from "./Admin/Pages/Customers";
import Dashboard from "./Admin/Pages/Dashboard";
import Orders from "./Admin/Pages/Orders";
import Productlist from "./Admin/Pages/ProductList";
import Product from "./Pages/Product/Product";
import AddProduct from "./Admin/Pages/AddProduct";
import BrandList from "./Admin/Pages/BrandList";
import AddBrand from "./Admin/Pages/AddBrand";
function App() {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Slider />}>
          <Route path="/" element={<MainMiddle />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<Error />} />

        {/* Admin Route */}
       
        { auth.loginStatus ==="success" && auth.isAdmin === true ? 
        <Route path="/admin" element={<MainLayout />} >

        <Route index element={<Dashboard />} />
        <Route  path="customers" element={<Customers />} />
        <Route  path="orders" element={<Orders />} />
        <Route  path="list-product" element={<Productlist />} />
        <Route  path="product" element={<AddProduct />} />
        <Route  path="brand" element={<AddBrand />} />
        <Route  path="list-brand" element={<BrandList />} />



        </Route>
        : null }
        
      </Routes>
      {auth.isAdmin===true ? null :<Footer/>}
      {/* <Footer /> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: Bounce,
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
