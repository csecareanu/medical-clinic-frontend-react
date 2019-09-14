import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

export default () => (
    <NavListView style={classesMenu.Menu}>
        <NavItemButton link="/" exact >
            <FormattedMessage id="menu_home" defaultMessage={'HOME'}/>
        </NavItemButton>
        <NavItemButton link="/doctors" >
            <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'}/>
        </NavItemButton>
        <NavItemButton link="/about" >
            <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'}/>
        </NavItemButton>
        <NavItemButton link="/contact" >
            <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
        </NavItemButton>
        <NavItemButton link="/prices" >
            <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
        </NavItemButton>
        <NavItemButton link="/appointment" >
            <FormattedMessage id="menu_new_appointment" defaultMessage={'NEW APPOINTMENT'}/>
        </NavItemButton>
        <NavItemButton link="/my_account" >
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButton>
        <NavItemButton link="/login" >
            <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
        </NavItemButton>
        <NavItemButton link="/logout" >
            <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
        </NavItemButton>
    </NavListView>
);