import React, { Component } from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Postgraduate from './components/Postgraduate/Postgraduate';
import Master from './components/Master/Master';
import User from './components/User/User';
import Article from './components/Article/Article';
import SummerCamp from './components/SummerCamp/SummerCamp';
import PreLaunch from './components/PreLaunch/PreLaunch';
import PotraitManagement from './components/PotraitManagement/PotraitManagement';
import Payment from './components/Payment/Payment';
import MakePotrait from './components/MakePotrait/MakePotrait';
import PotraitReport from './components/PotraitReport/PotraitReport';
import Administrator from './components/Administrator/Administrator';
import AddArticle from './components/AddArticle/AddArticle';
import MasterLogin from './components/Master/MasterLogin';
import ArticleManage from './components/ArticleManage/ArticleManage';
import MasterRegister from './components/Master/MasterRegister';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/experience">
						<Experience />
					</Route>
					<Route path="/postgraduate">
						<Postgraduate />
					</Route>
					<Route path="/summercamp">
						<SummerCamp />
					</Route>
					<Route path="/prelaunch">
						<PreLaunch />
					</Route>
					<Route path="/master">
						<Master />
					</Route>
					<Route path="/MasterLogin">
						<MasterLogin />
					</Route>
					<Route path="/user">
						<User />
					</Route>
					<Route path="/article/:id">
						<Article />
					</Route>
					<Route path="/potraitmanagement">
						<PotraitManagement />
					</Route>
					<Route path="/payment">
						<Payment />
					</Route>
					<Route path="/makepotrait">
						<MakePotrait />
					</Route>
					<Route path="/potraitreport">
						<PotraitReport />
					</Route>
					<Route path="/administrator">
						<Administrator />
					</Route>
					<Route path="/addArticle">
						<AddArticle />
					</Route>
					<Route path="/ArticleManage">
						<ArticleManage />
					</Route>
					<Route path="/MasterRegister">
						<MasterRegister />
					</Route>
					<Route path="/UserLogin">
						<UserLogin />
					</Route>
					<Route path="/UserRegister">
						<UserRegister />
					</Route>
				</Switch>
			</Router>
		);
	}
}
