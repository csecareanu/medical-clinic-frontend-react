// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import classesMenu from '../menu.module.css';
import {ClinicMenuItem} from '../../../shared/MenuItemIdentifiers';
import {ClinicLinkLocationName} from '../../../shared/LinkLocationNames';
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
    userAuthenticationStatus: number | Symbol
}

const ClinicMenuView = (props: Props) => {

    return (
        <NavListView style={classesMenu.Menu}>
            <NavItemButtonCSS 
                id={ClinicMenuItem.HOME}
                link={ClinicLinkLocationName.HOME}
                preventNav
                exact
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="clinic-menu.home" />
            </NavItemButtonCSS>

            <NavItemButtonCSS 
                id={ClinicMenuItem.DOCTORS}
                link={ClinicLinkLocationName.DOCTORS}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="clinic-menu.doctors" />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.ABOUT}
                link={ClinicLinkLocationName.ABOUT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="clinic-menu.about-clinic" />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.CONTACT}
                link={ClinicLinkLocationName.CONTACT}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="clinic-menu.contact" />
            </NavItemButtonCSS>

            <NavItemButtonCSS
                id={ClinicMenuItem.PRICES}
                link={ClinicLinkLocationName.PRICES}
                preventNav
                onClick={props.onItemSelect}
            >
                <FormattedMessage id="clinic-menu.prices" />
            </NavItemButtonCSS>

        </NavListView>
    );
}

export default withRouter(ClinicMenuView);