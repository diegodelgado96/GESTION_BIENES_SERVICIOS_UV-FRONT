/* eslint-disable react/prop-types */
import { getUsers } from '../../services/user'
import React, { useState } from 'react'
import { useUser } from '../../hooks/useUser'

export const Dashboard = () => {

	const [users, setUsers] = useState([])
	const {user} = useUser()
	
	const handleUsers = async (event) => {
		try{
			event.preventDefault()
			const respond = await getUsers(user.idUsuario, user.token)
			setUsers(respond)
		} catch(error)
		{
			console.log(error)
		}
	}

	return (
		<div className='dash'>
			<button onClick={handleUsers}>
				Consultar Usuarios
			</button>
			<div>
				{
					users.map(user => {
						console.log(user)
						return (
							<ul id={user.idUsuario} key={user.idUsuario}>
								<li>{user.Nombres}</li>
								<li>{user.codigo}</li>
								<li>{user.correoInstitucional}</li>
								<li>{user.rol}</li>
								<li>{user.telefono}</li>
							</ul>
						)
					})
				}
			</div>
		</div>
	)
}