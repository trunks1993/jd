import { login, getUserByToken } from '@/api/index';
import { setToken, removeToken } from '@/utils/auth';

export const types = {
  START_FETCH: 'user/START_FETCH', // 判断是否发起请求
  SET_ERROR: 'user/SET_ERROR', // 异常处理
  RECEIVE_DATA: 'user/RECEIVE_DATA', // 存用户信息
  RECEIVE_TOKEN: 'user/RECEIVE_TOKEN' // 存token
};

export const actions = {
  startFetch: () => ({ type: types.START_FETCH }),
  setError: error => ({ type: types.SET_ERROR, payload: error }),
  setUser: user => ({ type: types.RECEIVE_DATA, user }),
  setToken: token => ({ type: types.RECEIVE_TOKEN, token }),
  loginByUsername: (value) => dispatch => { // 登录
    dispatch(actions.startFetch());
    return login().then(
      res => {
        setToken(res.data.token);
        return dispatch(actions.setToken(res.data.token));
      },
      error => {
        dispatch(actions.setError(error));
      }
    );
  },
  getUser: token => dispatch => { // 用户信息
    dispatch(actions.startFetch());
    return getUserByToken(token).then(
      res => dispatch(actions.setUser(res.data)),
      error => dispatch(actions.setError(error))
    );
  },
  loginOut: () => dispatch => { // 登出
    removeToken();
    return dispatch(actions.setUser({}));
  }
};

// 初始化state
const initialState = {
  isFetching: false,
  token: '',
  user: {},
  error: null,
};

// eslint-disable-next-line complexity
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_DATA:
      return { ...state, isFetching: false, user: action.user };
    case types.START_FETCH:
      return { ...state, isFetching: true };
    case types.SET_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    case types.RECEIVE_TOKEN:
      return { ...state, isFetching: false, token: action.token };
    default: return state;
  }
}
