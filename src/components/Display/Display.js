import React from 'react'
import PropTypes from 'prop-types'

function Display({displayValue}) {
    return (
        <div className="display-container">
            hi from display 
        </div>
    )
}

Display.propTypes = {
    displayValue:PropTypes.string.isRequired
}

export default Display
