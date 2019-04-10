import  React from 'react'
import PropTypes from 'prop-types'
import { Container, Column, ListItem, RenderComponent } from '../../components'


export const LeasePageView = ({loading, error, lease, hasData}) => {

  return (
    <Container>
      <Container mode={'wrapper'}>
        {loading ? (
          <div>loading...</div>
        ):(
          hasData && lease.map(leaseRow =>  (
            <ListItem key={leaseRow.id}>
              <Column>{lease.tenant}</Column>
            </ListItem>
          ))
        )}
      </Container>
    </Container>
  )

}

LeasePageView.propTypes = {
  lease: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}