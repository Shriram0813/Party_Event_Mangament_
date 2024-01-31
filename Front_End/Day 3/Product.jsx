// ProductDetailPage.jsx

import React, { useState } from 'react';
import '../assets/css/Product.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState('https://img.freepik.com/free-photo/how-is-rich-people-have-supper-prepared-desk-waiting-food-visitors-evening-time_146671-14412.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais');
  const [smallImages, setSmallImages] = useState([
    'https://img.freepik.com/free-photo/calm-place-prepared-desk-waiting-food-visitors-evening-time_146671-14404.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais',
    'https://img.freepik.com/premium-photo/full-length-background-image-summer-picnic-table-outdoors-decorated-with-balloons-birthday-pa_236854-33463.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais',
    'https://img.freepik.com/free-photo/summer-barbecue-night_23-2147643500.jpg?size=626&ext=jpg&uid=R127991775&ga=GA1.1.1852684403.1688965484&semt=ais',
    
  ]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const navigation=useNavigate();
 const handleClick=()=> {
 navigation('/Payment')
 }
  return (
  <>
<Navbar/>
    <div className='page' >
    <div className="product-detail-container">
      <div className="product-images">
        <div className="main-image">
          <img src={selectedImage} alt="Product Main" />
        </div>
        <div className="small-images">
          {smallImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Small ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2>Garden Party</h2>
        <p className="product-price"> Rs:8,000</p>
        <button className="buy-now-button" onClick={handleClick}>Book Now</button>
      </div>
      <div className="product-description-section">
        <h3>Theme Description</h3>
        <p>
        Celebrate amidst blooming flowers and twinkling lights at an Enchanted Garden Soirée. Embrace garden chic attire, enjoy live music, lawn games, and a fresh, seasonal menu. Guests can create floral crowns, capture memories in a flower-filled photo booth, and depart with seed packets for a lasting touch.
        </p>
       <div className='key'><h2>Key Features</h2></div> 
        <p>
        * Outdoor Elegance: A garden party is characterized by its outdoor setting, often held in a well-maintained garden or outdoor space. The key feature is the natural ambiance, with guests enjoying the beauty of the surroundings, including flowers, greenery, and open skies.
        </p>
       <div className='para'> <p>
       * Relaxed Atmosphere: Unlike more formal events, garden parties typically have a casual and relaxed atmosphere. Guests are encouraged to mingle, enjoy outdoor activities, and savor refreshments in a laid-back setting. This creates a friendly and enjoyable environment for socializing.
        </p></div>
        <div className='para'> <p>
        * Seasonal Decor and Cuisine: Garden parties often incorporate seasonal elements in both decor and cuisine. Whether it's spring, summer, fall, or winter, the theme and decorations can reflect the current season. Additionally, the menu may highlight fresh, seasonal ingredients, and drinks may include refreshing options suitable for the outdoor setting.
        </p></div>
        {/* <div className='para'> <p>
        Alumni Memorabilia Corner: Dedicate a corner to showcase memorabilia from the past, including yearbooks, photographs, and other artifacts. This nostalgic display encourages attendees to take a trip down memory lane and share stories.
        </p></div> */}
      </div>
      
    </div>
    
    </div>
    <Footer/>
     </>
  );
};

export default Product;