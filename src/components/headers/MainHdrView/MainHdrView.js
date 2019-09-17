import React from 'react';

import classes from './MainHdrView.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserAccountToolbarView from '../../toolbars/UserAccountToolbarView/UserAccountToolbarView';
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
                <UserAccountToolbarView />
            </div>
            <div className={commonClasses.LargeScreenOnly} >
                <MenuToolbarView>
                    <DoctorMenuView />
                    <ClinicMenuView />
                </MenuToolbarView>
            </div>
            <MainImageView src={imgMain} />
        </nav>
    </header>
);