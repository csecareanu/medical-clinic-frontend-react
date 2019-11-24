// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './NewAppointmentToolbarItemView.module.css';
import { PatientMenuItem } from '../../../../common/MenuItemIdentifiers.js'
import NavListView from '../../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classes.MenuItem, 
        styleText: classes.MenuText, 
        styleTextActive: classes.Active
    });

type Props = {
    onClick: (itemId: number) => void,
}

const NewAppointmentToolbarItemView = (props: Props) => (
    <div className={classes.NewAppointment}>
        <NavListView style={classes.Menu}>
            <NavItemButton 
                id={PatientMenuItem.NEW_APPOINTMENT}
                onClick={props.onClick}
            >
                <FormattedMessage 
                    id="toolbar_new_appointment" 
                    defaultMessage={'New Appointment'}
                />
            </NavItemButton>
        </NavListView>
    </div>
);

export default NewAppointmentToolbarItemView;