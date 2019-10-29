import React from 'react'
import {shallow} from 'enzyme'

import Routes from './index'
import GetLocation from '../containers/getLocation/index'
import NextDaysDetails from '../components/NextDaysDetails'



describe('Routes testing', () => {
    let pathMap;
    beforeAll(() => {
        const component = shallow(<Routes/>);
        pathMap = component.find('Route').reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
          }, {});
          console.log(pathMap)
      })

      it("Test both routes",()=>{
        expect(pathMap['/']).toBe(GetLocation);
        expect(pathMap['/details']).toBe(NextDaysDetails)
      })


  });