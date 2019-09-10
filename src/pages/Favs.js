import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'
export default () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí están los favoritos'>
      <h1>Favs</h1>
      <FavsWithQuery />
    </Layout>
  )
}
