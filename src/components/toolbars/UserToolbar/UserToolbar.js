// @flow

import React from 'react';

import classes from './UserToolbar.module.css';
import NewAppointmentToolbarItem from './NewAppointmentToolbarItem/NewAppointmentToolbarItem';
import MyAccountToolbarItem from './MyAccountToolbarItem/MyAccountToolbarItem';
import PatientAccountToolbarItem from './PatientAccountToolbarItem/PatientAccountToolbarItem';

const UserToolbar = () => {

    return (
        <div className={classes.Toolbar}>
            <div className={classes.RightItems}>
                <NewAppointmentToolbarItem />
                <MyAccountToolbarItem />
                <PatientAccountToolbarItem />
            </div>
        </div>
    );
}
export default UserToolbar;