import React from "react";
import "./style.css";

class AddUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			age: 1,
			isHappy: false
		}
	}

	userAdd = {}

	render() {
		return (
			<form ref={(el) => this.myForm = el}>
				<input placeholder="Ім'я" onChange={(ev) => this.setState({ first_name: ev.target.value })}></input>
				<input placeholder="Прізвище" onChange={(ev) => this.setState({ last_name: ev.target.value })}></input>
				<textarea placeholder="E-mail" onChange={(ev) => this.setState({ email: ev.target.value })}></textarea>
				<input placeholder="Вік" onChange={(ev) => this.setState({ age: ev.target.value })}></input>

				<label htmlFor="isHappy">Щасливий?</label>
				<input type="checkbox" id="isHappy" onChange={(ev) => this.setState({ isHappy: ev.target.checked })}></input>

				<button type="button" onClick={() => {
					this.myForm.reset()
					this.userAdd = {
						first_name: this.state.first_name,
						last_name: this.state.last_name,
						email: this.state.email,
						age: this.state.age,
						isHappy: this.state.isHappy
					}
					if (this.props.user) {
						this.userAdd.id = this.props.user.id
					}
					this.props.onAdd(this.userAdd)
				}}>Додати</button>
			</form>
		)
	}
}

export default AddUser