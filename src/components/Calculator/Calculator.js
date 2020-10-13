import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Display/Display'

export default class Calculator extends Component {
    state = {
        displayValue: '0',
        numbers :[],
        operators:[],
        selectedOperator:'',
        storedValue:''
    }

    callOperator =()=> {
        console.log('call operator')
    }

    setOperator =()=>{
        console.log('set operator')
    }

    updateDisplay = ()=>{
        console.log('update display')
    }
    

    render() {

        const {displayValue }=this.state
        return (
            <div className="calculator-container">
                <Display displayValue={displayValue}/>
            </div>
        )
    }
}
