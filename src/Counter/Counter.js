import React from 'react';
import './counter.css';

const Counter = (props) => {
    return (
        <div className="counter">
            <div className="que">
                <h2>Question No : {props.current +1} / {props.total}</h2>
            </div>
            <div className="marks">
                <h3>Marks : {props.marks}</h3>
            </div>
        </div>
    )
}
export default Counter