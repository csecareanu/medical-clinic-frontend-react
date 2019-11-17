// @flow

import * as React from 'react';

import classes from './MainLayoutView.module.css';
import commonClasses from '../../../common.module.css';
import type { UserAuthType } from '../../../common/UserAuthType';
import { PageHeaderType } from '../../../common/PageHeaderType';
import MainHeader from '../../headers/MainHeader/MainHeader';
import DoctorHeader from '../../headers/DoctorHeader/DoctorHeader';
import SysAdminHeader from '../../headers/SysAdminHeader/SysAdminHeader';
import MainFooter from '../../footers/MainFooter/MainFooter';
import UserLogin from '../../pages/connect/UserLogin/UserLogin';
import UserLogoutView from '../../pages/connect/UserLogoutView/UserLogoutView';
import MenuSideDrawerView from '../../side-drawers/MenuSideDrawerView/MenuSideDrawerView';

type Props = {
    headerType: PageHeaderType,
    displayMenuSideDrawerComponent: boolean,
    onOpenMenuSideDrawer: () => void,
    onCloseMenuSideDrawer: () => void,
    userAuthStatus: UserAuthType,
    displayLoginComponent: boolean,
    displayLogoutComponent: boolean,
    children: React.Node
}

const MainLayoutView = (props: Props) => {

    const headerComponent = getHeaderComponent(props);

    return (
        <main className={classes.Layout}>

            {props.displayMenuSideDrawerComponent ?
                <div className={commonClasses.SmallScreenOnly}>
                    <MenuSideDrawerView 
                        onClose={props.onCloseMenuSideDrawer} 
                        userAuthStatus={props.userAuthStatus}
                    />
                </div>
            :
                null
            }

            {props.displayLoginComponent ? 
                <UserLogin /> 
            : 
                null
            }

            {props.displayLogoutComponent ? 
                <UserLogoutView /> 
            : 
                null
            }

            <div className={classes.Header}>
                {headerComponent}
            </div>

            <div className={classes.Body}>
                {props.children}
            </div>
            
            <div className={classes.Footer}>
                <MainFooter />
            </div>
        </main>
    );
}

const getHeaderComponent = (props: Props) : React.Node => {
  switch (props.headerType) {
        case PageHeaderType.MAIN:
            return (
                <MainHeader                     
                    userAuthStatus={props.userAuthStatus}
                    onOpenMenuSideDrawer={props.onOpenMenuSideDrawer}
            /> );
        case PageHeaderType.DOCTOR:
            return (
                <DoctorHeader                     
                    onOpenMenuSideDrawer={props.onOpenMenuSideDrawer}
            /> );     
        case PageHeaderType.SYS_ADMIN:
            return <SysAdminHeader />;
        default:
            console.log("MainLayoutView. Unknown header component provided: " + props.headerType);
    }
    return null;
}

export default MainLayoutView;
