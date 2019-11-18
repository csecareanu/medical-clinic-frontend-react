// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import { ClinicMenuItemType } from '../../../common/MenuItemTypes';
import { UserAuthType } from '../../../common/UserAuthType';
import 
  { 
  ClinicLinkLocationName,
  UserLinkLocationName,
  PatientLinkLocationName
  } from '../../../common/LinkLocationNames';
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
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

type Props = {
    onItemSelect: (itemType: typeof ClinicMenuItemType) => void,
    userAuthStatus: UserAuthType
}

const ClinicMenuView = (props: Props) => {

    const userLoginMenuItem = (
            <NavItemButtonCSS
                id={ClinicMenuItemType.USER_LOGIN}
                link={UserLinkLocationName.LOGIN}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
            </NavItemButtonCSS>
    );

    const userLogoutMenuItem = (
            <NavItemButtonCSS
                id={ClinicMenuItemType.USER_LOGOUT}
                link={UserLinkLocationName.LOGOUT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
            </NavItemButtonCSS>
    );

    const myAccountMenuItem = (
        <NavItemButtonCSS
            id={ClinicMenuItemType.PATIENT_ACCOUNT}
            link={PatientLinkLocationName.MY_ACCOUNT}
            preventNav
            onClick={props.onItemSelect}>
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButtonCSS>
    );

    return (
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS 
                id={ClinicMenuItemType.CLINIC_HOME}
                link={ClinicLinkLocationName.ROOT}
                preventNav
                exact
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_home" defaultMessage={'HOME'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                id={ClinicMenuItemType.CLINIC_DOCTORS}
                link={ClinicLinkLocationName.DOCTORS}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItemType.CLINIC_ABOUT}
                link={ClinicLinkLocationName.ABOUT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItemType.CLINIC_CONTACT}
                link={ClinicLinkLocationName.CONTACT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItemType.CLINIC_PRICES}
                link={ClinicLinkLocationName.PRICES}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItemType.PATIENT_NEW_APPOINTMENT}
                link={PatientLinkLocationName.APPOINTMENT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_new_appointment" defaultMessage={'NEW APPOINTMENT'}/>
            </NavItemButtonCSS>

            { props.userAuthStatus !== UserAuthType.UNAUTHENTICATED ? 
                myAccountMenuItem : null
            }

            { props.userAuthStatus !== UserAuthType.UNAUTHENTICATED ? 
                    userLogoutMenuItem : userLoginMenuItem
            }

        </NavListView>
    );
}

export default withRouter(ClinicMenuView);