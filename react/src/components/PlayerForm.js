const PlayerForm =({ playerData, handleChange, handleSubmit})=> {

    return(
        <form className="form player-form mb-3" id="playerForm" onSubmit={handleSubmit}>
            <h3 className="h3-heading text-capitalize">add a player</h3>
            <div className="row mb-3">
                <div className="col-auto">
                    <label htmlFor="fName" className="form-label text-capitalize">first name</label>
                    <input
                        type="text"
                        name="fName"
                        value={playerData.fName}
                        onChange={handleChange}
                        id="fName"
                        className="form-control"
                    />
                </div>
                <div className="col-auto">
                    <label htmlFor="lName" className="form-label text-capitalize">last name</label>
                    <input
                        type="text"
                        name="lName"
                        value={playerData.lName}
                        onChange={handleChange}
                        id="lName"
                        className="form-control"
                    />
                </div>
                <div className="col-auto">
                    <label htmlFor="date_of_birth" className="form-label text-capitalize">date of birth</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={playerData.date_of_birth}
                        onChange={handleChange}
                        id="date_of_birth"
                        className="form-control"
                    />
                </div>
                <div className="col-auto">
                    <label htmlFor="yr_began" className="form-label text-capitalize">year began</label>
                    <input
                        type="text"
                        name="yr_began"
                        value={playerData.yr_began}
                        onChange={handleChange}
                        id="yr_began"
                        className="form-control"
                    />
                </div>
                <div className="col-auto">
                    <label htmlFor="yr_ended" className="form-label text-capitalize">year ended</label>
                    <input
                        type="text"
                        name="yr_ended"
                        value={playerData.yr_ended}
                        onChange={handleChange}
                        id="yr_ended"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <select 
                        name="position" 
                        id="position"
                        className="form-select" 
                        value={playerData.position}
                        onChange={handleChange}
                    >
                        <option value="">-- Position --</option>
                        <option value="P">Pitcher</option>
                        <option value="C">Catcher</option>
                        <option value="1B">First Base</option>
                        <option value="2B">Second Base</option>
                        <option value="3B">Third base</option>
                        <option value="SS">Shortstop</option>
                        <option value="LF">Left Field</option>
                        <option value="CF">Center Field</option>
                        <option value="RF">Right Field</option>
                        <option value="DH">Designated Hitter</option>
                        <option value="INF">Infield</option>
                        <option value="OF">Outfield</option>
                    </select>
                </div>
                <div className="col-auto">
                <select 
                    name="sec_position" 
                    id="sec_position" 
                    className="form-select"
                    value={playerData.sec_position}
                    onChange={handleChange}
                >
                        <option value="">-- Secondary Position --</option>
                        <option value="P">Pitcher</option>
                        <option value="C">Catcher</option>
                        <option value="1B">First Base</option>
                        <option value="2B">Second Base</option>
                        <option value="3B">Third base</option>
                        <option value="SS">Shortstop</option>
                        <option value="LF">Left Field</option>
                        <option value="CF">Center Field</option>
                        <option value="RF">Right Field</option>
                        <option value="DH">Designated Hitter</option>
                        <option value="INF">Infield</option>
                        <option value="OF">Outfield</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select 
                        name="batting_stance" 
                        id="batting_stance" 
                        className="form-select"
                        value={playerData.batting_stance}
                        onChange={handleChange}
                    >
                        <option value="">-- Batting Stance--</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                        <option value="switch">Switch</option>
                    </select>
                </div>
                <div className="col-auto">
                    <select 
                        name="throwing_hand" 
                        id="throwing_hand" 
                        className="form-select"
                        value={playerData.throwing_hand}
                        onChange={handleChange}
                    >
                        <option value="">-- Throwing Hand--</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                    </select>
                </div>
                <div className="col-auto">
                    <label htmlFor="imgUrl" className="form-label text-capitalize">
                        image
                    </label>
                    <input 
                        type="url"
                        name="imgUrl"
                        value={playerData.imgUrl}
                        id="imgUrl"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-auto">
                    <button className="btn btn-success text-capitalize">submit player</button>
                </div>
            </div>
        </form>
    )
}

export default PlayerForm