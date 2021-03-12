import React from 'react';
import './HotelStars.css'

const HotelStars = ({checked}) => {
    return (<div className={checked ? "checked star" : "unchecked star"}>
        ★
    </div>)
}
export default HotelStars;