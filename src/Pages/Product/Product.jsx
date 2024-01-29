import React from "react";
// import { useDispatch } from "react-redux";
// import { incrementCartItemCount } from "./cartSlice";
//import Navbar from './Navbar';
// App.js
import { useState } from "react";
import "../Product/Product.css"
import img from "../../Components/asset/image/img.png";
import img1 from "../../Components/asset/image/img1.png";
import img2 from "../../Components/asset/image/img2.png";
import img3 from "../../Components/asset/image/img3.png";
import img4 from "../../Components/asset/image/img4.png";
import img5 from "../../Components/asset/image/img5.png";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

// import Navbar from "./Navbar";

const Product = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const [products, setProducts] = useState([
    { id: 1, name: "gresi sport", image: img, price: 70, discount: 20 },
    { id: 2, name: "laxy shoes s9", image: img1, price: 60, discount: 15 },
    { id: 3, name: "campus sports", image: img2, price: 45, discount: 8 },
    { id: 4, name: "sports biuestar x", image: img3, price: 70, discount: 20 },
    { id: 5, name: "boco shoes G", image: img4, price: 55, discount: 12 },
    { id: 6, name: "bata gaxxi", image: img5, price: 65, discount: 18 },
  ]);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

//   const AddtoCart = (productName, price, discount) => {
//     // Add your buy now logic here
//     console.log(`Buying ${productName} for $${price} with ${discount}% off`);
//   };

//   const dispatch = useDispatch();

  const handleAddToCartClick = (productId) => {
    // dispatch(incrementCartItemCount({ id: productId }));
  };

  const newRating = 0;
  const ratingChanged = newRating;

  return (
    <>
      {/* <Navbar handleAddToCartClick={handleAddToCartClick} /> */}

      <div id="main">
        <div id="Product-left">
          <div className="Happy1">
            <div className="chooseone">
              <h3 className="select1">SORT BY</h3>
              <select required className="select1">
                <option value="" disabled selected hidden>
                  RELEVANT PRODUCTS...
                </option>
                <option>
                  <h6>LOW TO HIGH</h6>
                </option>
                <option>
                  <h6>HIGH TO LOW</h6>
                </option>
              </select>
            </div>
            <div className="catagrious">
              <h5 className="maku">SOHES CATAGORIES</h5>
              <input
                className="input1"
                type="range"
                min="0"
                max="4000"
                step="1"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <h3 className="output">Price Range: {rangeValue}</h3>
              <h3>Items of Brands</h3>
              <input type="checkbox" id="checkbox1" className="cheku" />
              NIKE <br />
              <input type="checkbox" id="checkbox2" className="cheku" />
              ADDIDAS <br />
              <input type="checkbox" id="checkbox3" className="cheku" />
              CAMPUS <br />
              <input type="checkbox" id="checkbox4" className="cheku" />
              WOODLAND <br />
              <input type="checkbox" id="checkbox5" className="cheku" />
              RED CHEIF
              <hr size="9" color="black" />
              <h3>FOOT SIZE</h3>
              <button className="Anku">UK 5</button>{" "}
              <button className="Anku">UK 6</button>
              <br />
              <button className="Anku">UK 7</button>
              <br />
              <button className="Anku">UK 8</button>{" "}
              <button className="Anku">UK 9</button>
            </div>
          </div>
        </div>

        <div className="product-container">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                className="product-image2"
                src={product.image}
                alt={product.name}
              />
              <div id="add-card">
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">
                    ${product.price}{" "}
                    <span className="discount">({product.discount}% off)</span>
                  </div>
                  <div className="starss">
                    {/* <CiStar /><CiStar /><CiStar /><CiStar /><CiStar /> */}
                    <Link className="star">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                      />
                    </Link>

                    <button
                      className="buy-now-btn"
                    //   onClick={() => {
                    //     handleAddToCartClick(product.id);
                    //     AddtoCart(
                    //       product.name,
                    //       product.price,
                    //       product.discount
                    //     );
                    //   }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
