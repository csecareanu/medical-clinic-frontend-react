import React from 'react';

import classes from './AccountToolbarView.module.css';
import NewAppointmentToolbarItemView from './NewAppointmentToolbarItemView/NewAppointmentToolbarItemView';
import MyAccountToolbarItemView from './MyAccountToolbarItemView/MyAccountToolbarItemView';

export default () => (
    <div className={classes.Toolbar}>
        <div className={classes.RightItems}>
            <NewAppointmentToolbarItemView />
            <MyAccountToolbarItemView />
        </div>
    </div>
);