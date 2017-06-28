import 'es6-shim'
import fetch from 'isomorphic-fetch'

export const ROOT = 'http://fannixddfe1.hz.taeapp.com/XFN-MF'


const URL = {

	halo 				: 'http://localhost:2000/addnotes'
	
}

export default
function fetchApi(type, method, data, callback) {
	let url, option
	switch (method.toUpperCase()) {
		case 'GET':
			url = URL[type] + '?' + data
			option = {
				credentials: 'include'
			}
			break
		case 'POST':
			url = URL[type]
			option = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: data
			}
			break
		default:
			return console.error('method is not GET or POST')
	}

	// fetch(url, option)
	// .catch(err => callback({
	// 	errcode: '-2'
	// 	// errmsg: er
	// }))
	// .then(res => res.json())
	// .then(json => callback(json))

	fetch(url, option)
	.then(res => {
		if (res.status === 200)
		{
			return res.json()
		}
		else {
			return {
				code: '-2',
				// message: err
				message: `通信异常，服务器返回码${res.status}`
			}
		}

	})
	.catch(err => {
		return {
			code: '-2',
			// message: err
			message: `系统无响应`
		}
	})
	.then(json => {
		callback(json)

	})
}
