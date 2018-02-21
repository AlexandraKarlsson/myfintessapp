import React from 'react';
import Exercise from '../exercise/Exercise';
import './Workout.css';

const workout = (props) => {

    const workout = props.exercises.map((exercise, index) => {
        return(
            <Exercise 
                key={exercise.id} 
                name={exercise.name} 
                clicked={() => props.clicked(exercise.id)} 
                imageName={exercise.imageName}/>
            )
    });

    return(
        <div className='Workout'>
            {workout}
        </div>
    );
}

export default workout;