import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

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
        // unpack the component state by using Object Destructuring
        const {displayValue,numbers,operators }=this.state
        return (
            <div className="calculator-container">
                <Display    displayValue={displayValue}/>

                <Keypad     
                    callOperator={this.callOperator}
                    setOperator={this.setOperator}
                    updateDisplay={this.updateDisplay}
                    numbers={numbers}
                    operators={operators}
                />
            </div>
        )
    }
}
