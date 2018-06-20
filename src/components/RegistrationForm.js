import React from 'react';


export default class RegistrationForm extends React.Component {
	render(){
		return(

			<form>
			name:
			<input type="text"></input>
			password:
			<input type="password"></input>
			<button type="submit">Click Me!</button>
			</form>

		)
	}
}


