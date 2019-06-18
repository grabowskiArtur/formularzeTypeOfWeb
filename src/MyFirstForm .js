import * as React from 'react';

class MyFirstForm extends React.Component {
	state = {
		name: '',
		color: 'blue',
		message: '',
		isChecked: true,
		choice: ""
	};

	handleChange(e, val) {

		const name = e.target.name;
		const value = e.target.value;
		const checked = e.target.checked;

		if (name === "isChecked") {
			this.setState({
					[name]: e.target.checked
				}, () => {
					console.log([name] + " value is : " + [checked]);
				}
			)
		} else {
			this.setState({
				[name]: e.target.value
			}, () => {
				console.log([name] + " value is : " + [value]);
			});
		}

		switch (val) {
			case "name": {
				this.setState({
					name: e.target.value
				});
				break;
			}
			case "color": {
				this.setState({
					color: e.target.value
				});
				break;
			}
			case "message": {
				this.setState({
					message: e.target.value
				});
				break;
			}
			case "isChecked": {
				this.setState({
					isChecked: e.target.checked
				});
				break;
			}
			default:
				console.log("cos nie dziala w switchu");
		}
	}


	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	handleColorChange = (e) => {
		this.setState({
			color: e.target.value
		});
	};
	handleMessageChange = (e) => {
		this.setState({
			message: e.target.value
		});
	};
	handleCheckboxChange = (e) => {
		this.setState({
			isChecked: e.target.checked
		});
	};

	submitForm = () => {
		console.log(this.input.value);
	}

	render() {
		return (
			<div>
				<input name="name" value={this.state.name} onChange={(e) => this.handleChange(e, "name")}/>
				<select name="color" value={this.state.color} onChange={(e) => this.handleChange(e, "color")}>
					<option value="red">Czerwony</option>
					<option value="blue">Niebieski</option>
					<option value="green">Zielony</option>
				</select>
				<textarea name="message" value={this.state.message} onChange={(e) => this.handleChange(e, "message")}/>
				<label>
					<input name="isChecked" type="checkbox" checked={this.state.isChecked}
					       onChange={(e) => this.handleChange(e, "isChecked")}/>
				</label>
				<br/>
				<hr/>
				<div>
					<input ref={input => this.input = input }/>
					<button onClick={this.submitForm}> Submit </button>
				</div>
			</div>
		);
	}
}

export default MyFirstForm;

