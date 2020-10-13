import React from 'react'
import PropTypes from 'prop-types'

function Keypad({callOperator,numbers, operators,setOperator,updateDisplay}) {
const numberKeys = numbers.map(number =><p key={number}>{number}</p>)
    return (
        <div className="keypad-container">
            <div className="numbers-container">
                {numberKeys}
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

