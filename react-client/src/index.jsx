import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		//some states	
		}
	}

	render() {
		return (<div>
			<form action="">
			Username: <input type="text" name="user"></input>	
			<br></br>
			Password: <input type="password" name="password"></input>
			</form>
		</div>)
	}
}

ReactDOM.render(<Login />, document.getElementById('app'));