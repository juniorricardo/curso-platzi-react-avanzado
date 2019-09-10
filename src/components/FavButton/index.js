import React from 'react'
import { Button } from './styles.js'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon /> {likes} likes!
    </Button>
  )
}

FavButton.protoTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
