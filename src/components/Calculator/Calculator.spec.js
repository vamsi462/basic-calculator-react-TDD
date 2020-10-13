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


describe('updateDisplay', () => {
    let wrapper;
    beforeEach(()=>wrapper = shallow(<Calculator/>))
    it('updates displayValue',()=>{
        wrapper.instance().updateDisplay('9')
        expect(wrapper.state('displayValue')).toEqual('9')
    })
})
