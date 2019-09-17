import React from 'react';

import classes from './DoctorAdminHdrView.module.css';
import commonClasses from '../../../common.module.css';
import DoctorAdminMenuView from '../../menus/DoctorAdminMenuView/DoctorAdminMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import MenuToggleToolbarView from '../../toolbars/MenuToggleToolbarView/MenuToggleToolbarView';

export default () => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbarView />
            <div className={classes.ToolbarVSeparator} />
            <div className={classes.MenuToggle_UserAccount_Toolbars}>
                <div className={commonClasses.SmallScreenOnly}>
                    <MenuToggleToolbarView />
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
