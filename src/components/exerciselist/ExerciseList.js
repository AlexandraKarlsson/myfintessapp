import React from 'react';
import Exercise from '../exercise/Exercise';
import './ExerciseList.css';

const exerciseList = (props) => {
    const exercises = props.exercises.map(exercise => {
        return(<Exercise key={exercise.id} name={exercise.name} imageName={exercise.imageName}/>)
    });

    return(
        <div className='ExerciseList'>
            {exercises}
        </div>
    );
}

export default exerciseList;