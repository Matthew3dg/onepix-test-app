import React from 'react';
import './MainScreen.scss';
import burger from '../../assets/burger.svg';
import logo from '../../assets/logo.svg';
import divider from '../../assets/divider.svg';

const MainScreen = () => {
	return (
		<div className="container">
			<div className="main-header">
				<a href="#cross">
					<img className="main-header__menu menu-icon" src={burger} alt="burger" />
				</a>
			</div>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="main-footer">
				<p className="main-footer__text">Листайте вниз</p>
				<img className="main-footer__divider" src={divider} alt="divider" />
			</div>
		</div>
	);
};

export default MainScreen;
