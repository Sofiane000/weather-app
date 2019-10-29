import React from "react"
import GetWeather from "./GetWeather"
import { shallow } from "enzyme"

describe("Testing Weather component", () => {
  const container = shallow(<GetWeather />)

  it("*** Is Weather component render", () => {
    expect(container.length).toEqual(1)
  })
})
