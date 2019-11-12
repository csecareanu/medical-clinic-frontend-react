import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classesMenu from '../menu.module.css';
import NavListView from '../../UI/NavListView/NavListView';
import NavItemButton from '../../UI/NavListView/NavItemButton/NavItemButton';
import LinkItemButton from '../../UI/NavListView/LinkItemButton/LinkItemButton';
import withProps from '../../hoc/withProps';
import UIStateContext, { UserAuthStatus }from '../../UIState/UIState-context';

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

const ClinicMenuView = (props) => {

    const uiStateContext = useContext(UIStateContext);

    const userLoginMenuItem = (
            <LinkItemButtonCSS onClick={ () => {uiStateContext.setDisplayLoginComponent(true)} }>
                <FormattedMessage id="menu_login" defaultMessage={'LOGIN'}/>
            </LinkItemButtonCSS>
    );

    const userLogoutMenuItem = (
            <LinkItemButtonCSS 
                onClick={ () => {
                        //TODO there should be a controller which logs out/in a user and does
                        //the other actions like 1. starting to retrieve data from server,
                        //2. navigates to home page on logout
                        uiStateContext.setUserAuthenticationStatus(UserAuthStatus.UNAUTHENTICATED);
                        // not displaying any message box related to log out action.
                        uiStateContext.setDisplayLogoutComponent(false);
                        props.history.push({pathname: '/'});
                    } }
            >
                <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
            </LinkItemButtonCSS>
    );

    const myAccountMenuItem = (
        <NavItemButtonCSS link="/my_account" >
            <FormattedMessage id="menu_my_account" defaultMessage={'MY ACCOUNT'}/>
        </NavItemButtonCSS>
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

            { uiStateContext.userAuthStatus !== UserAuthStatus.UNAUTHENTICATED ? 
                myAccountMenuItem : null
            }

            { uiStateContext.userAuthStatus !== UserAuthStatus.UNAUTHENTICATED ? 
                    userLogoutMenuItem : userLoginMenuItem
            }

        </NavListView>
    );
}

export default withRouter(ClinicMenuView);