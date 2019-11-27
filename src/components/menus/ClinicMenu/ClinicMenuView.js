// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import {
    UserMenuItem,
    ClinicMenuItem
    } from '../../../shared/MenuItemIdentifiers';
import { UserAuthType } from '../../../shared/UserAuthType';
import { 
  ClinicLinkLocationName,
  UserLinkLocationName
  } from '../../../shared/LinkLocationNames';
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
    onItemSelect: (itemType: number) => void,
    userAuthStatus: number | Symbol
}

const ClinicMenuView = (props: Props) => {

    const userLoginItem = (
            <NavItemButtonCSS
                id={UserMenuItem.USER_LOGIN}
                link={UserLinkLocationName.LOGIN}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
            </NavItemButtonCSS>
    );

    const userLogoutItem = (
            <NavItemButtonCSS
                id={UserMenuItem.USER_LOGOUT}
                link={UserLinkLocationName.LOGOUT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
            </NavItemButtonCSS>
    );

    return (
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS 
                id={ClinicMenuItem.HOME}
                link={ClinicLinkLocationName.HOME}
                preventNav
                exact
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_home" defaultMessage={'HOME'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                id={ClinicMenuItem.DOCTORS}
                link={ClinicLinkLocationName.DOCTORS}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.ABOUT}
                link={ClinicLinkLocationName.ABOUT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.CONTACT}
                link={ClinicLinkLocationName.CONTACT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.PRICES}
                link={ClinicLinkLocationName.PRICES}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
            </NavItemButtonCSS>

            { props.userAuthStatus !== UserAuthType.UNAUTHENTICATED 
                ? userLogoutItem 
                : userLoginItem
            }

        </NavListView>
    );
}

export default withRouter(ClinicMenuView);