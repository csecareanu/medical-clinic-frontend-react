// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import { DoctorMenuItem } from '../../../shared/MenuItemIdentifiers';
import { DoctorLinkLocationName } from '../../../shared/LinkLocationNames';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../hoc/withProps';

/**
 * By default NavItemButton does not have any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const NavItemButtonCSS = withProps(NavItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuTextAdmin, 
        styleTextActive: classesMenu.ActiveAdmin
    });

type Props = {
    onItemSelect?: (itemId: number) => void,
    userAuthenticationStatus: number | Symbol,
    isUserConnectedToAPatientAccount: boolean
}

const DoctorMainMenuView = (props: Props) => {

    const logIntoPatientAccount = (
            <NavItemButtonCSS
                id={DoctorMenuItem.LOG_INTO_PATIENT_ACCOUNT}
                link={DoctorLinkLocationName.LOG_INTO_PATIENT_ACCOUNT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-main-menu.log-into-patient-account" />
            </NavItemButtonCSS>
    );

    const logOutPatientAccount = (
            <NavItemButtonCSS 
                id={DoctorMenuItem.LOG_OUT_PATIENT_ACCOUNT}
                link={DoctorLinkLocationName.LOG_OUT_PATIENT_ACCOUNT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-main-menu.log-out-patient-account" />
            </NavItemButtonCSS>
    );

    return (
        <NavListView style={classesMenu.Menu}>

            <NavItemButtonCSS 
                id={DoctorMenuItem.HOME}
                link={DoctorLinkLocationName.HOME}
                preventNav
                exact
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="doctor-main-menu.administration" />
            </NavItemButtonCSS>

            { props.isUserConnectedToAPatientAccount 
                ? logOutPatientAccount 
                : logIntoPatientAccount
            }

        </NavListView>
    );
}
export default DoctorMainMenuView;