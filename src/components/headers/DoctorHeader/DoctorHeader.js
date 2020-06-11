// @flow

import React from 'react';

import classes from './DoctorHeader.module.css';
import commonClasses from '../../../common.module.css';
import DoctorAdminMenu from '../../menus/DoctorAdminMenu/DoctorAdminMenu';
import ClinicMainToolbar from '../../toolbars/ClinicMainToolbar/ClinicMainToolbar';
import UserToolbar from '../../toolbars/UserToolbar/UserToolbar';
import MenuToolbar from '../../toolbars/MenuToolbar/MenuToolbar';
import SideDrawerToolbar from '../../toolbars/SideDrawerToolbar/SideDrawerToolbar';
import {LanguageType} from '../../../shared/LanguageType';

type Props = {
    onOpenMenuSideDrawer: () => void,
    onChangeLang: (lang: $Values<typeof LanguageType>) => void
}

const DoctorHeader = (props: Props) => (
    <header className={classes.Header}>
        <nav>
            <ClinicMainToolbar
               onChangeLang={props.onChangeLang}
            />
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