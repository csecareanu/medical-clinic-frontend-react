import React, { useContext } from 'react';

import classes from './MainHdrView.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import SideDrawerToolbarView from '../../toolbars/SideDrawerToolbarView/SideDrawerToolbarView';
import UIStateContext from '../../UIState/UIState-context';
import { UserAuthStatus } from '../../common/UserAuthStatus';

const onShowSideDrawer = (uiStateContext) => {
    uiStateContext.setDisplayMenuSideDrawerComponent(true);
}

const MainHdrView = (props) => {
    const uiStateContext = useContext(UIStateContext);

    return (
        <header className={classes.Header}>
            <nav>
                <AboutClinicToolbarView />
                <div className={classes.ToolbarHSeparator} />
                <div className={classes.MenuToggle_UserAccount_Toolbars}>
                    <div className={commonClasses.SmallScreenOnly}>
                        <SideDrawerToolbarView 
                            onShowSideDrawer={ () => {onShowSideDrawer(uiStateContext)} }
                        />
                    </div>
                    <UserToolbarView />
                </div>
                <div className={classes.ToolbarHSeparator} />

                <div className={commonClasses.LargeScreenOnly} >
                    <MenuToolbarView>
                        {uiStateContext.userAuthStatus === UserAuthStatus.DOCTOR ? 
                            <DoctorMenuView /> : null
                        }
                        <ClinicMenuView />
                    </MenuToolbarView>
                </div>
                <MainImageView src={imgMain} />
            </nav>
        </header>
    );    
}




export default MainHdrView;