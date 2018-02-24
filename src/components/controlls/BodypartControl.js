import React from 'react';

const bodypartControl = (props) => {

    const buttonStyle = {
        margin: '0px 4px'
    }

    return(<button style={buttonStyle} onClick={props.clicked}>{props.name}</button>);
}

export default bodypartControl;