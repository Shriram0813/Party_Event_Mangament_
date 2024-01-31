
import React from 'react';
import '../assets/css/About.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
      <Navbar />
    
    <div className='color'>
    <div className="about-us-container" style={{marginTop:"-20px"}}>
      <header>
       <div className='me'> <h1>About Us</h1></div>
      </header>
      <section className="main-content">
        <div className="centered-image">
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/abt.jpg" alt="Surprise Image" />
        </div>
        <div className="text-section">
          <p>
            Bringing out a big fat smile on our loved one’s faces is probably the best feeling
            in the world. Give yourself and your loved one this Happiness. The best way to do
            this would be by planning a surprise for them that can melt their heart away. Who
            better than Event U to help you plan an extraordinary surprise for your
            loved ones to make them smile.
          </p>
          <p>
            Event U is a surprise planning company based in Chennai. We orchestrate
            various surprises and events for all kinds of occasions - birthdays, anniversaries,
            weddings, baby showers, etc., and aim at providing high-quality services at
            affordable prices.
          </p>
          <p>
            Our team of happiness specialists understands the budget and requirements of each
            of our clients personally and comes up with a customized package according to the
            given inputs, making each surprise unique and special in its own way. From
            customized gifts to customized surprises, we do it all. Though we are based in
            Chennai, we do take up outstation orders as well and are willing to travel down to
            spread some happiness.
          </p>
          <p>
            With millions of happy clients across the globe, We, Event U, aim at
            bringing out the best smile on people’s faces. We also offer you plenty of
            surprise events such as flash mob surprises, yacht surprises, etc.
          </p>
        </div>
      </section>
      <section className="image-section">
        <div className="image-description">
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/our-mission.jpg" alt="Image 1" />
          <h1>What do we do?</h1><p> With millions of happy clients across the globe, We, Event U, aim at bringing out the best smile on people’s faces.</p>
        </div>
        <div className="image-description">
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/Girl.jpg" alt="Image 2" />
          <h1>Our Mission </h1><p>Our Happiness Soldiers work all day, every day to ensure loads of smiles.</p>
        </div>
        <div className="image-description">
          <img src="https://www.surprisemachi.com/wp-content/uploads/2021/07/what-we-do.jpg" alt="Image 3" />
         <h1> History Of Us Event U </h1><p>was started on the 19th of Jan, 2024. Since then, we have managed to make millions of people smile and bring about a sense of satisfaction on our client’s faces.</p>
        </div>
      </section>
      <footer>
        {/* <p>&copy; 2024 Surprise Machi. All rights reserved.</p> */}
      </footer>
    </div>
    {/* <FooterComponent/> */}
    </div>
    <Footer/>
    </>
  );
};

export default About;