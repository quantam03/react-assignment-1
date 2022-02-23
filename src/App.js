import React, { Component } from "react";
import './Components/style.css'
import Function from "./Components/Function";
import Class from "./Components/Class";

class App extends Component{
    constructor(){
        super();
        this.state = {
            showclass: false,
            showfunction : false
        }
    }

    render(){
        console.log(this);
        return (
        <div>
             <h1 className='heading'>Styling Using Functional and Class Component</h1>

            <div >
                <button className="btn" onClick = {() => this.setState({showfunction : !this.state.showfunction}) }>To see styling in functional component</button>
                <button className="btn" onClick = {() => this.setState({showclass : !this.state.showclass})}>To see styling in class component</button>
            </div>
            <div >
            {this.state.showfunction ? <Function/> : null}
            {this.state.showclass ? <Class/> : null}
            </div>
        </div>
        )
}
}
export default App