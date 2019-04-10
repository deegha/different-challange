import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import css from './styles.module.scss'

export const Button = ({to, title, color}) => {
  return (
    <Link to={to} className={css[color]}>
      {title}
    </Link>
  )
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

