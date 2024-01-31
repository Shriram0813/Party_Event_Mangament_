// Navbar.js

// import React from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
//   const navigation=useNavigate();
//  const userClick=()=> {
//  navigation('/User')
//  }
  return (
    <Box sx={{ flexGrow: 1,width:"100%" }}  >
      <AppBar position="static" style={{backgroundColor:"#322618e0"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="nherit"
            aria-label="menu"
            sx={{ mr: 2 }} 
          >
            <MenuIcon />
          </IconButton >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'left'}}>
           Event U
          </Typography>
          <Link to ="/" style={{color:"white"}}><Button color="inherit">Home</Button></Link>
          <Link to ="/gallery" style={{color:"white"}}><Button color="inherit">Gallery</Button></Link>
          <Link to ="/themes" style={{color:"white"}}><Button color="inherit">Themes</Button></Link>
          <Link to ="/contact" style={{color:"white"}}><Button color="inherit">Contact</Button></Link>
          <Link to ="/about" style={{color:"white"}}><Button color="inherit">About</Button></Link>
          <Link to ="/login" style={{color:"white"}}><Button color="inherit">Login</Button></Link>
          <Link to ="/user" style={{color:"white"}}><Button color="inherit">User</Button></Link>
          <Link to ="/admin" style={{color:"white"}}><Button color="inherit">Admin</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';



// export default function Navbar() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" flexGrow='-1'>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//            Home
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//            Gallery
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Contact
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             About Us
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Sign In</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Gallery
//           </Typography>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             CONTACT
//           </Typography>
//           <Button color="inherit">Gallery</Button>
//           <Button color="inherit">Contact</Button>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
