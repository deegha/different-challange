import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LandingView } from '../../pages/landingPage/LangingPageView'
import { Loading, Error } from '../../components/'
import { leaseList } from '../mockDate/lease'

Enzyme.configure({ adapter: new Adapter() })

function setup(leases, loading, errorMessage, hasError) {
  const props = {
    loading: loading,
    error:{errorMessage, hasError},
    leases 
  }

  const enzymeWrapper = shallow(<LandingView {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Landing page', () => {

  describe('Landing page view on error', () => {
    it('should render self and render Error', () => {
      const { enzymeWrapper } = setup([], false, 'There was an error', true)
      expect(enzymeWrapper.contains(<Error message={'There was an error'} />)).toEqual(true)
    })
  })

  describe('Landing page view on loading', () => {
    it('should render self and render Loading', () => {
      const { enzymeWrapper } = setup([], true, '', false)
      expect(enzymeWrapper.contains(<Loading />)).toEqual(true)
    })
  })

  describe('Landing page view on loading false', () => {
    it('should render self, should not render Loading and should render the leaseItems div', () => {
      const { enzymeWrapper } = setup(leaseList, false, '', false)
      expect(enzymeWrapper.contains(<Loading />)).toEqual(false)
      expect(enzymeWrapper.find('div').hasClass('leaseItems')).toBe(true) 
      expect(enzymeWrapper.contains(<Error message={'There was an error'} />)).toEqual(false)
    })
  })
})