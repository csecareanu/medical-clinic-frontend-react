// @flow

import React from 'react';

import classes from './DoctorHeader.module.css';
import commonClasses from '../../../common.module.css';
import DoctorAdminMenu from '../../menus/DoctorAdminMenu/DoctorAdminMenu';
import AboutClinicToolbar from '../../toolbars/AboutClinicToolbar/AboutClinicToolbar';
import UserToolbar from '../../toolbars/UserToolbar/UserToolbar';
import MenuToolbar from '../../toolbars/MenuToolbar/MenuToolbar';
import SideDrawerToolbar from '../../toolbars/SideDrawerToolbar/SideDrawerToolbar';

type Props = {
    onOpenMenuSideDrawer: () => void
}

const DoctorHeader = (props: Props) => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbar />
            <div className={classes.ToolbarHSeparator} />
            <div className={classes.MenuToggle_UserAccount_Toolbars}>
                <div className={commonClasses.SmallScreenOnly}>
                    <SideDrawerToolbar 
                        onShowSideDrawer={ props.onOpenMenuSideDrawer }
                    />
                </div>
                <UserToolbar />
            </div>
            <div className={commonClasses.LargeScreenOnly} >
                <MenuToolbar>
                    <DoctorAdminMenu />
                </MenuToolbar>
            </div>
        </nav>
    </header>
);

export default DoctorHeader;