import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import moment from 'moment';

import heroBackground from './images/heroBackground.jpg';
import navBackground from './images/texture.png';
import heroLogo from './images/heroLogo.png';

import Menu from './components/menu';

import Page from './pages/page';

import './css/home.css';

function DesktopNav({ tabs }) {
	return (
		<div className="navbar-desktop">
			<div className="tabs">
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
}

function MobileNav({ tabs }) {
	const [setOpen, setOpenState] = useState('');
	const [setHeight, setHeightState] = useState('0px');
	const [setClose, setCloseState] = useState('menu-icon');

	const dropdown = useRef(null);

	function toggle() {
		setOpenState(setOpen === '' ? 'active' : '');
		setHeightState(
			setOpen === 'active' ? '0px' : `${dropdown.current.scrollHeight}px`
		);
		setCloseState(setOpen === 'active' ? 'menu-icon' : 'menu-icon close-icon');
	}

	return (
		<div className="navbar-mobile">
			<div
				style={{ width: '100%', display: 'flex', color: 'white' }}
				className={setOpen}
			>
				<div style={{ flex: '1' }} />
				<div
					className="menu-icon-div"
					style={{ cursor: 'pointer' }}
					onClick={toggle}
				>
					<Menu className={setClose} width={30} height={30} />
				</div>
			</div>
			<div
				ref={dropdown}
				style={{ maxHeight: `${setHeight}` }}
				className="dropdown"
			>
				<div
					className="tabs"
					style={{
						background: `url(${navBackground})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
					onClick={toggle}
				>
					<Tabs tabs={tabs} />
				</div>
			</div>
		</div>
	);
}

function Tabs({ tabs }) {
	return (
		<>
			{tabs.map((tab) => (
				<div className="navbar-tab-button" key={tab.url}>
					<div className="navbar-label">
						<Link to={tab.url}>{tab.label}</Link>
					</div>
				</div>
			))}
		</>
	);
}

export default function App() {
	const tabs = [
		{
			url: '/',
			label: 'Our Story',
		},
		{
			url: '/beers',
			label: 'Beers',
		},
		{
			url: '/events',
			label: 'Events',
		},
		{
			url: '/visit',
			label: 'Visit',
		},
		{
			url: '/sustainability',
			label: 'Sustainability',
		},
		{
			url: '/shop',
			label: 'Shop',
		},
	];

	return (
		<>
			<Router>
				<div
					style={{
						background: `url(${heroBackground})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				>
					<nav className="navbar">
						<DesktopNav tabs={tabs} />
						<MobileNav tabs={tabs} />
					</nav>
					<div className="hero-logo">
						<img
							src={heroLogo}
							width="300"
							height="291"
							alt="catskill brewery logo"
						/>
					</div>
				</div>
				<Switch>
					<Route path="/">
						<Page />
					</Route>
				</Switch>
				<footer
					style={{
						fontSize: '0.8em',
						textAlign: 'center',
						padding: '2em',
						background: 'black',
						color: 'white',
					}}
				>
					&copy; Copyright {moment().format('YYYY')}
				</footer>
			</Router>
		</>
	);
}
