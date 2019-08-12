import { login } from '@/api/index'

// 通知 reducer 请求开始的 user
export const REQUEST_USER = 'REQUEST_USER';
export function requestUser() {
  return { type: REQUEST_USER, isFetch: true }
}

export const RECEIVE_USER = 'RECEIVE_USER';
function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    isFetch: false,
    user
  }
}

function recevieUserOnError(message){
  return {
     type: RECEIVE_USER,
     isFetch: false,
     errorMsg: message
  }
}

//异步请求action 上面3个基础的action整合
export function getUser() {
	return dispatch => {
    	// 首次 dispatch：更新应用的 state 来通知API 请求发起了
    	dispatch(requestUser())
    	//异步请求后端接口
	    return login().then(
	        res => dispatch(receiveUser(res.data.data)),
	        error => dispatch(recevieUserOnError('error'))
	    )
	}
}




