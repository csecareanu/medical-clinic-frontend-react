
import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';
import classesDesktop from '../desktop.module.css';

//TODO: provide style={classesDesktop} to NavItemButton in a better way
export default () => (
    <NavListView style={classesDesktop}>
        <NavItemButton link="/" style={classesDesktop} >
            <FormattedMessage id="menu_home" defaultMessage={'HOME'}/>
        </NavItemButton>
        <NavItemButton link="/doctors" style={classesDesktop} >
            <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'}/>
        </NavItemButton>
        <NavItemButton link="/about" style={classesDesktop}>
            <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'}/>
        </NavItemButton>
        <NavItemButton link="/contact" style={classesDesktop}>
            <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
        </NavItemButton>
        <NavItemButton link="/prices"style={classesDesktop} >
            <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
        </NavItemButton>
        <NavItemButton link="/appointment" style={classesDesktop}>
            <FormattedMessage id="menu_new_appointment" defaultMessage={'NEW APPOINTMENT'}/>
        </NavItemButton>
        <NavItemButton link="/my_account" style={classesDesktop}>
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButton>
        <NavItemButton link="/login" style={classesDesktop}>
            <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
        </NavItemButton>
        <NavItemButton link="/logout" style={classesDesktop}>
            <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
        </NavItemButton>
    </NavListView>
);
