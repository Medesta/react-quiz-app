import React from 'react';
import './Question.css'

const Question = (props) => {
    return (
        <div className="question">
            <p>Question: {props.que[props.current]?.question}</p>
        </div>
    )
}
export default Question
