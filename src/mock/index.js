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

const tableList = {
  code: 200,
  msg: '请求成功',
  data: [
    {
      id: 1,
      personCode: 'NO.12568', // 戒毒人员编码
      applyReason: '世界那么大，我想去看看', // 申请理由
      startTime: '2019-01-08', // 开始时间
      endTime: '2019-05-08', // 解除时间
      blamePolice: '李三', // 责任警察
      approver: '赵倩', // 管理科审批人
      approverLeader: '李新', // 所领导审批人
      note: '查看详情'// 备注
    },
    {
      id: 2,
      personCode: 'NO.12522', // 戒毒人员编码
      applyReason: '世界那么大，我想去看看', // 申请理由
      startTime: '2019-01-08', // 开始时间
      endTime: '2019-05-08', // 解除时间
      blamePolice: '李三', // 责任警察
      approver: '赵倩', // 管理科审批人
      approverLeader: '李新', // 所领导审批人
      note: '查看详情'// 备注
    },
    {
      id: 3,
      personCode: 'NO.12598', // 戒毒人员编码
      applyReason: '世界那么大，我想去看看', // 申请理由
      startTime: '2019-01-08', // 开始时间
      endTime: '2019-05-08', // 解除时间
      blamePolice: '李三', // 责任警察
      approver: '赵倩', // 管理科审批人
      approverLeader: '李新', // 所领导审批人
      note: '查看详情'// 备注
    }
  ],
  pagination: {
    total: 3
  }
};

Mock.mock(/\/user\/login/, data);

Mock.mock(/\/user\/getUserByToken/, data);

Mock.mock(/\/user\/getTableList/, tableList);
