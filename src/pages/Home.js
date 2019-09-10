import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
const HomePage = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
