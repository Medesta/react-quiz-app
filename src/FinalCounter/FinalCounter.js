import React from 'react';
import './FinalCounter.css';

const FinalCounter = (props) => {
    return (
        <div className="final-counter">
            <div className="final-que">
                <h2>Question Attempted : {props.current +1} / {props.total}</h2>
            </div>
            <div className="final-marks">
                <h3>TotalMarks : {props.marks}</h3>
            </div>
        </div>
    )
}
export default FinalCounter