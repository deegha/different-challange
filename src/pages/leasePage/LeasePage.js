/**
 * Created by Deegha 10/04/2019
 */

import React from 'react'
import { connect } from 'react-redux'
import { fetchActiveLease } from '../../actions/activeLeaseActions'
import { LeasePageView } from './LeasePageView'

class LeasePage extends React.Component {

  componentDidMount() {
    const { match, fetchActiveLease } = this.props
    const slug = match.params.id
    fetchActiveLease(slug)
  }

  render() {
    return(
     <LeasePageView {...this.props.activelease} />
    ) 
  }
}

const mapStateToProps = ({ activelease }) => ({
  activelease
})

const mapDispatchToProps = (dispatch) => ({
  fetchActiveLease: (id) => dispatch(fetchActiveLease(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(LeasePage)
