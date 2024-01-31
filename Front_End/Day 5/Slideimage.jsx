

import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img from '../assets/images/img2.jpg';
 const fadeImages = [
  {
     url:'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    url: 'https://images.unsplash.com/photo-1541485405271-dd9118b7153b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJldW5pb24lMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D',
    
  },
  {
    url: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600',
    
  },
];

const Slideimage = () => {
  return (
        
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%', height:'450px' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
        
  )
}
export default Slideimage;