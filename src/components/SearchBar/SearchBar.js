import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';







const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft:'30%',
      marginTop :'10%'
     

    },
  
  }));
  

const SearchBar = (props) =>{
    const classes = useStyles();
    const [location, setlocation] = React.useState('');
    const [selectedDateEntree, setSelectedDateEntree] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedDateSortie, setSelectedDateSortie] = React.useState(new Date('2014-08-18T21:11:54'));



    const handleChange = (event) => {
        setlocation(event.target.value);
    };
    const handleDateEntreeChange = (date) => {
        setSelectedDateEntree(date);
    };
    const handleDateSortieChange = (date) => {
        setSelectedDateSortie(date);
    };



    const getSearchResults = ()=>{
        axios.get('https://6048badffb5dcc0017968de7.mockapi.io/Hotel').then((response) => {
            var hotels = response.data ;
            console.log(hotels)
            var filteredHotels = hotels.filter((currentHotel) => {
                return (
                    currentHotel.location.toLowerCase() == location.toLowerCase()
                );     
            });
            props.setListHotels(filteredHotels);
        });
    }

    return (
            <Grid container className={classes.root} xs={5} spacing={5} alignItems='center'> 
                <Grid item xs={3}>
                    <TextField
                        id="outlined-basic"
                        label="Emplacement"
                        variant="outlined"
                        value={location}
                        onChange={handleChange}
                        color = 'primary'
                />
                </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={3}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDateEntree}
                            onChange={handleDateEntreeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                    />
                    </Grid>
                    <Grid item xs={3}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDateSortie}
                            onChange={handleDateSortieChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    </MuiPickersUtilsProvider>
            <Grid item xs={3}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => { getSearchResults() }}
                    >
                    Search
                </Button>
            </Grid>           
        </Grid>
    );
}


export default SearchBar ;