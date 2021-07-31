const Country = props => {
    const {countryDetails} = props
    const {countryName} = countryDetails
    return(
        <>
            <option value={countryName}>{countryName}</option>
        </>
    )
}

export default Country