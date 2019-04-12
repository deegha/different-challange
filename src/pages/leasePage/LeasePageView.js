import  React from 'react'
import PropTypes from 'prop-types'
import { Container, Column, ListItem, Error, Loading } from '../../components'
import css from './styles.module.scss'
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const LeasePageView = ({loading,  error:{errorMessage, hasError}, lease, hasData}) => {

  return (
    <Container>
      {hasError ? (
        <Error message={errorMessage} />
      ): (
        <Container mode={'wrapper'}>
          {loading ? (
            <Loading />
          ):(
            <div className={css.leaseItems}>
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
      )}
      
    </Container>
  )

}

LeasePageView.propTypes = {
  lease: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}