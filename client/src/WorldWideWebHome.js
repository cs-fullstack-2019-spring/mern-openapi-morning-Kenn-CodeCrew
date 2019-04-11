import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Africa from './Africa'
import America from './America'
import Asia from './Asia'
import Europe from './Europe'
import Oceania from './Oceania'

class WorldWideWebHome extends Component{
    render(){
        return(
            <div>
            <h1>Welcome to CodeSchool Earth</h1>
                <Router>
                    <Link to={"/"}>Home</Link>
                    <Link className={"linkSpacing"} to={"/africa"}>Africa</Link>
                        <Link className={"linkSpacing"} to={"/americas"}>Americas</Link>
                        <Link className={"linkSpacing"} to={"/asia"}>Asia</Link>
                        <Link className={"linkSpacing"} to={"/europe"}>Europe</Link>
                        <Link className={"linkSpacing"} to={"/oceania"}>Oceania</Link>

                        <h1>Click on one of the regions blah blah blah</h1>
                        <Route path={"/africa"} component={Africa} />
                        <Route path={"/americas"} component={America} />
                        <Route path={"/asia"} component={Asia} />
                        <Route path={"/europe"} component={Europe} />
                        <Route path={"/oceania"} component={Oceania} />
                </Router>
            </div>
    );
    }
}

export default WorldWideWebHome;