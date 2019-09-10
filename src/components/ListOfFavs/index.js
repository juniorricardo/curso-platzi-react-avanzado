import React from 'react'
import { Link, Grid, Image } from './styles'
import PropTypes from 'prop-types'
export const ListOfFavs = ({ favs = {} }) => {
  return <Grid>
    {
      favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}><Image key={fav.id} src={fav.src} /> </Link>)
    }
  </Grid>
}

ListOfFavs.protoTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}
