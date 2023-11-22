import axios from 'axios'

const url = 'http://localhost:3001/api/user'

export const getUsers = async (idRequest, token) => {
	console.log({idRequest, token})
	const config = {
		headers: {
			authorization: 'Bearer '+token,
			idRequest
		},
		body: {
			idRequest
		},
	}
	const { data } = await axios.get(url, config, {idRequest})
	return data
}