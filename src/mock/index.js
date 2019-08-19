import Mock from 'mockjs';

const data = {
  code: 200,
  msg: '登陆成功',
  data: {
    user: {
      id: 1554121,
      name: 'trunks',
      menu: [
        {
          id: 0,
          title: '人员管理',
          children: [{
            id: 1,
            title: '戒毒人员管理',
            path: '/tablePageTest',
            component: 'tablePageTest'
          }]
        }
      ]
    }
  },
  token: 1
};

Mock.mock(/\/user\/login/, data);

Mock.mock(/\/user\/getUserByToken/, data);
