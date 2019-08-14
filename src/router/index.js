import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthRoute from './authRoute';

import LoginPage from '@/pages/loginPage';
import ServiceSelect from '@/pages/serviceSelect';
import Layout from '@/pages/layout';
import Page404 from '@/pages/page404';

import { flatTree } from '@/utils'

// layout下的子模块
import Home from '@/pages/home';
import Detail from '@/pages/detail';

// 动态路由
export const asyncRoutes = [
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
						path: '/person/jdperson',
						component: Home
					}
				]
			},
			{
				id: 2,
				title: '路由测试2',
				path: '/detail',
				component: Detail
			}
		]
	}
]

export default () => (
    <HashRouter>
    	<Switch>
	    	<AuthRoute exact path="/login" authTo="/" component={ LoginPage } />
	    	<Route exact path='/service' component={ ServiceSelect }/>
	    	<AuthRoute path="/jd" authTo="/login" component={ Layout } />
	    	<Redirect from="/" to="/jd" />
	    	<Route component={Page404} />
	    </Switch>
    </HashRouter>
);

export const RouteList = ({ match }) => (
	<Switch>
		{
			flatTree(asyncRoutes).filter(item => item.component).map((item, index) => (
				<Route path={`${match.path + item.path}`} key={index} component={item.component}/>
			))
		}
		<Route exact path={match.path} render={() => <h3>首页</h3>}/>
		<Route component={Page404} />
	</Switch>
);
