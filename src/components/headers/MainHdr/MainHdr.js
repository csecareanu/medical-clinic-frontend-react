import React from 'react';

import classes from './MainHdr.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import MenuToggleToolbarView from '../../toolbars/MenuToggleToolbarView/MenuToggleToolbarView';
import SideDrawerView from '../../menus/SideDrawerView/SideDrawerView';

export default () => {
    let menuContent = (
        <React.Fragment>
            <DoctorMenuView />
            <ClinicMenuView />
        </React.Fragment>
    );
    
    return (
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
                <div className={commonClasses.SmallScreenOnly}>
                    <SideDrawerView open={true}>
                        {menuContent}
                    </SideDrawerView>
                </div>
                <div className={commonClasses.LargeScreenOnly} >
                    <MenuToolbarView>
                        {menuContent}
                    </MenuToolbarView>
                </div>
                <MainImageView src={imgMain} />
            </nav>
        </header>
    );
}