import React, { Component } from 'react'
import './Calculator.css'

export default class Calculator extends Component {
    state = {
        displayValue: '0',
        numbers :[],
        operators:[],
        selectedOperator:'',
        storedValue:''
    }

    render() {
        return (
            <div className="calculator-container">
            hii
            </div>
        )
    }
}
