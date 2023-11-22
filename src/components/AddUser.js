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

	render() {
		return (
			<form>
				<input placeholder="Ім'я" onChange={(ev) => this.setState({ firsname: ev.target.value })}></input>
				<input placeholder="Прізвище" onChange={(ev) => this.setState({ lastname: ev.target.value })}></input>
				<textarea placeholder="Біографія" onChange={(ev) => this.setState({ bio: ev.target.value })}></textarea>
				<input placeholder="Вік" onChange={(ev) => this.setState({ age: ev.target.value })}></input>

				<label htmlFor="isHappy">Щасливий?</label>
				<input type="checkbox" id="isHappy" onChange={(ev) => this.setState({ isHappy: ev.target.checked })}></input>

				<button type="button" onClick={() => this.props.onAdd({
					firsname: this.state.firsname,
					lastname: this.state.lastname,
					bio: this.state.bio,
					age: this.state.age,
					isHappy: this.state.isHappy
				})}>Додати</button>
			</form>
		)
	}
}

export default AddUser