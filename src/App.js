import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'

export default function () {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={3} />
    </div>
  )
}
