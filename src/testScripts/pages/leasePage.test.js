import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LeasePageView } from '../../pages/leasePage/LeasePageView'
import { Loading, Error } from '../../components/'
import { generatedLeaseArray } from '../mockDate/activeLease'

Enzyme.configure({ adapter: new Adapter() })

function setup(lease, loading, errorMessage, hasError, hasData) {
  const props = {
    hasData,
    loading: loading,
    error:{errorMessage, hasError},
    lease 
  }
  const enzymeWrapper = shallow(<LeasePageView {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('Lease page', () => {
  describe('Lease page view on error', () => {
    it('should render self and render Error', () => {
      const { enzymeWrapper } = setup([], false, 'Somthing went wrong', true)
      expect(enzymeWrapper.contains(<Error message={'Somthing went wrong'} />)).toEqual(true)
    })
  })

  describe('Lease page view on loading', () => {
    it('should render self and render Loading', () => {
      const { enzymeWrapper } = setup([], true, '', false)
      expect(enzymeWrapper.contains(<Loading />)).toEqual(true)
    })
  })

  describe('Lease page view on has data', () => {
    it('should render self, should not render Loading and should render the leaseItems div', () => {
      const { enzymeWrapper } = setup(generatedLeaseArray, false, '', false)
      expect(enzymeWrapper.contains(<Loading />)).toEqual(false)
      expect(enzymeWrapper.find('div').hasClass('leaseItems')).toBe(true) 
    })
  })
})