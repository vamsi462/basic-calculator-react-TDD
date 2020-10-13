import React from 'react'
import {
    shallow, mount
} from 'enzyme'
import Calculator from './Calculator'
import Display from '../Display/Display'
import Keypad from "../Keypad/Keypad";

describe('Calculator', () => {
            let wrapper;
            beforeEach(() => wrapper = shallow( < Calculator/> ))
            it('should render correctly', () => expect(wrapper).toMatchSnapshot());

            it("should render a <div/>", () => {
                expect(wrapper.find('div').length).toEqual(1)
            })

            it('should render the Display and Keypad Components', () => {
                expect(wrapper.containsAllMatchingElements([ 
                    <Display displayValue = { wrapper.instance().state.displayValue}/>, 
                    <Keypad callOperator = {wrapper.instance().callOperator}
                            numbers = {wrapper.instance().state.numbers}
                            operators = {wrapper.instance().state.operators}
                            setOperator = {wrapper.instance().setOperator}
                            updateDisplay = {wrapper.instance().updateDisplay}
                    />
                ])).toEqual(true);
            });


});

//spyOn:-Creating a spy using the Jest spyOn;
//forceUpdate:- to re-render the instance in the test;
//simulate:- Enzyme's simulated method to  create correspondig key event 


describe('mounted calculator', () => {
    let wrapper;
    beforeEach(()=>wrapper = mount(<Calculator/>));

    it('calls updatedisplay method when number key is clicked',()=>{
        const spy = jest.spyOn(wrapper.instance(),'updateDisplay')
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0)
        wrapper.find('.number-key').first().simulate('click')
        expect(spy).toHaveBeenCalledTimes(1)

    })
     it('calls setOperator method when corresponding operator is clicked', () => {
         const spy = jest.spyOn(wrapper.instance(), 'setOperator')
         wrapper.instance().forceUpdate();
         expect(spy).toHaveBeenCalledTimes(0)
         wrapper.find('.operator-key').first().simulate('click')
         expect(spy).toHaveBeenCalledTimes(1)
     })
     it('calls callOperator when corresponding operator is called',()=>{
         const spy = jest.spyOn(wrapper.instance(),'callOperator')
         wrapper.instance().forceUpdate();
         expect(spy).toHaveBeenCalledTimes(0);
         wrapper.find('.submit-key').first().simulate('click')
        expect(spy).toHaveBeenCalledTimes(1);

     })
})
//Update Display Tests

describe('updateDisplay', () => {
    let wrapper;
    beforeEach(()=>wrapper = shallow(<Calculator/>))
    it('updates displayValue',()=>{
        wrapper.instance().updateDisplay('9')
        expect(wrapper.state('displayValue')).toEqual('9')
    })
    it('concatenates displayValue', () => {
        wrapper.instance().updateDisplay('5');
        wrapper.instance().updateDisplay('0');
        expect(wrapper.state('displayValue')).toEqual('50');
    });
    it('removes leading "0" from the displayValue ',()=>{
        wrapper.instance().updateDisplay('0');
        expect(wrapper.state('displayValue')).toEqual('0');
        wrapper.instance().updateDisplay('5');
        expect(wrapper.state('displayValue')).toEqual('5');
    })

     it('prevents multiple leading "0"s from displayValue', () => {
         wrapper.instance().updateDisplay('0');
         wrapper.instance().updateDisplay('0');
         expect(wrapper.state('displayValue')).toEqual('0');
     });

     it('removes the last char of displayValue',()=>{
        wrapper.instance().updateDisplay('5');
        wrapper.instance().updateDisplay('0');
        wrapper.instance().updateDisplay('ce');
        expect(wrapper.state('displayValue')).toEqual('5');     
     })
     it('prevents multiple occurances of "." in the displaValue', () => {
         wrapper.instance().updateDisplay('.');
         wrapper.instance().updateDisplay('.');
         expect(wrapper.state('displayValue')).toEqual('.');
     })

     it("will set the displaValue to '0' if it is equalt to an empty  string",()=>{
         wrapper.instance().updateDisplay('ce');
         expect(wrapper.state('displayValue')).toEqual('0')
     })

})

//Set Operator Tests

describe('setOperator', () => {
    let wrapper;

    beforeEach(()=>wrapper = shallow(<Calculator/>))

    it("updates the value of the selected operator",()=>{
        wrapper.instance().setOperator("+");
        expect(wrapper.state('selectedOperator')).toEqual("+")
        wrapper.instance().setOperator("*");
        expect(wrapper.state('selectedOperator')).toEqual("*")
    })
    it("updates the value of the storedValue to the displayValue",()=>{
        wrapper.setState({displayValue:'9'})
        wrapper.instance().setOperator('+')
        expect(wrapper.state('storedValue')).toEqual('9')
    })

    it('updates the value of displayValue to "0"', () => {
        wrapper.setState({ displayValue: '5' });
        wrapper.instance().setOperator('+');
        expect(wrapper.state('displayValue')).toEqual('0');
    });
     
    it('selectedOperator is not an empty string, does not update storedValue', () => {
        wrapper.setState({ displayValue: '5' });
        wrapper.instance().setOperator('+');
        expect(wrapper.state('storedValue')).toEqual('5');
        wrapper.instance().setOperator('-');
        expect(wrapper.state('storedValue')).toEqual('5');
    });
     
})


//call operator tests

describe('callOperator', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow( <Calculator/> ));
    it('updates the displayValue to the sum of storedValue and displayValue',()=>{
        wrapper.setState({displayValue:"9"})
        wrapper.setState({storedValue:"3"})
        wrapper.setState({selectedOperator:"+"})
        wrapper.instance().callOperator()
        expect(wrapper.state('displayValue')).toEqual('12')
    })
    it('updates displayValue to the difference of storedValue and displayValue', () => {
        wrapper.setState({ storedValue: '3' });
        wrapper.setState({ displayValue: '2' });
        wrapper.setState({ selectedOperator: '-' });
        wrapper.instance().callOperator();
        expect(wrapper.state('displayValue')).toEqual('1');
     });
    it('updates displayValue to the product of storedValue and displayValue', () => {
        wrapper.setState({ storedValue: '3' });
        wrapper.setState({ displayValue: '3' });
        wrapper.setState({ selectedOperator: 'x' });
        wrapper.instance().callOperator();
        expect(wrapper.state('displayValue')).toEqual('9');
     });
    it('updates displayValue to the quotient of storedValue and displayValue', () => {
        wrapper.setState({ storedValue: '3' });
        wrapper.setState({ displayValue: '3' });
        wrapper.setState({ selectedOperator: '/' });
        wrapper.instance().callOperator();
        expect(wrapper.state('displayValue')).toEqual('1');
     });
    it('updates displayValue to "0" if operation results in "Infinity"', () => {
        wrapper.setState({ storedValue: '7' });
        wrapper.setState({ displayValue: '0' });
        wrapper.setState({ selectedOperator: '/' });
        wrapper.instance().callOperator();
        expect(wrapper.state('displayValue')).toEqual('0');
    });
    it('updates displayValue to "0" if selectedOperator does not match cases', () => {
        wrapper.setState({ storedValue: '7' });
        wrapper.setState({ displayValue: '10' });
        wrapper.setState({ selectedOperator: 'string' });
        wrapper.instance().callOperator();
        expect(wrapper.state('displayValue')).toEqual('0');
    });
})
