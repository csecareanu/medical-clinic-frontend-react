// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './NewAppointmentToolbarItem.module.css';
import {PatientMenuItem} from '../../../../shared/MenuItemIdentifiers.js'
import NavListView from '../../../UI/NavListView/NavListView';
import NavItemButton from '../../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../../hoc/withProps';

const NavItemButtonCSS = withProps(NavItemButton, 
    {
        styleItem: classes.MenuItem, 
        styleText: classes.MenuText, 
        styleTextActive: classes.Active
    });

type Props = {
    onClick: (itemId: number | Symbol) => void,
}

const NewAppointmentToolbarItemView = (props: Props) => (
    <div className={classes.NewAppointment}>
        <NavListView style={classes.Menu}>
            <NavItemButtonCSS 
                id={PatientMenuItem.NEW_APPOINTMENT}
                onClick={props.onClick}
            >
                <FormattedMessage 
                    id="toolbars.user-toolbar.new-appointment-toolbar-item.btn-new-appointment"
                />
            </NavItemButtonCSS>
        </NavListView>
    </div>
);

export default NewAppointmentToolbarItemView;