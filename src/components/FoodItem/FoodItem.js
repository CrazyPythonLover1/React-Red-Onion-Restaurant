import React from 'react';
import "./FoodItem.css"
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 220,
      width: 220,
    },
    title:{
        textDecoration:"none",
    }
  });

const FoodItem = ({img,id,name,des,price}) => {
    const classes = useStyles();
    
    
    return (
        
        <div className="food__item">
           
    
      
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          
            <Link to={"/food/"+id}> <h2 className="food__title"> {name} </h2> </Link> 
          
          <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Typography gutterBottom variant="h5" component="h1">
            ${price} 
          </Typography>
        </CardContent>
      
   
        </div>
        
    );
};

export default FoodItem;



    
    
  
    
