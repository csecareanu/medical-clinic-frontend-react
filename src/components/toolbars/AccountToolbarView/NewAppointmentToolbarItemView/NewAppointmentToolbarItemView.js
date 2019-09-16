import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './NewAppointmentToolbarItemView.module.css';
import NavListView from '../../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classes.MenuItem, 
        styleText: classes.MenuText, 
        styleTextActive: classes.Active
    });

export default () => (
    <div className={classes.NewAppointment}>
        <NavListView style={classes.Menu}>
        <NavItemButton link="/appointment" exact >
            <FormattedMessage id="toolbar_new_appointment" defaultMessage={'New Appointment'}/>
        </NavItemButton>
        </NavListView>
    </div>
);