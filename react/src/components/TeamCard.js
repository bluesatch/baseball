const TeamCard =(props)=> {

    return (
        <div className="col">
            <div className="card h-100 text-bg-dark team-card">
                <h3 className="card-title text-capitalize">{props.team}</h3>
                <p className="card-text">Year Began: {props.yearEst}</p>
                <p className="card-text">Wins: {props.wins} Losses: {props.losses} </p>
                <p className="card-text">World Series titles: {props.championships}</p>
            </div>
        </div>
    )
}

export default TeamCard