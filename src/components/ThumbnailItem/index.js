// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateThumbnailId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImage
  const UpadateSyteButtonClassName = isActive ? 'active' : ''

  const onClickImgButton = () => {
    updateThumbnailId(id)
  }

  return (
    <>
      <li className="thumbnail-list-item">
        <button className="thumbnail-button" type="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`thumbnail  ${UpadateSyteButtonClassName}`}
            onClick={onClickImgButton}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
