// @flow

import React from 'react';

import classes from './MainHeader.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenu from '../../menus/ClinicMenu/ClinicMenu';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbar from '../../toolbars/AboutClinicToolbar/AboutClinicToolbar';
import UserToolbar from '../../toolbars/UserToolbar/UserToolbar';
import MenuToolbar from '../../toolbars/MenuToolbar/MenuToolbar';
import SideDrawerToolbar from '../../toolbars/SideDrawerToolbar/SideDrawerToolbar';
import { UserAuthType } from '../../../common/UserAuthType';

type Props = {
    userAuthStatus: number | Symbol,
    onOpenMenuSideDrawer: () => void
}

const MainHeader = (props: Props) => {
    return (
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
                <div className={classes.ToolbarHSeparator} />

                <div className={commonClasses.LargeScreenOnly} >
                    <MenuToolbar>
                        {props.userAuthStatus === UserAuthType.DOCTOR ? 
                            <DoctorMenuView /> : null
                        }
                        <ClinicMenu />
                    </MenuToolbar>
                </div>
                <MainImageView src={imgMain} />
            </nav>
        </header>
    );    
}




export default MainHeader;