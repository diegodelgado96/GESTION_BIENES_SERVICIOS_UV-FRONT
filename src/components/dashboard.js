/* eslint-disable react/prop-types */
import { getUsers } from '../services/user'
import PropTypes from 'prop-types'
import React, {useState} from 'react'

export default function Dashboard(props) {
	const [users, setUsers] = useState([])

	const handleUsers = async (event) => {
		try{
			event.preventDefault()
			const respond = await getUsers(props.user.idUsuario, props.user.token)
			setUsers(respond)
		} catch(error)
		{
			console.log(error)
		}
	}

	return (
		<div>
			<button onClick={handleUsers}>
				Consultar Usuarios
			</button>
			<button onClick={props.logout}>
				Salir
			</button>
			<div>
				{users}
			</div>
		</div>
	)
}

Dashboard.propTypes = {
	user: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired
}