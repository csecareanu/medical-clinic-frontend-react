import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';


const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

export default () => (
    <NavListView style={classesMenu.Menu}>
        <NavItemButton link="/doctor">
            <FormattedMessage id="menu_administration" defaultMessage={'ADMINISTRATION'}/>
        </NavItemButton>
        <NavItemButton link="/doctor/patient_login">
            <FormattedMessage id="menu_log_in_patient_account" defaultMessage={'LOG IN PATIENT ACCOUNT'}/>
        </NavItemButton>
    </NavListView>
);