import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Card1() {
  const navigation=useNavigate();
  const cardClick=()=> {
  navigation('/Themes')
  }
  
  const customizeClick=()=> {
  navigation('/Customize')
  }
  return (
    <>
    <div className='cd' style={{display:'flex',justifyContent:'center',padding:'50px'}}>
    <div style={{marginRight:'20px'}}>

    <Card sx={{ maxWidth: 345 }} onClick={cardClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-friends-enjoying-game-with-balloons_23-2147668923.jpg?w=996&t=st=1706598326~exp=1706598926~hmac=35acdbbf6f7d36e04c19574eb97e9b0f571aafbd87236b88523dbbc26febcc25"
          alt="no image"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Themed Venue Selection
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Our team will help you select a unique and memorable venue for your reunion party, based on your preferred theme.<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div style={{marginLeft:'20px'}}>
    <Card sx={{ maxWidth: 345 }} sty  onClick={customizeClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/people-having-fun-wedding-hall_1303-19593.jpg?w=996&t=st=1706598403~exp=1706599003~hmac=e29ffbdc5de64fd14d7120e096facfea9c885df3359142f92c6cf64c4410d589"
          alt="no image"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Customized Theme Decor
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Create the perfect ambiance with our personalized theme decor, tailored to suit your reunion party's unique style and preferences.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          </div>
    </>
  );
}
export default Card1;