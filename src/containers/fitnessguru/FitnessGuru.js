import React, {Component} from 'react';
import ExerciseList from '../../components/exerciselist/ExerciseList';
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
                    id : 3,
                    name : 'Squat',
                    imageName : 'SQUAT IMAGE'
                },
                {
                    id : 4,
                    name : 'Deadlift',
                    imageName : 'DEADLIFT IMAGE'
                },
                {
                    id : 5,
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

        workout : []
    }

    constructor(props){
        super(props);
        this.state.currentExercises = this.state.exercises[this.state.currentBodypart]; 
    };

    bodypartHandler = (bodypartIndex) => {
        if(this.state.currentBodypart !== bodypartIndex) {
            const currentExercises = this.state.exercises[bodypartIndex];
            this.setState({currentBodypart: bodypartIndex, currentExercises: currentExercises})
        }
    }

    exerciseListAddHandler = (exerciseId, exerciseIndex) => {
        
        // villkor : checka om exercisen inte finns i workout
        const exist = this.state.workout.find((workoutExercise) => {
            //return (workoutExercise.id == exerciseIndex ? true : false)
            return(workoutExercise.id === exerciseId)
        });

        if(!exist) {
            // copy the exercise
            let workoutExercise = {...this.state.exercises[this.state.currentBodypart][exerciseIndex]};
            
            //lägg till i workout
            let workoutUpdated = [...this.state.workout];
            workoutUpdated.push(workoutExercise);
            this.setState({workout: workoutUpdated});
        }
    }

    workoutRemoveHandler = (exerciseId) => {
        let workoutUpdated = [...this.state.workout];
        const removeIndex = workoutUpdated.findIndex(exercise => {
            return exercise.id === exerciseId;
        })
        workoutUpdated.splice(removeIndex,1);
        this.setState({workout: workoutUpdated});
    }

    render() {
        const fitnessGuruStyle = {
            backgroundColor: '#E1BEE7',
            height: '100vh'
        }

        return(
        <div style={fitnessGuruStyle}>
            <BodypartControll bodyparts={this.state.bodyparts} clicked={this.bodypartHandler}/>
            <ExerciseList exercises={this.state.currentExercises} clicked={this.exerciseListAddHandler}/>
            <Workout exercises={this.state.workout} clicked={this.workoutRemoveHandler}/>
        </div>

    );
    }
}

export default FitnessGuru;