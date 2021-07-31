import {Component} from "react"
import "../teamdetails/index.css"
import RecentMatches from "../recentmatches/index"

class TeamDetails extends Component{
    state={latestMatch:{},recentMatches:[],teamBaner:[]}
    componentDidMount() {
        this.getTeamDetails()
    }
    getTeamDetails= async() => {
        const {match} = this.props
        const {params} = match
        const {id} = params
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data=await response.json()
        const updatedLatestMatchData = {
            id:data.latest_match_details.id,
            date:data.latest_match_details.date,
            venue:data.latest_match_details.venue,
            umpires:data.latest_match_details.umpires,
            competingTeam:data.latest_match_details.competing_team,
            competingTeamLogo:data.latest_match_details.competing_team_logo,
            firstInnings:data.latest_match_details.first_innings,
            secodInnings:data.latest_match_details.second_innings,
            manOfTheMatch:data.latest_match_details.man_of_the_match,
            result:data.latest_match_details.result
        }
        const updatedRecentMatches=data.recent_matches.map(eachMatch => ({
            id:eachMatch.id,
            competingTeamLogo:eachMatch.competing_team_logo,
            competingTeam:eachMatch.competing_team,
            result:eachMatch.result,
            matchStatus:eachMatch.match_status
        }))
        this.setState({latestMatch:updatedLatestMatchData,recentMatches:updatedRecentMatches,teamBaner:data})
    }
    renderLatestMatch=() => {
        const {latestMatch} = this.state
        const {date,venue,umpires,competingTeam,competingTeamLogo,firstInnings,secondInnings,manOfTheMatch,result} = latestMatch
        return(
            <div className="latest-match-card">
                <div className="venue-card">
                    <h2>{competingTeam}</h2>
                    <p>{date}</p>
                    <p>{venue}</p>
                    <p>{result}</p>
                </div>
                <div>
                    <img src={competingTeamLogo} alt={competingTeam}/>
                </div>
                <div className="innings-card">
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
    render(){
        const {teamBaner,recentMatches} = this.state
        return(
            <div className="bg-container-card">
                <img src={teamBaner.team_banner_url} alt="teamBanner"/>
                <div>
                    {this.renderLatestMatch()}
                </div>
                    {recentMatches.map(eachRecent => (<RecentMatches key={eachRecent.id} recentMatchList={eachRecent}/>))}
            </div>

        )
    }
}

export default TeamDetails