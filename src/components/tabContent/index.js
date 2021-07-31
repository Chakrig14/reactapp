import "./index.css"

const TabItem = props => {
    const {tabDetails,onClickCategory,isActive} = props
    const {tabName} = tabDetails
    const changeTab = () => {
        onClickCategory(tabName)
    }
    const selectClass = isActive ? "tab-class" : ""
    return(
        <li className="list" onClick={changeTab}>
            <p className={selectClass}>{tabName}</p>
        </li>
    )
}
export default TabItem