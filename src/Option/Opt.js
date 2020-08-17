import React from 'react';
import './opt.css'

const Opt = (props) => {
    return (
        <div className="options">
            <label onClick={props.onClick}>
                <div>
                    <span>{props.opt}</span>
                </div>
                <div>
                    <input  onChange={()=>{}} checked={props.value===props.opt} type='radio' name="answer" />
                </div>
            </label>
        </div>
    )
}
export default Opt 