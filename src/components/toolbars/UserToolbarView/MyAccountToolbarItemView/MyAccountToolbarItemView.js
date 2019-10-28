import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './MyAccountToolbarItemView.module.css';
import NavListView from '../../../UI/NavListView/NavListView';
import NavItemButton_NoStyle from '../../../UI/NavListView/NavItemButton/NavItemButton';
import withProps from '../../../hoc/withProps';

const NavItemButton = withProps(NavItemButton_NoStyle, 
    {
        styleItem: classes.MenuItem, 
        styleText: classes.MenuText, 
        styleTextActive: classes.Active
    });

export default () => (
    <div className={classes.MyAccount}>
        <NavListView style={classes.Menu}>
        {/*<NavItemButton link="/my_account" >*/}
        <NavItemButton link="/login" >
            <FormattedMessage id="toolbar_my_account" defaultMessage={'My Account'}/>
        </NavItemButton>
        </NavListView>
    </div>
);