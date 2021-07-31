const SearchContent = props => {
    const {searchDetails,onClickPop} = props
    const {listName} = searchDetails
    const inputValue = () => {
        onClickPop(listName)
    }
    return(
        <div className="search-content">
            <p className="list-heading">{listName}</p>
            <button className="arrow-btn" onClick={inputValue}><img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="arrowIcon" className="arrow-icon"/></button>
        </div>
    )
}

export default SearchContent