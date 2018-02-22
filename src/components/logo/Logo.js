import React from 'react';
import fitnessLogo from '../../assets/images/fitnesslogo.jpg';

const logo = (props) => {

    const logoStyle = {
        margin: '5px',
        height: '60px',
    }
    return(
        <img style={logoStyle} src={fitnessLogo}/>
    );
}

export default logo;