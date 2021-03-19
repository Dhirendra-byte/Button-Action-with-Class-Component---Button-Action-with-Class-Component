import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
        this.state={msg:""}
	};

handleClick(){
this.setState({msg:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
}
    render() {
    	return(
    		<div id="main">
				<p id='para'>{this.state.msg}</p>
				<button onClick={this.handleClick.bind(this)} id="click">click</button>
    		</div>
    	);
    }
}


export default App;

