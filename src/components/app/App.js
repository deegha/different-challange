/**
 * Created at 10/04/2019
*/


import React, { Component } from 'react'
import { Routes } from '../'

import css from './styles.module.scss'
class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <Routes />
      </div>
    )
  }
}

export default App
