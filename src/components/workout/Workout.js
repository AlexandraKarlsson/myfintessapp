import React from 'react';
import Exercise from '../exercise/Exercise';
import './Workout.css';

const workout = (props) => {

    const workout = props.exercises.map(exercise => {
        return(<Exercise key={exercise.id} name={exercise.name} imageName={exercise.imageName}/>)
    });

    return(
        <div className='Workout'>
            {workout}
        </div>
    );
}

export default workout;