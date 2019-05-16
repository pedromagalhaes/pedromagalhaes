/* eslint-disable react/prop-types */

import React, { PureComponent } from 'react'

import { IconLogo } from '@icons'

const pinStyle = {
  cursor: 'pointer'
}

export default class CityPin extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props

    return (
      <IconLogo
        height={size}
        style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
        onClick={onClick}
      />
    )
  }
}
