import React, {Component} from 'react';
import ExerciseList from '../../components/exerciselist/ExerciseList';
import Aux from '../../hoc/auxiliary/Auxiliary';
import Workout from '../../components/workout/Workout';
import BodypartControll from '../../components/controlls/BodypartControll';

class FitnessGuru extends Component {

    state = {
        exercises : [ 
            [
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
        ], [
                {
                    id : 0,
                    name : 'Squat',
                    imageName : 'SQUAT IMAGE'
                },
                {
                    id : 1,
                    name : 'Deadlift',
                    imageName : 'DEADLIFT IMAGE'
                },
                {
                    id : 2,
                    name : 'Lunges',
                    imageName : 'LUNGES IMAGE'
                }
        ]],
        currentExercises :[],

        currentBodypart : 1, //leg exercise

        bodyparts : [
            {
                id : 0,
                name : 'Arm'
            },
            {
                id : 1,
                name : 'Leg'
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

    constructor(props){
        super(props);
        this.state.currentBodypart = this.state.defaultBodypart;
        this.state.currentExercises = this.state.exercises[1]; //TODO: change undefined
    };

    bodypartHandler = (bodypartID) => {

    }

    render(){

        return(
        <Aux>
            <BodypartControll bodypart={this.state.bodyparts} clicked={this.bodypartHandler}/>
            <ExerciseList exercises={this.state.currentExercises}/>
            <Workout exercises={this.state.workout}/>
        </Aux>

    );
    }
}

export default FitnessGuru;