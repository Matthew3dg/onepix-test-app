import React from 'react';
import './MenuScreen.scss';

const MenuScreen = (props) => {
	return <div className="menu-container">{props.children}</div>;
};

export default MenuScreen;
