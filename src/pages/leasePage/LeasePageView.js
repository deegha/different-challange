import  React from 'react'
import PropTypes from 'prop-types'
import { Container, Column, ListItem, RenderComponent } from '../../components'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const LeasePageView = ({loading, error, lease, hasData}) => {

  return (
    <Container>
      <Container mode={'wrapper'}>
        {loading ? (
          <div>loading...</div>
        ):(
          <div>
          <ListItem >
            <Column>From</Column>
            <Column>To</Column>
            <Column>Days</Column>
            <Column>Amount</Column>
          </ListItem>
         { hasData && lease.map(leaseRow =>  (
            <ListItem key={leaseRow.from}>
              <Column>{leaseRow.from}</Column>
              <Column>{leaseRow.to}</Column>
              <Column>{leaseRow.days}</Column>
              <Column>{formatter.format(leaseRow.amount)}</Column>
            </ListItem>
          ))}
          </div>
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