import request from '@/utils/request';

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    params: {
      username,
      password
    }
  });
}

export const getUserByToken = token => request({
  url: `/user/getUserByToken?token=${token}`,
  method: 'get'
});

export const getTableList = queryList => request({
  url: `/user/getTableList?current=${queryList.current}&pageSize=${queryList.pageSize}`,
  method: 'get'
});
