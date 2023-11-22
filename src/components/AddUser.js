import React from "react";

class AddUser extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firsname: '',
			lastname: '',
			bio: '',
			age: 1,
			isHappy: false
		}
	}

	userAdd = {}

	render() {
		return (
			<form ref={(el) => this.myForm = el}>
				<input placeholder="Ім'я" onChange={(ev) => this.setState({ firsname: ev.target.value })}></input>
				<input placeholder="Прізвище" onChange={(ev) => this.setState({ lastname: ev.target.value })}></input>
				<textarea placeholder="Біографія" onChange={(ev) => this.setState({ bio: ev.target.value })}></textarea>
				<input placeholder="Вік" onChange={(ev) => this.setState({ age: ev.target.value })}></input>

				<label htmlFor="isHappy">Щасливий?</label>
				<input type="checkbox" id="isHappy" onChange={(ev) => this.setState({ isHappy: ev.target.checked })}></input>

				<button type="button" onClick={() => {
					this.myForm.reset()
					this.userAdd = {
						firsname: this.state.firsname,
						lastname: this.state.lastname,
						bio: this.state.bio,
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