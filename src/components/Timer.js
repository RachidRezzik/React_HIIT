import React, { Component } from 'react'

export class Timer extends Component {
    getStyle = () => {
        return {
            background: this.props.isRest ? "red" : "rgb(7, 197, 7)",
            textAlign: "center",
            padding: "10px",
            borderRadius: "0px 0px 5px 5px"
        }
    }

    previousPeriod = () => {
        if (this.props.periods !== 0){
            this.props.workRest("previous")
        }
    }

    nextPeriod = () => {
        if (this.props.roundsCompleted !== this.props.workout[0].rounds){
            this.props.workRest("next")
        }
    }

    render() {     
        let workoutFinished = this.props.workoutFinished
        if(!workoutFinished){
            return <div style = {this.getStyle()}>
                <div className="time">
                        <span style={{marginRight: "7.5px", transform: "rotate(180deg)", fontSize: "17.5px", cursor: "pointer"}} onClick={this.previousPeriod}>➤</span>
                        <h2> {this.props.minutes}</h2>
                        <span>:</span>
                        <h2> {this.props.seconds}</h2>
                        <span style={{marginLeft: "7.5px", fontSize: "17.5px", cursor: "pointer"}} onClick={this.nextPeriod}>➤</span>
                    </div>
                    <button onClick={this.props.handleTimer}>{this.props.isRunning ? 'Stop' : 'Start'}</button> 
                    <button style={{marginLeft: "2.5px"}} onClick={this.props.resetTime}>Reset Duration</button>
                    <h3>Rounds Completed: <span>{this.props.roundsCompleted}/{this.props.workout[0].rounds}</span></h3>
            </div>       
        } else{
            return <div style = {{background: "blue", padding: "20px", color: "white", borderRadius: "0px 0px 5px 5px"}}>
                        <h1>Your Workout is Finished! Great Job!</h1>
                    </div> 
        }
    }
}

export default Timer
