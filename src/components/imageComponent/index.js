import './index.css'

const ImageComponent = props => {
    const {eachImage} = props;
    const {imageUrl,imageAtlText} = eachImage
    return(
        <div>
            <img src={imageUrl} alt={imageAtlText} className="card-image"/>
        </div>
    )
}

export default ImageComponent