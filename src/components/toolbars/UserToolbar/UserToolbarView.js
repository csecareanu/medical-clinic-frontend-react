// @flow

import React from 'react';

import classes from './UserToolbarView.module.css';
import { UserAuthType } from '../../../shared/UserAuthType';
import NewAppointmentToolbarItem from './NewAppointmentToolbarItem/NewAppointmentToolbarItem';
import MyAccountToolbarItem from './MyAccountToolbarItem/MyAccountToolbarItem';
import PatientAccountToolbarItem from './PatientAccountToolbarItem/PatientAccountToolbarItem';

type Props = {
    userAuthStatus: number | Symbol,
    onClinicItemSelect: (itemId: number | Symbol) => void
}

const UserToolbarView = (props: Props) => (
    <div className={classes.Toolbar}>
        <div className={classes.RightItems}>
            <NewAppointmentToolbarItem 
                onClick={props.onClinicItemSelect} 
            />
            <MyAccountToolbarItem 
                onClick={props.onClinicItemSelect}
            />
            {props.userAuthStatus === UserAuthType.DOCTOR
            ? (
                <PatientAccountToolbarItem 
                    onClick={props.onClinicItemSelect}
                /> )
            : null }
        </div>
    </div>
)
export default UserToolbarView;