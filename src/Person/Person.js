import React from "react"
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>HI, I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' defaultValue={props.name} onChange={props.nameChanged} />
        </div>

    )
}

export default person