// @flow

import React from 'react';

import classes from './MainHeader.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenu from '../../menus/ClinicMenu/ClinicMenu';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import SideDrawerToolbarView from '../../toolbars/SideDrawerToolbarView/SideDrawerToolbarView';
import { UserAuthType } from '../../../common/UserAuthType';

type Props = {
    userAuthStatus: UserAuthType,
    onOpenMenuSideDrawer: () => void
}

const MainHeader = (props: Props) => {
    return (
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
                <div className={classes.ToolbarHSeparator} />

                <div className={commonClasses.LargeScreenOnly} >
                    <MenuToolbarView>
                        {props.userAuthStatus === UserAuthType.DOCTOR ? 
                            <DoctorMenuView /> : null
                        }
                        <ClinicMenu />
                    </MenuToolbarView>
                </div>
                <MainImageView src={imgMain} />
            </nav>
        </header>
    );    
}




export default MainHeader;