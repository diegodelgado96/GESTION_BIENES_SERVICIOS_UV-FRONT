/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { signin } from '../services/signin'

export default function Login (props) {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const handleLogin = async (event) => {
		try {
			event.preventDefault()
			const respond = await signin(email, password)

			window.localStorage.setItem('loggedAppUser', JSON.stringify(respond))

			props.respondLogin(respond)
			setEmail('')
			setPassword('')
		} catch (error) {
			props.respondLogin(null, error.response.data.message)
			console.log(error)
		}
	}

	return (
		<div>
			<form onSubmit={handleLogin}>
				<input
					type='text'
					value={email}
					name='email'
					placeholder='Ingrese su correo institucional'
					onChange={({ target }) => setEmail(target.value)}
				/>
				<input
					type='password'
					value={password}
					name='password'
					placeholder='Ingrese su contraseña'
					onChange={({ target }) => setPassword(target.value)}
				/>
				<button type='submit'>
					Iniciar Sesión
				</button>
			</form>
			<div>
				<p>{props.messageError}</p>
			</div>
		</div>
	)
}

Login.propTypes = {
	respondLogin: PropTypes.func.isRequired,
	messageError: PropTypes.string.isRequired
}