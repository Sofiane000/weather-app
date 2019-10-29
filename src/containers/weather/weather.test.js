import React from "react"
import { Provider } from "react-redux"

import ConnectedWeather, { Weather } from "./index"
import configureStore from "redux-mock-store"
import { getWeatherData } from "../../redux/actions/weatherAction"
import { createStore, applyMiddleware } from "redux"
import reducers from "../../redux/reducers/index"

import { shallow, mount } from "enzyme"
import thunk from "redux-thunk"

describe("Testing Weather with redux", () => {
  const initialState = {
    data: {},
    loader: new Date(),
    getWeatherStatus: "not done"
  }
  let store, wrapper

  beforeEach(() => {
    store = createStore(reducers, {}, applyMiddleware(thunk))
    wrapper = mount(
      <Provider store={store}>
        <ConnectedWeather />
      </Provider>
    )
  })

  it("*** Is connected component render", () => {
    expect(wrapper.find(ConnectedWeather).length).toEqual(1)
  })

  it("*** check Prop matches with initialState", () => {
    expect(wrapper.find(Weather).prop("getWeatherStatus")).toBe(initialState.getWeatherStatus)
  })

})

