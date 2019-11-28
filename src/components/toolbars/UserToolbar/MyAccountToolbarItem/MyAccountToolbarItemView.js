// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './MyAccountToolbarItemView.module.css';
import { UserMenuItem } from '../../../../shared/MenuItemIdentifiers';
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
    onClick: (itemId: number) => void
}

const MyAccountToolbarItemView = (props: Props) => {
    return (
        <div className={classes.MyAccount}>
            <NavListView style={classes.Menu}>
            <NavItemButton 
                id={UserMenuItem.MY_ACCOUNT}
                onClick={props.onClick}
            >
                <FormattedMessage id="toolbar_my_account" defaultMessage={'My Account'}/>
            </NavItemButton>
            </NavListView>
        </div>
    )
}

export default MyAccountToolbarItemView;