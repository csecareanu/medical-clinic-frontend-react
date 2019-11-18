// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import { ClinicMenuItemType } from '../../../common/MenuItemTypes';
import { UserAuthType } from '../../../common/UserAuthType';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';
import LinkItemButton from '../../UI/NavListView/LinkItemButton/LinkItemButton';
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

/**
 * By default LinkItemButton does not have any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const LinkItemButtonCSS = withProps(LinkItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

type Props = {
    onItemSelect: (itemType: ClinicMenuItemType) => void,
    userAuthStatus: UserAuthType
}

const ClinicMenuView = (props: Props) => {

    const userLoginMenuItem = (
            <LinkItemButtonCSS 
                onClick={ () => {
                    if(props.onItemSelect) {
                        props.onItemSelect(ClinicMenuItemType.USER_LOGIN);
                    }
                }}
            >
                <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
            </LinkItemButtonCSS>
    );

    const userLogoutMenuItem = (
            <LinkItemButtonCSS 
                onClick={ () => {
                        if(props.onItemSelect) {
                            props.onItemSelect(ClinicMenuItemType.USER_LOGOUT);
                        }
                    }}
            >
                <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
            </LinkItemButtonCSS>
    );

    const myAccountMenuItem = (
        <NavItemButtonCSS link="/my_account" onClick={props.onItemSelect}>
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButtonCSS>
    );

    return (
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS 
                link="/" 
                exact 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.CLINIC_HOME); }}
            >
                <FormattedMessage id="menu_home" defaultMessage={'HOME'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                link="/doctors" 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.CLINIC_DOCTORS); }}
            >
                <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                link="/about" 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.CLINIC_ABOUT); }}
            >
                <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'} />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                link="/contact" 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.CLINIC_CONTACT); }}
            >
                <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                link="/prices" 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.CLINIC_PRICES); }}
            >
                <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                link="/appointment" 
                onClick={ () => { props.onItemSelect(ClinicMenuItemType.PATIENT_NEW_APPOINTMENT); }}
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