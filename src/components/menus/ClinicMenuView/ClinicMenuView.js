import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';
import LinkItemButton from '../../UI/NavListView/LinkItemButton/LinkItemButton';
import withProps from '../../hoc/withProps';
import UIStateContext from '../../UIState/UIState-context';

/**
 * By default NavItemButton does not any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const NavItemButtonCSS = withProps(NavItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

/**
 * By default LinkItemButton does not any CSS attached. 
 * Adding CSS from the imported @param classesMenu.
 */
const LinkItemButtonCSS = withProps(LinkItemButton, 
    {
        styleItem: classesMenu.MenuItem, 
        styleText: classesMenu.MenuText, 
        styleTextActive: classesMenu.Active
    });

const ClinicMenuView = (props) => {

    const userLogin = (
        <LinkItemButtonCSS link="/login" >
            <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
        </LinkItemButtonCSS>
    );

    const userLogout = (
        <LinkItemButtonCSS link="/logout" >
            <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
        </LinkItemButtonCSS>
    );

    return (
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS link="/" exact >
                <FormattedMessage id="menu_home" defaultMessage={'HOME'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/doctors" >
                <FormattedMessage id="menu_doctors" defaultMessage={'DOCTORS'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/about" >
                <FormattedMessage id="menu_about_clinic" defaultMessage={'ABOUT CLINIC'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/contact" >
                <FormattedMessage id="menu_contact" defaultMessage={'CONTACT'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/prices" >
                <FormattedMessage id="menu_prices" defaultMessage={'PRICES'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/appointment" >
                <FormattedMessage id="menu_new_appointment" defaultMessage={'NEW APPOINTMENT'}/>
            </NavItemButtonCSS>
            <NavItemButtonCSS link="/my_account" >
                <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
            </NavItemButtonCSS>
            <UIStateContext.Consumer>
                { context => !context.userAuthenticated ? userLogin : userLogout }
            </UIStateContext.Consumer>
        </NavListView>
    );
}

export default ClinicMenuView;