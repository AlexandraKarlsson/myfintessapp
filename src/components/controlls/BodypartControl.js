import React from 'react';

const bodypartControl = (props) => {
    return(<button onClick={props.clicked}>{props.name}</button>);
}

export default bodypartControl;