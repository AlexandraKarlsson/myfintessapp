import React, {Component} from 'react';
import ExerciseList from '../../components/exerciselist/ExerciseList';
import Aux from '../../hoc/auxiliary/Auxiliary';
import Workout from '../../components/workout/Workout';

class FitnessGuru extends Component {

    state = {
        exercises : [
            {
                id : 0,
                name : 'Bicep curl',
                imageName : 'BICEP CURL IMAGE'
            },
            {
                id : 1,
                name : 'Tricep press',
                imageName : 'TRICEP PRESS IMAGE'
            },
            {
                id : 2,
                name : 'Narrow bench press',
                imageName : 'NARROW BENCH PRESS IMAGE'
            }
        ],
        workout : [
            {
                id : 2,
                name : 'Narrow bench press',
                imageName : 'NARROW BENCH PRESS IMAGE'
            }
        ]
    }

    render(){
        return(
        <Aux>
            <div>
                Bodypart controll
            </div>
            <ExerciseList exercises={this.state.exercises}/>
            <Workout exercises={this.state.workout}/>
        </Aux>

    );
    }
}

export default FitnessGuru;