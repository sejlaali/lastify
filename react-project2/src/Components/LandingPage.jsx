import React, {Component} from 'react'
import {Link} from "react-router-dom"

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Artist Search</h1>
                <button><Link to="/homepage">Enter</Link></button>
            </div>
        )
    }
}

export default LandingPage