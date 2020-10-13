import React from 'react'
import {
    shallow
} from 'enzyme'
import Calculator from './Calculator'
import Display from '../Display/Display'

describe('Calculator', () => {
            let wrapper;
            beforeEach(() => wrapper = shallow( < Calculator/> ))

            it("should render a <div/>", () => {
                expect(wrapper.find('div').length).toEqual(1)
            })

            it("shiould render the display component", () => {
                expect(wrapper.containsMatchingElement( <Display displayValue = {
                        wrapper.instance().state.displayValue
                    }
                    />)).toEqual(true);
                })

            });