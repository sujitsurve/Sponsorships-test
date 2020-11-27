import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className="topnav sticky">
        <NavigationItem link='/' exact>Tiles</NavigationItem>
        <NavigationItem link='/sponsorship'>Sponsorship</NavigationItem>
    </ul>
);

export default navigationItems;