import "../recentmatches/index.css"
const RecentMatches = props => {
    const {recentMatchList} = props
    const {competingTeamLogo,competingTeam,result,matchStatus} = recentMatchList
    const matchClass = matchStatus === "Won" ? "won-card" : "lost-card"
    return(
        <div>
            <img src={competingTeamLogo} alt={competingTeam}/>
            <h3>{competingTeam}</h3>
            <p>{result}</p>
            <p className={matchClass}>{matchStatus}</p>
        </div>
    )
}

export default RecentMatches