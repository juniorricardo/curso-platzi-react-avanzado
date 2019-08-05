import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { ListOfPhotoItem } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ListOfPhotoItem>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ListOfPhotoItem>
  )
}
