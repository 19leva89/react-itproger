import React from 'react';
import Header from './component/Header';
import Users from './component/Users';
import AddUser from './component/AddUser';
import axios from 'axios';

const baseUrl = 'https://reqres.in/api/users?page=1'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			users: [],
			counter: 1,

		}
		this.addUser = this.addUser.bind(this)
		this.deleteUser = this.deleteUser.bind(this)
		this.editUser = this.editUser.bind(this)
	}

	componentDidMount() {
		axios.get(baseUrl).then((res) => {
			this.setState({ users: res.data.data })
		})
	}

	render() {
		return (
			<div>
				<Header title="Список користувачів" />

				<main>
					<Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
				</main>

				<aside>
					<AddUser onAdd={this.addUser} />
				</aside>
			</div>
		)
	}

	deleteUser(id) {
		this.setState(prevState => ({
			users: prevState.users.filter(el => el.id !== id)
		}));
	}

	editUser(user) {
		this.setState(prevState => {
			const updatedUsers = prevState.users.map(existingUser => {
				if (existingUser.id === user.id) {
					return user;
				}
				return existingUser;
			});
			return { users: updatedUsers };
		});
	}

	addUser(user) {
		const newUser = { id: this.state.counter, ...user };
		this.setState(prevState => ({
			users: [...prevState.users, newUser],
			counter: prevState.counter + 1,
		}));
	}
}

export default App;
