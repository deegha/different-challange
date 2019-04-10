import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.module.scss'

export const Column = ({children}) => {
  return  (
   <div className={css.column}>{children}</div>
  )
}

Column.propTypes = {
  children:PropTypes.any.isRequired
}
