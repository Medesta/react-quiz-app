import React from 'react';
import './Next.css'

const Next = (props) =>{
    return (
        <div className="next">
            <button onClick={props.onClick}>{props.button}</button>
        </div>
    )
}
export default Next