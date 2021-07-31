const LatestMatch = props => {
    const {newMatches} = props
    const {date,venue,umpires,competingTeam,competingTeamLogo,firstInnings,secondInnings,manOfTheMatch,result} = newMatches
    return(
        <div>
            <div>
                <h2>{competingTeam}</h2>
                <p>{date}</p>
                <p>{venue}</p>
                <p>{result}</p>
            </div>
            <div>
                <img src={competingTeamLogo} alt={competingTeam}/>
            </div>
            <div>
                <p>First Innings</p>
                <p>{firstInnings}</p>
                <p>Second Innings</p>
                <p>{secondInnings}</p>
                <p>Man of The Match</p>
                <p>{manOfTheMatch}</p>
                <p>Umpires</p>
                <p>{umpires}</p>
            </div>
        </div>
    )
}

export default LatestMatch