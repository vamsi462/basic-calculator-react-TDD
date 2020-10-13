import React from 'react'
import PropTypes from 'prop-types'
import './Keypad.css'

function Keypad({callOperator,numbers, operators,setOperator,updateDisplay}) {

const numberKeys = numbers.map(number =><p key={number}>{number}</p>)
const operatorKeys = operators.map(operator =><p key={operator}>{operator}</p>)
    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
            </div>
            <div className = "operators-container">
                 {operatorKeys}
            </div>
        </div>
    )
}

Keypad.propTypes = {
    callOperator:PropTypes.func.isRequired,
    numbers:PropTypes.array.isRequired,
    operators:PropTypes.array.isRequired,
    setOperator:PropTypes.func.isRequired,
    updateDisplay:PropTypes.func.isRequired
}

export default Keypad

