// @flow

import React from 'react';

import classes from './MainHeader.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../shared/MainImageView/MainImageView';
import ClinicMenu from '../../menus/ClinicMenu/ClinicMenu';
import DoctorMainMenu from '../../menus/DoctorMainMenu/DoctorMainMenu';
import ClinicMainToolbar from '../../toolbars/ClinicMainToolbar/ClinicMainToolbar';
import UserToolbar from '../../toolbars/UserToolbar/UserToolbar';
import MenuToolbar from '../../toolbars/MenuToolbar/MenuToolbar';
import SideDrawerToolbar from '../../toolbars/SideDrawerToolbar/SideDrawerToolbar';
import { UserAuthType } from '../../../shared/UserAuthType';

type Props = {
    userAuthenticationStatus: number | Symbol,
    onOpenMenuSideDrawer: () => void
}

const MainHeader = (props: Props) => {
    return (
        <header className={classes.Header}>
            <nav>
                <ClinicMainToolbar />
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
                        {props.userAuthenticationStatus === UserAuthType.DOCTOR ? 
                            <DoctorMainMenu /> : null
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