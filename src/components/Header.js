import React from 'react'

function Header() {
    return (
        <div style={headerStyle}>
            <h1>HIIT Workout Timer</h1>
            <p style={{width: "90%", margin: "0px auto"}}>Save Your Rounds/Work/Rest Preferences to Start Your Workout</p>
        </div>
    )
}

const headerStyle = {
    textAlign: 'center',
    background: 'black',
    color: 'white',
    borderRadius: '5px 5px 0px 0px',
    // marginBottom: '-15px',
    padding: '5px'
}


export default Header