import React from 'react'

function scoreButtons(props) { 




    return (
        <div className="scoreButtons">
            <h2> Score: {props.score}</h2>
            <button className="decreaseBtn"  onClick= {()=> props.onScoreChange(false)}> Decrease</button>
            <button className="increaseBtn" onClick= {()=> props.onScoreChange(true)}> Increase</button>
            <button className="resetBtn" onClick= {props.onReset}> Reset </button>
        </div>
    )
}

export default scoreButtons;



