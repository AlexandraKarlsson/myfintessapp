import React from 'react';
import BodypartControl from './BodypartControl';

const bodypartControll = (props) => {
    const bodypartControls = props.bodyparts.map((bodypart, bodypartIndex) => {
        return <BodypartControl key={bodypart.id} clicked={()=> props.clicked(bodypartIndex)} name={bodypart.name} />
    });

    return(<div>{bodypartControls}</div>);
}

export default bodypartControll;