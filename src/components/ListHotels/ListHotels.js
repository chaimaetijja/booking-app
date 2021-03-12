import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import HotelStars from '../HotelsStars/HotelStars';
import '../HotelsStars/HotelStars.css';
import Link from '@material-ui/core/Link';
import HotelDetails from '../HotelDetails/HotelDetails';






const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      width: "100%",
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '30px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    button :{
      marginLeft :'80%'
    },

  }));
const compare =( a, b ) => {
    if ( a.price < b.price ){
      return -1;
    }
    if ( a.price > b.price ){
      return 1;
    }
    return 0;
  }
const ListHotels = (props) =>{
    let filled =Math.floor(Math.random() * 6);
    const star = new Array(5).fill(0).map(() => filled-- > 0 ? 1 : 0);
    var classes = useStyles()
        var listHotels = props.listHotels.sort(compare)
    console.log(listHotels)
    return (
    <Grid container spacing={1}>
            {listHotels.map((hotel)=> {
                return (
                    <Grid item xs={3}>
                        <Card className={classes.root} justifyContent='center'>
                           <Typography>{hotel.name}</Typography>  
                            <CardHeader
                                
                                subheader={star.map((item, key) => <HotelStars key={key} checked={item} />)}
                            />
                            <Carousel>
                                {hotel.image.map((item, i)=>{
                                    return(
                                        <CardMedia
                                            className={classes.media}
                                            image={item}
                                            key={i}
                                        />)        
                                })}   
                            </Carousel>
                            <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {hotel.price}$
                            </Typography>
                            <Link href='/HotelDetails'>
                              <Button className={classes.button} variant="contained" color="primary">
                                Details
                              </Button>
                            </Link>
                            </CardContent>
                            
                       </Card>
                    </Grid>
                );

            })}
    </Grid>

    );
};

export default ListHotels;