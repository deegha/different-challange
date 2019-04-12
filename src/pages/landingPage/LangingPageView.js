/**
 * Created by Deegha 10/04/2019
 */

import React from 'react'
import css from './styles.module.scss'
import PropTypes from 'prop-types'
import { Container, Column, ListItem, Button, Loading, Error } from '../../components'

export const LandingView = ({leases, error:{errorMessage, hasError}, loading}) => {

  return (
    <Container mode={'outer'}>
      {hasError? (
        <Error message={errorMessage}/>
      ): (
        <Container mode={'wrapper'}>
          {loading ? (
            <Loading />
          ):(
            <div className={css.leaseItems}>
            {
            leases.map(lease =>  (
              <ListItem key={lease.id}>
                <Column>{lease.tenant}</Column>
                <Column>
                  <Button to={`/lease/${lease.id}`} color={'primary'} title={'view'} />
                </Column>
              </ListItem>
            ))
            }
            </div>
          )}
        </Container>
      )}
    </Container>
  )
}

LandingView.propTypes = {
  leases: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}
