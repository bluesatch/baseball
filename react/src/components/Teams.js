import { useState, useEffect } from "react"
import axios from "axios"
import TeamCard from "./TeamCard"
import TeamForm from './TeamForm'

const Teams =()=> {

    const [ teams, setTeams ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/team/sort/team_name')
            .then(res => setTeams(res.data))
    }, [])

    const [ teamData, setTeamData ] = useState({
        team_name: '',
        city: '',
        state: '',
        yr_established: '',
        wins: 0,
        losses: 0,
        championships: 0,
        imgUrl: ''
    })

    const handleChange =(event)=> {

        const { name, value } = event.target

        setTeamData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {

        axios({
            method: 'post',
            url: 'http://localhost:3005/api/team/create',
            data: teamData
        })
    }

    const teamsComponents = teams.map(team => {
        return <TeamCard 
            key={team.team_id}
            team={team.team_name}
            yearEst={team.yr_established}
            wins={team.wins}
            losses={team.losses}
            championships={team.championships}
        />
    })



    return (
        <section className="section" id="section">
            <div className="container">
                <h2 className="display-2 text-capitalize">teams</h2>
                <div className="row">
                    <TeamForm
                        handleSubmit={handleSubmit} 
                        teamData={teamData}
                        handleChange={handleChange}
                    />
                </div>
                <div className="row row-cols-1 row-cols-5 g-4">
                    { teamsComponents }
                </div>
            </div>
        </section>
    )
}

export default Teams