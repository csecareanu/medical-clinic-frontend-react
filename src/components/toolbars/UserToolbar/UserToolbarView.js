// @flow

import React from 'react';

import classes from './UserToolbarView.module.css';
import { UserAuthType } from '../../../shared/UserAuthType';
import NewAppointmentToolbarItem from './NewAppointmentToolbarItem/NewAppointmentToolbarItem';
import LoginToolbarItem from './LoginToolbarItem/LoginToolbarItem';
import LogoutToolbarItem from './LogoutToolbarItem/LogoutToolbarItem';
import MyAccountToolbarItem from './MyAccountToolbarItem/MyAccountToolbarItem';
import PatientAccountToolbarItem from './PatientAccountToolbarItem/PatientAccountToolbarItem';
import ToolbarGroup from '../shared/ToolbarGroup/ToolbarGroup';

type Props = {
    userAuthStatus: number | Symbol,
    isUserConnectedToAPatientAccount: boolean,
    onClinicMenuItemSelect: (itemId: number | Symbol) => void
}

const UserToolbarView = (props: Props) => (
    <div className={classes.Toolbar}>
        <div className={classes.RightItems}>
            <NewAppointmentToolbarItem 
                onClick={props.onClinicMenuItemSelect} 
            />

            <div className={classes.UserItems}>
                { props.userAuthStatus === UserAuthType.UNAUTHENTICATED
                    ? (
                        <LoginToolbarItem
                            onClick={props.onClinicMenuItemSelect}
                        />

                    ) : (
                        <LogoutToolbarItem
                            onClick={props.onClinicMenuItemSelect}
                        />
                    )
                }
                
                <ToolbarGroup.VerticalSep />
                <MyAccountToolbarItem 
                    onClick={props.onClinicMenuItemSelect}
                />
            </div>
            
            {props.isUserConnectedToAPatientAccount
            ? (
                <PatientAccountToolbarItem 
                    onClick={props.onClinicMenuItemSelect}
                /> )
            : null }
        </div>
    </div>
)
export default UserToolbarView;