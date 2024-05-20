const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-1 text-capitalize">my baseball app</h1>
                    </div>
                    <div className="col-md-6">
                        <nav className="nav justify-content-end">
                            <a href="#" className="nav-link">all players</a>
                            <a href="#" className="nav-link">pitchers</a>
                            <a href="#" className="nav-link">batters</a>
                            <a href="#" className="nav-link">teams</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header