import { useState, useEffect } from "react"
import axios from "axios"

import Card from "./Card"
import PlayerForm from "./PlayerForm"

const Players =()=> {

    const [ players, setPlayers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/player')
            .then(res => setPlayers(res.data))
    }, [])

    // console.log(players)
    const [ playerData, setPlayerData ] = useState({
        fName: '',
        lName: '',
        date_of_birth: '',
        position: '',
        sec_position: '',
        batting_stance: '',
        throwing_hand: '',
        yr_began: '',
        yr_ended: '',
        imgUrl: ''

    })

    const handleChange =(event)=> {
        const { name, value }  = event.target

        setPlayerData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/player/create',
            data: playerData
        })
    }

    const playersComponents = players.map(player => {
        return <Card 
                    key={player.player_id}
                    firstName={player.fName}
                    lastName={player.lName}
                    img={player.imgUrl}
                    position={player.position}
                    bats={player.batting_stance}
                    throws={player.throwing_hand}
                    yr_began={player.yr_began}
                    yr_ended={player.yr_ended}
                />
    })

    return (
        <section className="section" id="section">
            <div className="container">
                <h2 className="display-2 text-capitalize">players</h2>
                <div className="row">
                    <PlayerForm 
                        playerData={playerData} 
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit} 
                    />
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    { playersComponents }
                </div>
            </div>
        </section>
    )
}

export default Players