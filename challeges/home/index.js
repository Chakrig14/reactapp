import {Component} from "react"
import "../home/index.css"
import IplCardList from "../iplcarddata/index"
class Home extends Component{
    state ={teamData:[]}
    componentDidMount() {
        this.getTeamData()
    }
    getTeamData = async() => {
        const response = await fetch("https://apis.ccbp.in/ipl")
        const data = await response.json()
        const updatedTeam = data.teams.map(eachItem => ({
            id:eachItem.id,
            name:eachItem.name,
            teamImageUrl:eachItem.team_image_url
        }))
        this.setState({teamData:updatedTeam})
    }
    render(){
        const {teamData}= this.state
        return(
            <div className="bg-container">
                <div className="dash-card">
                    <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="iplLogo" className="logo-img"/>
                    <h2 className="dashboard-name">IPL Dashboard</h2>
                </div>
                <div className="main-section">
                {teamData.map(eachTeam => (<IplCardList key={eachTeam.id} teamList={eachTeam}/>))}  
                </div>
            </div>
        )
    }
}

export default Home