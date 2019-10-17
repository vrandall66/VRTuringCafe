import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container'

describe("Container", () => {
  let wrapper;
  let reservations = [
    {
      name: "",
      date: "",
      number: 0,
      time: "",
      id: 4
    },
    {
      name: "",
      date: "",
      number: 1,
      time: "",
      id: 5
    }
  ]
  
  beforeEach(() => {
    wrapper = shallow(<Container reservations={reservations} />)
  })

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  })
})