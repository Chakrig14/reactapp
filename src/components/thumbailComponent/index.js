import './index.css'

const TabItem = props => {
    const {eachItem,onClickImage,isActive} = props
    const {imageUrl,altImage,tabId} = eachItem
    const natureImage = () => {
        onClickImage(tabId)
    }
    const imageOpClass = isActive ? "image-view" : " "
    return(
        <li className="list">
            <img src={imageUrl} alt={altImage} className = {`thumb-img ${imageOpClass}`} onClick={natureImage}/>
        </li>
    )
}

export default TabItem