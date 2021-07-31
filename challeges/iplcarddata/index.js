import "../iplcarddata/index.css"
import {Link} from "react-router-dom"
const IplCardList = props => {
    const {teamList} = props
    const {id,name,teamImageUrl} = teamList
    return(
        <Link to={`/team-matches/${id}`} className="team-link">
        <div className="team-card">
        <img src={teamImageUrl} alt={name} className="team-img"/>
        <p className="team-name">{name}</p>
        </div>
        </Link>
    )
}

export default IplCardList