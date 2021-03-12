import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ListHotels from '../ListHotels/ListHotels';
import Header from '../Header/Header';





const HomePage = ()=>{
        const [selectedHotels, setSelectedHotels] = React.useState([]);
        return (
        <div>
             <Header/>
             <SearchBar setListHotels ={setSelectedHotels}/>
             <ListHotels listHotels={selectedHotels}/>
        </div>
        );
};



export default HomePage;