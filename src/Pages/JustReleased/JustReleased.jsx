import React from 'react'
import "../JustReleased/JustReleased.css"

import img1 from "../../Images/img1.png"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.png"
import img4 from "../../Images/img4.jpg"
import img7 from "../../Images/img7.png"
import img8 from "../../Images/img8.png"

const JustReleased = () => {
  return (
    <>
    <div className='main-div'>
      <h3 className='logo-new'>New Released</h3>

      <div className='main-div-1'>
        <div className='main-div-1-1'>
          <img src={img1} alt=''/> 
          <div className='main-div-2-1 main-div-2'> <a  href='/'>Softride Rift Runlyn <br/> Men's Slip ₹2,639</a></div>
        
        </div>
        
        <div className='main-div-1-2'>
          <img src={img2} alt=''/>
          <div className='main-div-2-2 main-div-2'><a href='/'>PUMA Widerer Men's <br/> Running Shoes ₹2,599</a> </div>
      
        </div>
        <div className='main-div-1-3'>
          <img src={img3} alt=''/> 
          <div className='main-div-2-3 main-div-2'><a href='/'> RS-X Games Unisex <br/> Sneakers ₹5,499</a><br></br></div>

          </div>
        <div className='main-div-1-4'>
          <img src={img4} alt=''/> 
          <div className='main-div-2-4 main-div-2'><a href=' /'> PUMA Widerer Men's <br/> Running Shoes ₹2,599</a></div>
          </div>

        
      </div>
      <div className='main-div-2'></div>


      <div className='main-div-3'>
        <div className='main-div-3-1'> <div className='main-div-3-1-1'><span>Feature Shoes <br/> of The Manth </span> <br/> 
        <br/><a href='/'>Discover now</a></div>
        <div className='main-div-3-1-2'> <img src={img7} alt=''  /></div>
        </div>
        <div className='main-div-3-2'>
          <div className='main-div-3-2-1'><span>Meat your next <br/> favrite shoes</span><br/> <br/> <a href='/'>shop now</a></div> 
       <div className='main-div-3-2-2'> <img src={img8} alt=''/></div>
        </div>
      </div>
  
  </div>
    </>
  )
}

export default JustReleased