import React from 'react'



function questionAndPoints(props) {
    
    
    return (
        <div className="Categorypoints">
            <p> <span><b> CATEGORY:</b></span> {props.category}</p>
            <p> <span><b>POINTS: </b> </span> {props.points}</p>
            
        </div>
    )
}

export default questionAndPoints;
