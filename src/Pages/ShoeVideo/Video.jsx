import React from 'react';
import '../ShoeVideo/Video.css'; // Import the CSS file
import JustReleased from '../JustReleased/JustReleased';
import ShoeStore from '../ShoeStore/ShoeStore';

const Video = () => {
  return (
    <>
    <div className="video-container">
      <video
        className="w-full"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: 'auto' }}
      >
        <source
          src="https://cdn.sanity.io/files/qa41whrn/staging/335db53a8496421d77808d251659e692b73b95cb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <ShoeStore/>
    <JustReleased/>
    </>

  );
};

export default Video;
