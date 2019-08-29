import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)

// la id de photocardwithquery se lo mandamos desde App
// Query renderiza un renderprop que es una función que recibe como parámetros diferentes cosas
// siempre recibe loading, error y data
// renderprop tiene que hacer un return del componente que quiere renderizar con los resultados
// de la query
// esta es otra forma de pedir datos a graphql
// Render Props
