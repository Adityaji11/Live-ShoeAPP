

import React from 'react'
import '../../Style/Middle.css'

const Middle = ({ id, imageSrc, productName, price }) => {
  return (
    <>
    <div className="product">
      <img src={imageSrc} alt={productName} className="product-image" />
      <div className="product-details">
        <p className="product-name">{productName}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
    </>
  )
}

export default Middle

