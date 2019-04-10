/**
 * Created by Deegha 10/04/2019
 */

import React from 'react'
import { connect } from 'react-redux' 
import { fetchLeases } from '../../actions/leaseActions'

import { LandingView } from './LangingPageView'

class LandingPgage extends React.Component {

  componentDidMount() {
    const {fetchLeases, lease} = this.props
    if(!lease.hasData) 
      fetchLeases()
  }

  render() {
    return (
      <LandingView {...this.props.lease} />
    )
  }
}

const mapStateToProps = ({lease}) => ({
  lease
})

const mapDispatchToProps = (dispatch) => ({
  fetchLeases: () => dispatch(fetchLeases())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPgage)
