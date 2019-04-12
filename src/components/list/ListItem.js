/**
 * Created by Deegha 11/04/2019
 */

import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.module.scss'

export class ListItem extends React.PureComponent {
  
  render() {
    return (
        <li className={css.item}>
          {this.props.children}
        </li>
    )
  }
}

ListItem.propTypes = {
  children:PropTypes.any.isRequired
}
