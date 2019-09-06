
import React from 'react';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemView from '../../UI/NavListView/NavItemButton/NavItemButton';

export default () => (
    <NavListView>
        <NavItemView link="/">HOME</NavItemView>
        <NavItemView link="/doctors">DOCTORS</NavItemView>
        <NavItemView link="/about">ABOUT CLINIC</NavItemView>
        <NavItemView link="/contact">CONTACT</NavItemView>
        <NavItemView link="/prices">PRICES</NavItemView>
        <NavItemView link="/appointment">NEW APPOINTMENT</NavItemView>
        <NavItemView link="/my_account">MY ACCOUNT</NavItemView>
    </NavListView>
);