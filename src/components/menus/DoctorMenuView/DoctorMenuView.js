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

const DoctorMenuView = (props) => (
    <NavListView style={classesMenu.Menu}>

        <NavItemButton 
            link="/doctor"
            onClick={props.onItemSelect}
        >
            <FormattedMessage id="menu_administration" defaultMessage={'ADMINISTRATION'}/>
        </NavItemButton>

        <NavItemButton 
            link="/log_into_patient_account"
            onClick={props.onItemSelect}
        >
            <FormattedMessage 
                id="menu_log_into_patient_account" defaultMessage={'LOG INTO PATIENT ACCOUNT'}/>
        </NavItemButton>

    </NavListView>
);

export default DoctorMenuView;