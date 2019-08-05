import React, { Fragment } from 'react'
import { ImgWrapper, Img, Button, CardBottom, Article } from './styles.js'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, elementRef] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={elementRef}>
      {
        show && <Fragment>
          <ImgWrapper href={`/?detail=${id}`}>
            <div>
              <Img src={src} />
            </div>
          </ImgWrapper>
          <CardBottom>
            <Button onClick={() => setLiked(!liked)}>
              <Icon /> {likes} likes!
            </Button>
          </CardBottom>
        </Fragment>
      }
    </Article>
  )
}
