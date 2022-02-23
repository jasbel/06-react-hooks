import React from 'react';
import {shallow} from 'enzyme';
import { HookApp } from '../HookApp'


describe('Pruebas en <HookApp />', () => {
  test('should see very good', () => { 
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  })
})