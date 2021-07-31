import "./index.css"

const HeadToss = props => {
    const {tossValue} = props
    const {imageUrl,altText} = tossValue
    return(
        <img src={imageUrl} alt={altText} className="image"/>
    )
}

export default HeadToss