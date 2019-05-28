import React, {Component} from 'react'
import Input from "./Input"
import './Components.css'

class Homepage extends Component {
    constructor(props){
        super(props)

    }
    render() {
        return (
          <div>
            <Input />
         </div>
        )
    }
}

export default Homepage;