import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
// withPhotos es el HOC, que recibe a través de props de ListOfPhotoCards los
// parámetros de la función y ListOfPhotoCardsComponent es el componente que queremos enviar los datos
// de la Apo
