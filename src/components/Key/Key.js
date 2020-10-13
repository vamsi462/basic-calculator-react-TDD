import React from 'react'
import PropTypes from 'prop-types'

function Key({keyvalue,keytype,keyaction}) {
    return (
        <div className="key-container">
            
        </div>
    )
}

Key.propTypes = {
    keyaction:PropTypes.func.isRequired,
    keytype:PropTypes.string.isRequired,
    keyvalue:PropTypes.string.isRequired

}

export default Key

