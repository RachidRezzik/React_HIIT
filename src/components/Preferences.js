import React, { Component } from 'react'
import Timer from './Timer'
import Bell from '../audioClip/boxingBell.mp3'
import Champions from '../audioClip/champions.mp3'
import {Howl, Howler} from "howler"

const boxingSound = new Howl({
    src: [Bell]
})
const championsSound = new Howl({
    src: [Champions]
})

Howler.volume(0.05)

export class Preferences extends Component {
    state = { 
    workout: [
        {
        rounds: 1,
        workMin: "00",
        workSec: "00",
        restMin: "00",
        restSec: "00"
        }
    ],
    isRunning: false,
    workoutFinished: false,
    elapsedTime: 0,
    previousTime: 0,
    isRest: false,
    minutes: "00",
    seconds: "00",
    periods: 0,
    roundsCompleted: 0,
    noWorkoutSaved: true
    }
    
    //Timer Handlers
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    workRestHandler = (periodChangeType) => {
        if (!(this.state.isRest === true && this.state.periods === ((this.state.workout[0].rounds * 2) - 1)) || ((this.state.isRest === true && this.state.periods === ((this.state.workout[0].rounds * 2) - 1)) &&periodChangeType === "previous")){  
            if (this.state.noWorkoutSaved === false){
                if (periodChangeType === "next") {
                    this.setState(prevState => ({
                        periods: prevState.periods ++
                    }))
                } else {
                    this.setState(prevState => ({
                        periods: prevState.periods --
                    }))
                }
                this.setState(prevState => ({
                    isRest: !prevState.isRest,
                    elapsedTime: 0,
                    roundsCompleted: Math.floor(prevState.periods/2)
                }))
                if (this.state.isRunning){
                    boxingSound.play()
                } 
            }        
        } else {
            this.setState(prevState => ({
                isRunning: false,
                previousTime: 0,
                elapsedTime: 0,
                minutes: "00",
                seconds: "00",
                roundsCompleted: Math.floor((prevState.periods + 1)/2),
                workoutFinished: true
            }))
            championsSound.play()
        }
    } 

    tick = () => {
        let time = ""
        if (this.state.isRunning){
            const now = Date.now()
            this.setState(prevState => ({
                previousTime:now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }))
        }
        const seconds_passed = Math.floor(this.state.elapsedTime / 1000)
        if(this.state.isRest === false){
            time = (Number(this.state.workout[0].workMin) * 60) + (Number(this.state.workout[0].workSec))
        } else {
            time = (Number(this.state.workout[0].restMin) * 60) + (Number(this.state.workout[0].restSec))
        }
        time = time - seconds_passed
        let minutes = Math.floor(time/60)
        minutes = `0${minutes}`
        let seconds = time - (minutes*60)
        if (seconds.toString().length === 1) {
            seconds = `0${seconds}`
        }
        this.setState({
            seconds: seconds,
            minutes: minutes
        })
        if (this.state.isRunning === false && this.state.roundsCompleted === this.state.workout[0].rounds){
            this.setState({
                seconds: "00",
                minutes: "00"
            })
        } 
        if ((this.state.workout[0].workMin !== "00" || this.state.workout[0].workSec !== "00") && (this.state.workout[0].restMin !== "00" || this.state.workout[0].restSec !== "00") && this.state.isRunning === true){
            if (time === 0){
                this.workRestHandler("next")
            }
        }
    }

    handleTimer = () => {
        if ((this.state.workout[0].workMin !== "00" || this.state.workout[0].workSec !== "00") && (this.state.workout[0].restMin !== "00" || this.state.workout[0].restSec !== "00")){
            this.setState(prevState => ({
                isRunning: !prevState.isRunning
            }))
            if (!this.state.isRunning){
                this.setState({
                    previousTime: Date.now()
                })
            }
            if (this.state.elapsedTime === 0){
                boxingSound.play()
            }
        }
    }

    handleResetTime = () => {
        if ((this.state.workout[0].workMin !== "00" || this.state.workout[0].workSec !== "00") && (this.state.workout[0].restMin !== "00" || this.state.workout[0].restSec !== "00")){
            if(!this.state.isRunning){
                this.setState({
                    elapsedTime: 0,
                    previousTime: 0
                })
            } else{
                this.setState({
                    elapsedTime: 0
                })
                boxingSound.play()
            }
        }
    }

    
    //REFS for Select Changes
    roundSelect = React.createRef()
    workMinSelect = React.createRef()
    workSecSelect = React.createRef()
    restMinSelect = React.createRef()
    restSecSelect = React.createRef()

    saveWorkoutInfo = () => {
        championsSound.stop()
        if ((this.workMinSelect.current.value !== "00" || this.workSecSelect.current.value !== "00") && (this.restMinSelect.current.value !== "00" || this.restSecSelect.current.value !== "00")){
            let rounds = this.roundSelect.current.value
            if (rounds[0] === "0"){
                rounds = rounds[1]
            }
            this.setState({
                workoutFinished: false,
                noWorkoutSaved: false,
                isRunning: false,
                elapsedTime: 0,
                previousTime: 0,
                isRest: false,
                minutes: "00",
                seconds: "00",
                periods: 0,
                roundsCompleted: 0,
                workout: this.state.workout.map(workout => {
                    workout.rounds = rounds
                    workout.workMin = this.workMinSelect.current.value
                    workout.workSec = this.workSecSelect.current.value
                    workout.restMin = this.restMinSelect.current.value
                    workout.restSec = this.restSecSelect.current.value
                    return workout   
                })
            })
        }
    } 

    render() {
        return (
            <div style={{textAlign: 'center', background: 'lightgrey', paddingBottom: '0px', borderRadius: "0px 0px 5px 5px"}}>
                <h3>Total Rounds (Work+Rest)</h3>
                <select ref={this.roundSelect} >
                    <option value="01">01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                </select>
                <h3>Work Duration (MM:SS)</h3>
                <div>
                    <select ref={this.workMinSelect} >
                        <option>00</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                    </select>
                    <span style={{padding: '0px 5px'}}>:</span>
                    <select ref={this.workSecSelect} >
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>
                </div>
                <h3>Rest Duration (MM:SS)</h3>
                <div style={{paddingBottom: '10px'}}>
                    <select ref={this.restMinSelect} >
                    <option>00</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                    </select>
                    <span style={{padding: '0px 5px'}}>:</span>
                    <select ref={this.restSecSelect} >
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>
                    <button style={{display:"block", margin: "0px auto", marginTop: "20px"}} onClick={this.saveWorkoutInfo}>Save/Update</button>
                </div>  
                <Timer 
                workout = {this.state.workout}
                isRunning = {this.state.isRunning}  
                isRest = {this.state.isRest}  
                elapsedTime = {this.state.elapsedTime}    
                previousTime = {this.state.previousTime}   
                handleTimer = {this.handleTimer} 
                resetTime = {this.handleResetTime}
                workRest = {this.workRestHandler}
                minutes = {this.state.minutes}
                seconds = {this.state.seconds}
                periods = {this.state.periods}
                roundsCompleted = {this.state.roundsCompleted}
                workoutFinished = {this.state.workoutFinished}
                />
            </div>
        )
    }
}

export default Preferences
