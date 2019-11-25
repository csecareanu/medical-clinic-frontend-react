// @flow

import * as React from 'react';

import classes from './MainLayoutView.module.css';
import { PageHeaderType } from '../../../shared/PageHeaderType';
import MainHeader from '../../headers/MainHeader/MainHeader';
import DoctorHeader from '../../headers/DoctorHeader/DoctorHeader';
import SysAdminHeader from '../../headers/SysAdminHeader/SysAdminHeader';
import MainFooter from '../../footers/MainFooter/MainFooter';
import UserLogin from '../../connect/UserLogin/UserLogin';
import UserLogout from '../../connect/UserLogout/UserLogout';
import MenuSideDrawer from '../../side-drawers/MenuSideDrawer/MenuSideDrawer';

type Props = {
    headerType: PageHeaderType,
    onOpenMenuSideDrawer: () => void,
    userAuthStatus: number | Symbol,
    children: React.Node
}

const MainLayoutView = (props: Props) => {

    const headerComponent = getHeaderComponent(props);

    return (
        <main className={classes.Layout}>

            <MenuSideDrawer />
            <UserLogin />
            <UserLogout />

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
