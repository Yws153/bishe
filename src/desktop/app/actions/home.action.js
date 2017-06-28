import * as ActionTypes from 'app/constants/actionType.js'
import fetch from 'isomorphic-fetch';

const HEADERS = {
	'Content-Type': 'application/json'//x-www-form-urlencoded'
};

export const increment = () => dispatch => {

    const data = {
        articleTitle: '11111',
        articleDay: '2016-01-01',
        comment: {
            name:'12',
            email: '23',
            comment: '34',
            website: '90',
            admin: 'yezi'
        }
    }


    // fetch('http://localhost:2000/deletenotes?', {
    //     method: 'GET',
        
    //     credentials: 'include',
    //   	Origin: 'http://localhost:2000'

    // //   body: JSON.stringify({ password: '234' })
    // })

     fetch('http://localhost:2000/addnotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({data})

    //   body: JSON.stringify({ password: '234' })
    })
    // .then(checkHttpStatus)
    .then(res => res.json())
    .then(res => {
      try {
        // throw error if it is invalid
        // let decoded = jwtDecode(res.ok)
        // dispatch(pushState(null, '/'))
        // alert(JSON.stringify(decoded))
      } catch (e) {
        // get the token which is invalid
        alert(e)
      }
    })
    .catch(error => {
      // fail to get the jwt token
    })

};
