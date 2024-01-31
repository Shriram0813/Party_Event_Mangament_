import { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/img1.jpg";
import img1 from "../assets/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import '../assets/css/User.css'
import Card1 from "./Card";


function User() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"));

    setAdmissionDetails(formdata);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleEdit = (index) => {
    console.log("Editing item at index:", index);
  };

  const navigate =useNavigate();

  const navigateProfile = () => {
    navigate("/profile");
  };

  const navigateHome = () => {
    navigate("/");
  };
  const navigateThemes = () => {
    navigate("/themes");
  };
  const navigatelogout = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          {/* <h2>Dashboard</h2> */}
          <ul>
            <li onClick={() => handleOptionClick(1)}>Dashboard</li>
            <li onClick={navigateProfile}>Profile</li>
            <li onClick={navigateHome}>Home</li>
            <li onClick={navigateThemes}>Themes</li>
            <li onClick={navigatelogout}>Logout</li>
          </ul>
        </div>
        <div>
          <h1>Selected Themes</h1>
          <div className="cards">
       <Card1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
// import React from 'react';
// import "../assets/css/User.css";
// const User = () => {
//   return (
//     <>
//       <div className="sidebr">
//         <div className="logo-details">
//           <i className='bx bxl-c-plus-plus'></i>
//           <span className="logo_name">Event U</span>
//         </div>
//         <ul className="nav-links">
//           <li>
//             <a href="#" className="active">
//               <i className='bx bx-grid-alt'></i>
//               <span className="links_name">Dashboard</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className='bx bx-box'></i>
//               <span className="links_name">Profile</span>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className='bx bx-list-ul'></i>
//               <span className="links_name">Events</span>
//             </a>
//           </li>
//     <li>
//           <a href="#">
//             <i class='bx bx-message' ></i>
//             <span class="links_name">Themes</span>
//           </a>
//         </li>
      
      
//         <li class="log_out">
//           <a href="#">
//             <i class='bx bx-log-out'></i>
//             <span class="links_name">Log out</span>
//           </a>
//         </li>
//         </ul>
//       </div>

//       <section className="home-section">
//         <nav>
//           <div className="sidebar-button">
//             <i className='bx bx-menu sidebarBtn'></i>
//             <span className="dashboard">Dashboard</span>
//           </div>
//           <div className="search-box">
//             <input type="text" placeholder="Search..." />
//             <i className='bx bx-search'></i>
//           </div>
//           {/* <div className="profile-details">
//             <img src="images/profile.jpg" alt="" />
//             <span className="admin_name">Prem Shahi</span>
//             <i className='bx bx-chevron-down'></i>
//           </div> */}
//         </nav>

//         <div className="home-content">
//           <div className="overview-boxes">
//             <div className="box">
//               <div className="right-side">
//                 <div className="box-topic">Booked Events</div>
//                 <div className="number">4</div>
//                 <div>
                 
                 
//                 </div>
//               </div>
              
//             </div>
            
//             <div class="box">
//           <div class="right-side">
//             <div class="box-topic">Upcoming</div>
//             <div class="number">3</div>
//             <div>
            
           
//             </div>
//           </div>
//         </div>
//         <div class="box">
//           <div class="right-side">
//             <div class="box-topic">Completed</div>
//             <div class="number">1</div>
//             <div>
            
            
//             </div>
//           </div>
//         </div>
//             <div class="box">
//           <div class="right-side">
//             <div class="box-topic">Payments</div>
//             <div class="number">Rs.17000</div>
//             <div>
//             </div>
//           </div>
         
//         </div>
//       </div>
          

//       <div class="sales-boxes">
//         <div class="recent-sales box">
//           <div class="title">Recent Sales</div>
//           <div class="sales-details">
//             <ul class="details">
//               <li class="topic">Date</li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//               <li><a href="#">02 Jan 2021</a></li>
//             </ul>
//             <ul class="details">
//             <li class="topic">Customer</li>
//             <li><a href="#">Alex Doe</a></li>
//             <li><a href="#">David Mart</a></li>
//             <li><a href="#">Roe Parter</a></li>
//             <li><a href="#">Diana Penty</a></li>
//             <li><a href="#">Martin Paw</a></li>
//             <li><a href="#">Doe Alex</a></li>
//             <li><a href="#">Aiana Lexa</a></li>
//             <li><a href="#">Rexel Mags</a></li>
//              <li><a href="#">Tiana Loths</a></li>
//           </ul>
//           <ul class="details">
//             <li class="topic">Event</li>
//             <li><a href="#">Delivered</a></li>
//             <li><a href="#">Pending</a></li>
//             <li><a href="#">Returned</a></li>
//             <li><a href="#">Delivered</a></li>
//             <li><a href="#">Pending</a></li>
//             <li><a href="#">Returned</a></li>
//             <li><a href="#">Delivered</a></li>
//              <li><a href="#">Pending</a></li>
//             <li><a href="#">Delivered</a></li>
//           </ul>
//           <ul class="details">
//             <li class="topic">Total</li>
//             <li><a href="#">$204.98</a></li>
//             <li><a href="#">$24.55</a></li>
//             <li><a href="#">$25.88</a></li>
//             <li><a href="#">$170.66</a></li>
//             <li><a href="#">$56.56</a></li>
//             <li><a href="#">$44.95</a></li>
//             <li><a href="#">$67.33</a></li>
//              <li><a href="#">$23.53</a></li>
//              <li><a href="#">$46.52</a></li>
//           </ul>
//           </div>
//           <div class="button">
//             <a href="#">See All</a>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   </section>
//     </>
//   );
// };

// export default User;

