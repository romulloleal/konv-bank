import React from 'react'

import { IoIosArrowBack } from 'react-icons/io'

import { GoBack, Title } from './style'
import { PageTitleProps } from './types'

const PageTitle: React.FC<PageTitleProps> = ({ title, goBack }) => {
  return (
    <Title>
      <GoBack to={goBack}>
        <IoIosArrowBack />
      </GoBack>
      {title}
    </Title>
  )
}

export default PageTitle
