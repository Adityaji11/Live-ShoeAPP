import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { Select } from "antd";
import Dropzone from "react-dropzone";

const AddProduct = () => {
  // const brandState = useSelector((state) => state.brand.brands);
  // const colorState = useSelector((state) => state.color.colors);

  const [input, setInput] = useState({});

  const coloropt = [];
  // colorState.forEach((i) => {
  //   coloropt.push({
  //     label: i.title,
  //     value: i._id,
  //   });
  // });


  const HandleSubmit = ()=>{

  }
  const HandleOnChange = (e) => {
      let name = e.target.name;
      let value = e.target.value
  };
  return (
    <>
      <div>
        <h4>Add Product</h4>
        <div>
          <div className="Product-form">
            <div className="form-floating mt-3">
              <input
                type="text"
                name="title"
                placeholder="Product Title"
                value={input.title}
                onChange={HandleOnChange}
              />
              <label htmlFor="">Enter Product Title</label>
            </div>
            <div className="">
              <ReactQuill
                theme="snow"
                name="description"
                value={input.description}
                onChange={HandleOnChange}
                placeholder="Description Box"
              />
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                value={input.price}
                onChange={HandleOnChange}
              />
              <label htmlFor="">Enter Product Price</label>
            </div>
            <select
              name="brand"
              value={input.brand}
              onChange={HandleOnChange}
              className="form-select-option"
              id=""
            >
              <option value="">Select Brand</option>
              {/* {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })} */}
            </select>
            <Select
              mode="multiple"
              allowClear
              className=""
              placeholder="Select colors"
              Value={input.color}
              onChange={HandleOnChange}
              options={coloropt}
            />
            <div className="form-floating mt-3">
              <input
                type="number"
                name="quantity"
                placeholder="Product Quantity"
                value={input.quantity}
                onChange={HandleOnChange}
              />
              <label htmlFor="">Enter Product Quantity</label>
            </div>
            <div className="DropZone">
              <Dropzone
              // onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className="D-mac">
            {/* {imgState?.map((i, j) => { */}
              return (
                <div className="ps">
                  <button
                    className="btn-zone"
                    type="button"
                    // onClick={() => dispatch(delImg(i.public_id))}
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  {/* <img src={i.url} alt="" width={200} height={200} /> */}
                </div>
              );
            {/* })} */}
          </div>
          <button
            className="D-zone"
            onClick={HandleSubmit}
          >
            Add Product
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
