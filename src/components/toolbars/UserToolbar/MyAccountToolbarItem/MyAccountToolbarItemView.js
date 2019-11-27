// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './MyAccountToolbarItemView.module.css';
import { UserAuthType } from '../../../../shared/UserAuthType';
import { 
    DoctorMenuItem,
    PatientMenuItem,
    SiteAdminMenuItem
    } from '../../../../shared/MenuItemIdentifiers';
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
    userAuthStatus: number | Symbol
}

const MyAccountToolbarItemView = (props: Props) => {
    var controlId = (null: null | number);

    switch (props.userAuthStatus) {
        case UserAuthType.PATIENT:
            controlId = PatientMenuItem.MY_ACCOUNT;
            break;
        case UserAuthType.DOCTOR:
            controlId = DoctorMenuItem.MY_ACCOUNT;
            break;
        case UserAuthType.SITE_ADMIN:
            controlId = SiteAdminMenuItem.MY_ACCOUNT;
            break;
        default:
            console.log("MyAccountToolbarItemView. Unknown user authentication type ", 
                props.userAuthStatus);
            // do not display the control for this case
            return null;
    }

    return (
        <div className={classes.MyAccount}>
            <NavListView style={classes.Menu}>
            <NavItemButton 
                id={controlId}
                onClick={props.onClick}
            >
                <FormattedMessage id="toolbar_my_account" defaultMessage={'My Account'}/>
            </NavItemButton>
            </NavListView>
        </div>
    )
}

export default MyAccountToolbarItemView;