import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
        this.state={msg:""}
	};

handleClick(){
this.setState({msg:<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>})
}
    render() {
    	return(
    		<div id="main">
                 {this.state.msg}
				<button onClick={this.handleClick.bind(this)} id="click">click</button>
    		</div>
    	);
    }
}


export default App;

