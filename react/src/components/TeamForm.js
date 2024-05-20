const TeamForm =({ teamData, handleChange, handleSubmit })=> {

    return (
        <form className="form team-form" id="teamForm" onSubmit={handleSubmit}>
            <h3 className="form-heading text-capitalize">add a team</h3>
            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="team_name" className="form-label text-capitalize">team name</label>
                    <input 
                        type="text"
                        id="team_name"
                        name="team_name"
                        value={teamData.team_name}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="city" className="form-label text-capitalize">city</label>
                    <input 
                        type="text"
                        id="city"
                        name="city"
                        value={teamData.city}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="state" className="form-label text-capitalize">state</label>
                    <input 
                        type="text"
                        id="state"
                        name="state"
                        value={teamData.state}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="yr_established" className="form-label text-capitalize">year established</label>
                    <input 
                        type="number"
                        id="yr_established"
                        name="yr_established"
                        min="1850"
                        value={teamData.yr_established}
                        onChange={handleChange}
                        className="form-control" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="wins" className="form-label text-capitalize">wins</label>
                    <input 
                        type="number"
                        id="wins"
                        min="0"
                        name="wins"
                        value={teamData.wins}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="losses" className="form-label text-capitalize">losses</label>
                    <input 
                        type="number"
                        id="losses"
                        min="0"
                        name="losses"
                        value={teamData.losses}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="championships" className="form-label text-capitalize">championships</label>
                    <input 
                        type="number"
                        id="championships"
                        min="0"
                        name="championships"
                        value={teamData.championships}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <label htmlFor="imgUrl" className="form-label text-capitalize">image</label>
                    <input 
                        type="url"
                        id="imgUrl"
                        name="imgUrl"
                        value={teamData.imgUrl}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success text-capitalize">submit team</button>
                </div>
            </div>
        </form>
    )
}

export default TeamForm