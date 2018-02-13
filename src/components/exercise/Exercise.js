import React from 'react';
import './Exercise.css';

const exercise = (props) => {
    return(
        <div className='Exercise'>
            <div>{props.imageName}</div>
            <p>{props.name}</p>
        </div>
    );
}

export default exercise;