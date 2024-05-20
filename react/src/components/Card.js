const Card =(props)=> {

    return (
        <div className="col">
            <div className="card h-100 text-bg-dark">
                <img src={props.img} alt={`${props.firstName} ${props.lastName}`} className="img-fluid image card-img-top" />
                <div className="card-body">
                    <h3 className="card-title text-capitalize">{props.firstName} {props.lastName}</h3>
                    <p className="card-text stat-text text-capitalize">playing career: {props.yr_began} - {props.yr_ended}</p>
                    <div className="statbox d-flex justify-content-between">
                        <p className="card-text stat-text text-capitalize">position: {props.position}</p>
                        <p className="card-text stat-text text-capitalize">bats: {props.bats}</p>
                        <p className="card-text stat-text text-capitalize">throws: {props.throws}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card