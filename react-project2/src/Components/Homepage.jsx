import React, {Component} from 'react'

class Homepage extends Component {
    render() {
        return (
          <div>
             <div className="input">
                <h1>Title of App</h1>
                <form>
                    <input type="text" name="song" placeholder="Search for a song or artist" />
                    <button type="submit">ENTER</button>
                </form>
            </div>
            <div className="song-results">
                <h4></h4>
            </div>
                

         </div>
        )
    }
}

export default Homepage;