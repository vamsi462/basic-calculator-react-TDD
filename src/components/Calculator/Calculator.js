import React, { Component } from 'react'
import './Calculator.css'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

export default class Calculator extends Component {
    state = {
        // value to be displayed in <Display />
        displayValue: '0',
        // values to be displayed in number <Keys />
        numbers :['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'],

        operators: ['/', 'x', '-', '+'],
        selectedOperator:'',
        storedValue:''
    }

    callOperator =()=> {
        let{displayValue,storedValue,selectedOperator}=this.state;
        const updateStoredValue = displayValue;

        displayValue= parseInt(displayValue,10);
        storedValue=parseInt(storedValue,10)
        switch (selectedOperator) {
            case '+':
                displayValue= storedValue+displayValue
                break;
            case '-':
            displayValue = storedValue - displayValue
            break;

            case 'x':
            displayValue = storedValue * displayValue
            break;
            case '/':
            displayValue = storedValue / displayValue
            break;
        
            default:
                displayValue=0
        }
       

        displayValue = displayValue.toString();
        selectedOperator = '';
         if (displayValue === 'Infinity'||displayValue ==='NaN') {
             displayValue = '0';
         }
        this.setState({
            displayValue,
            storedValue:updateStoredValue,
            selectedOperator
        })
    }


    setOperator =(value)=>{
       let {displayValue,selectedOperator,storedValue }= this.state;
       if(selectedOperator===""){
           storedValue =displayValue;
           displayValue ="0";
           selectedOperator=value;
       }
       else{
        selectedOperator = value;
       }
       this.setState({displayValue,selectedOperator,storedValue})
    }

    
      updateDisplay = value => {
          let {displayValue}= this.state;
          //prevent multiple occureance of '.
           if (value === '.' && displayValue.includes('.')){
                value = '';
           } 
        

        
        if(value ==='ce'){
            //deletes last character of the displayvalue 
            displayValue = displayValue.substr(0,displayValue.length-1)
                
                if (displayValue === '') displayValue = '0' ;    
        }
        else {
              displayValue === '0' ? (displayValue = value) : (displayValue += value);
          }
        
        this.setState({ displayValue });
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
