import React from 'react';
import '../assets/css/Gallery.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Gallery = () => {
  return (
    <>
      <Navbar />
      <div>
        
      <p className="heading">Reunion Party Gallery</p>
      <div className="gallery-image">
        <div className="img-box">
          <img src="./src/assets/images/pho1.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Library</p>
              <p className="opacity-low">Architect Design</p>
            </div> */}
          </div> 
        </div>
        <div className="img-box">
          <img src="./src/assets/images/pho4.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Night Sky</p>
              <p className="opacity-low">Cinematic</p>
            </div> */}
          </div>
        </div>
        <div className="img-box">
          <img src="/src/assets/images/pho2.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Tea Talk</p>
              <p className="opacity-low">Composite</p>
            </div> */}
          </div>
        </div>
        <div className="img-box">
          <img src="/src/assets/images/pho5.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Road</p>
              <p className="opacity-low">Landscape</p>
            </div> */}
          </div> 
        </div>
        <div className="img-box">
          <img src="/src/assets/images/pho3.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Sea</p>
              <p className="opacity-low">Cityscape</p>
            </div> */}
          </div> 
        </div>
        <div className="img-box">
          <img src="/src/assets/images/pho6.jpg" alt="" />
          <div className="transparent-box">
            {/* <div className="caption">
              <p>Vintage</p>
              <p className="opacity-low">Cinematic</p>
            </div> */}
          </div> 
        </div>
      </div>
    </div>
    <Footer/>
            </>
  );
}

export default Gallery;
