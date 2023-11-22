import './App.css'
import Dashboard from './components/dashboard.js'
import Login from './components/login.js'
import React, { useEffect, useState } from 'react'

function App() {
	const [messageError, setMessageError] = useState('Hola Mundo')
	const [user, setUser] = useState(null)

	useEffect(() => {
		const loggedUserJson = window.localStorage.getItem('loggedAppUser')
		if(loggedUserJson) {
			const user = JSON.parse(loggedUserJson)
			setUser(user)
		}
	}, [])

	const respondLogin = async (respond, message) => {
		setUser(respond)
		setMessageError(message)
	}

	const logout = () => {
		setUser(null)
		setMessageError('Hola Mundo')
		window.localStorage.removeItem('loggedAppUser')
	}

	return (
		<div className="App">
			{!user ? (
				<Login
					respondLogin = {respondLogin}
					messageError = {messageError}
				/>
			) 
				:
				(
					<Dashboard 
						user = {user}
						logout = {logout}
					/>
				)
			}
		</div>
	)
}

export default App
