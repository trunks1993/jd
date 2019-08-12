import Mock from 'mockjs';

const data = {
	code: 200,
	msg: "登陆成功", 
	data: {
		id: 1554121,
		name: 'trunks'
	}
}

Mock.mock(/\/user\/login/, data);
