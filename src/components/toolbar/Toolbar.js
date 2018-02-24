import React from 'react';
import classes from './Toolbar.css';
import Logo from '../logo/Logo';

const toolbar = (props) => {

const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0',
    margin: '0',
    backgroundColor: '#8E24AA',
    color: 'white'
}

const navStyle = {
    margin: '25px 20px 20px 20px'
}

    return(
        <div style={toolbarStyle}>
            <Logo/>
            <h1>YOUR FITNESS APP!:)</h1>
            <nav style={navStyle}>MENU</nav>
        </div>
    );
}

export default toolbar;