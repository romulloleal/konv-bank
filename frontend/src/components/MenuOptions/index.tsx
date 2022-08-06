import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Option } from './style'
import { MenuProps } from './types'

const Menu: React.FC<MenuProps> = ({ options }) => {
  return (
    <Container>
      {options.map((option) => (
        <Link to={option.path} key={option.text}>
          <Option>{option.text}</Option>
        </Link>
      ))}
    </Container>
  )
}

export default Menu
