import React, {Component} from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import './Components.css'


dotenv.config();
let key = process.env.REACT_APP_API_KEY;

class OneResult extends Component {
constructor(props) {
    super(props)

    this.state = {
        name: "",
        info: "",
    }
    this.getResults = this.getResults.bind(this)
    this.getResults()
}

 async getResults() {
     const artistName = this.props.option === "artist" ? this.props.location.state.inputVal : this.props.location.state.songInputValue
let res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${key}&format=json`)
console.log(res)
this.setState ({
            name: res.data.artist.name,
          info: res.data.artist.bio.summary,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h5>{this.state.info}</h5>
            </div>
        )
    }
}

export default OneResult;