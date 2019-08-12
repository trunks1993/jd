import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import { flatTree } from '../utils/index'
import Home from '../pages/home';
import Detail from '../pages/detail';

export const routes = [
	{
		id: 0,
		title: '人员管理',
		children: [
			{
				id: 1,
				title: '戒毒人员管理',
				children: [
					{
						id: 3,
						title: '人员1',
						path: '/person/index1',
						component: Home
					}
				]
			},
			{
				id: 2,
				title: '路由测试2',
				path: '/person/index2',
				component: Detail
			}
		]
	}
]

const RouteList = () => {
	return (
		<>
			{
				flatTree(routes).filter(item => item.component).map((item, index) => (
					<Route exact path={item.path} key={index} component={item.component}/>
				))
			}
		</>
	)
}

export default () => (
    <HashRouter>
        <Switch>
            <RouteList />
        </Switch>
    </HashRouter>
);
