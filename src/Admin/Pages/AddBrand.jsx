import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrand, resetState } from "../../Slices/Brand/BrandSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate()

  const newBrand = useSelector((state) => state.brands);
  const { isSuccess, isError, isLoading, createdBrand} = newBrand;
  
  const dispatch = useDispatch()

  const HandleOnchage = (e) => {
    let name = e.target.name
    let value = e.target.value

    setInput(Values=>({...Values , [name]:value}))
  };

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  
  const HandleSubmit = () => {
    console.log(input);
    dispatch(createBrand(input));
    setTimeout(() => {
        navigate("/admin/list-brand");
        dispatch(resetState());
      }, 1000);
  };
  return (
    <>
      <h3>Brand</h3>
      <div className="form-floating mt-3">
        <input
          type="text"
          name="title"
          placeholder="Brand Name"
          value={input.title}
          onChange={HandleOnchage}
        />
        <label htmlFor="">Enter Brand Name</label>
      </div>
      <button className="D-zone" onClick={HandleSubmit}>
        Add Brand
      </button>
    </>
  );
};

export default AddBrand;
