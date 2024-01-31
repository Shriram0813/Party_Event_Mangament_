
// import React from 'react';
 import { Card } from "@mui/material";
import "../assets/css/Home.css"
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import Slideimage from "./Slideimage";
import Card1 from "./Card";
import Navbar from "../components/Navbar";

// import videos from "../assets/videos/video2.mp4";
function Home() {
    return (
      
          <>
          <Navbar />
       {/* <video width="1200" height="700" style={{marginLeft:"150px"}}>
    <source src="./src/assets/videos/video2.mp4" type="video/mp4"/>

</video> */}
      <img src='./src/assets/images/img1.jpg' alt="no image" width={1520} height={700} style={{marginTop:'-20px'}}/>
      <h1 style={{fontFamily:'Libre Baskerville'}}>Bringing You Closer Together
</h1>
<h2 style={{paddingLeft:"50px",lineHeight:"40px"}} >
At Event U, we understand the importance of reunions in your life, and we’re here to help you make them memorable. Our services are designed to take you on a journey of reminiscence and create new memories together. From Memory Lane to the perfect venue, we’ve got you covered. Make your next reunion unforgettable with Event U!
</h2>
      
      

     <Slideimage />
     <Card1/>
     {/* <h1>qwertyuiopoijhgvcxdfgh</h1>
      <h1>qwertyuiopoijhgvcxdfgh</h1>
      <h1>qwertyuiopoijhgvcxdfgh</h1>
      <h1>qwertyuiopoijhgvcxdfgh</h1>
      <h1>qwertyuiopoijhgvcxdfgh</h1> */}
     
     
      <Footer/>
       </>
      
      );
      
}

export default Home;