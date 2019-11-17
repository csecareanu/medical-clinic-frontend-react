// @flow

import React from 'react';

import classes from './DoctorHeader.module.css';
import commonClasses from '../../../common.module.css';
import DoctorAdminMenuView from '../../menus/DoctorAdminMenuView/DoctorAdminMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import SideDrawerToolbarView from '../../toolbars/SideDrawerToolbarView/SideDrawerToolbarView';

type Props = {
    onOpenMenuSideDrawer: () => void
}

const DoctorHeader = (props: Props) => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbarView />
            <div className={classes.ToolbarHSeparator} />
            <div className={classes.MenuToggle_UserAccount_Toolbars}>
                <div className={commonClasses.SmallScreenOnly}>
                    <SideDrawerToolbarView 
                        onShowSideDrawer={ props.onOpenMenuSideDrawer }
                    />
                </div>
                <UserToolbarView />
            </div>
            <div className={commonClasses.LargeScreenOnly} >
                <MenuToolbarView>
                    <DoctorAdminMenuView />
                </MenuToolbarView>
            </div>
        </nav>
    </header>
);

export default DoctorHeader;