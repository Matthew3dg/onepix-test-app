import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import cross from '../../assets/cross.svg';

const Header = () => {
	return (
		<div id="cross" className="header">
			<img className="header__logo" src={logo} alt="logo" />
			<a href="#burger">
				<img className="header__menu" src={cross} alt="cross" />
			</a>
		</div>
	);
};

export default Header;
