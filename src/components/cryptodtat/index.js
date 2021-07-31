
const CryptoData = props => {
    const {coinData} = props
    const {currencyLogo,currencyName,usdValue,euroValue} = coinData
    return(
        <div>
            <img src={currencyLogo} alt={currencyName}/>
            <p>{currencyName}</p>
            <p>{usdValue}</p>
            <p>{euroValue}</p>
        </div>
    )
}

export default CryptoData