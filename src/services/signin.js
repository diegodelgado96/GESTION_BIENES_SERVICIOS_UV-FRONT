import axios from 'axios'

const url = 'http://localhost:3001/api/signin'

export const signin = async (email, password) => {
	const {data} = await axios.post(url, {email, password})
	return data
}