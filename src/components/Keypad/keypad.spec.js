import React from 'react'
import {shallow} from 'enzyme';
import Keypad from './Keypad'
import Key from '../Key/Key'

describe('Keypad',()=>{
    let wrapper;

    beforeEach(()=> {
        wrapper =shallow(
                    <Keypad 
                        callOperator ={jest.fn()}
                        numbers ={[]}
                        operators={[]}
                        setOperator={jest.fn()}
                        updateDisplay={jest.fn()}/>)
    })

    it('should render 3 <div />\'s', () => {
        expect(wrapper.find('div').length).toEqual(3);
    })

   it('renders the values of numbers', () => {
       wrapper.setProps({
           numbers: ['0','1','2']
       });
       expect(wrapper.find('.numbers-container').text()).toEqual('012');
   });

   it('renders the values of operators', () => {
       wrapper.setProps({
           operators: ["+","-","/","*"]
       });
       expect(wrapper.find('.operators-container').text()).toEqual('+-/*');
   });

   it('should render the instance of Key component',()=>{
       expect(wrapper.find('Key').length).toEqual(1)
   })

})