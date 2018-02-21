import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => {

const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0',
    margin: '0',
    backgroundColor: '#E65100',
    color: 'white'
}

    return(
        <div style={toolbarStyle}>
            <div>LOGO</div>
            <p>YOUR FITNESS APP!:)</p>
            <nav>MENU</nav>
        </div>
    );
}

export default toolbar;