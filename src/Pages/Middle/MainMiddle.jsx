
import React from 'react';
import Product from '../Middle/Middle'; // Assuming Product component is in the same folder
import Video from '../ShoeVideo/Video';


const MainMiddle = () => {
  const products = [
    { id: 1, imageSrc: '1.jpeg', productName: 'Shoe 1', price: 99.99 },
    { id: 2, imageSrc: '2.jpeg', productName: 'Shoe 2', price: 79.99 },
    { id: 3, imageSrc: '3.jpeg', productName: 'Shoe 3', price: 129.99 },
    { id: 4, imageSrc: '4.jpeg', productName: 'Shoe 4', price: 89.99 },
    { id: 5, imageSrc: '5.jpeg', productName: 'Shoe 5', price: 89.99 },
    { id: 6, imageSrc: '6.jpeg', productName: 'Shoe 6', price: 89.99 },
    { id: 7, imageSrc: '7.jpeg', productName: 'Shoe 7', price: 89.99 },
    { id: 8, imageSrc: '8.jpeg', productName: 'Shoe 8', price: 89.99 },
    // Add more products as needed
  ];

  return (  
    <>
    <div className="shoe-shop">
        <h4>Feature In</h4>
        <h1>SHOP MEN</h1>
        <div className='main-component'>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
      </div>
    </div>
    <Video/>
    </>

  );
};

export default MainMiddle;