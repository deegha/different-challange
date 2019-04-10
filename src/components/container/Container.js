import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.module.scss'

export const Container = ({children, mode}) => {
  return(
    <div className={css[mode]}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  mode: 'outer',
}

Container.propTypes = {
  children: PropTypes.any,
  mode:PropTypes.string
}
