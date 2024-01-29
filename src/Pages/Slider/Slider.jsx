import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://www.si.com/.image/t_share/MjAyMDczMDQ2NTc4NzY3NDcz/best-womens-shoe-for-standing-all-day_-nike-infinityrn-4.png" },
    { url: "https://img.freepik.com/free-vector/classic-shoes-realistic-composition_1284-65193.jpg?w=1060&t=st=1704700873~exp=1704701473~hmac=5345ea1594b5413eb652eb2a09903eea152c19100335e3d51e2544b707ec2fd8" },
    { url: "https://images.squarespace-cdn.com/content/v1/543d50d6e4b0329637d6c711/1667428890409-6O0PNAM7RL420WP4IZPZ/AetrexBootBanner22.jpg?format=1500w" },
    { url: "https://i.pinimg.com/736x/89/a3/c4/89a3c4c14cca941a60d65a24d0934542.jpg" },
    { url: "https://www.antexa.com/images/antex-machines/conoprint/conoprint-shoes-slider-antex-multicolor-space-dyeing-machines-biella-italy.jpg" },
    { url: "https://cdn.shopify.com/s/files/1/0619/3286/3714/files/title2-1.jpg" },
  ];


  const Slider = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const isMobile = windowWidth <= 768; // Define your breakpoint for mobile
  
    return (
      <>
        <div>
          <SimpleImageSlider
            width={isMobile ? '100%' : '100%'} // Adjust width based on device size
            height={isMobile ? 400 : 700} // Adjust height based on device size
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            autoPlay={true}
            autoPlayDelay={4}
            loop={true}
          />
        </div>
        <Outlet/>
      </>
    );
  };
  
  export default Slider;