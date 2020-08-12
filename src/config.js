module.exports={
	NODE_ENV:process.env.NODE_ENV||'development',
	API_ENDPOINT:(process.env.NODE_ENV==='development')
		? 'http://localhost:8000/api'
		: 'https://limitless-reef-44232.herokuapp.com/api'
}