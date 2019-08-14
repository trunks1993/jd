import Mock from 'mockjs';

const data = {
  code: 200,
  msg: '登陆成功',
  data: {
    user: {
      id: 1554121,
      name: 'trunks',
    },
    token: 1
  }
};

Mock.mock(/\/user\/login/, data);

Mock.mock(/\/user\/getUserByToken/, data);
