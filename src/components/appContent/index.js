import "./index.css"
const AppItem = props => {
    const {appDetails} = props
    const {appName,appImage} = appDetails
    return(
        <div className="app-card">
        <img src={appImage} alt={appName} className="image"/>
        <p>{appName}</p>
        </div>
    )
}

export default AppItem