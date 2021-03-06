import React from 'react'
import PropTypes from 'prop-types'
import './Key.css'

function Key({keyValue,keyType,keyAction}) {
    return (
        <div className = {`key-container ${keyType}`} 
            onClick={()=>keyAction(keyValue)}>
            <p className="key-value">
                {keyValue}
            </p>
        </div>
    )
}

Key.propTypes = {
    keyAction:PropTypes.func.isRequired,
    keyType:PropTypes.string.isRequired,
    keyValue:PropTypes.string.isRequired

}

export default Key

