// @flow

import * as React from 'react';

import classes from './MainLayoutView.module.css';
import { PageHeaderType } from '../../../shared/PageHeaderType';
import MainHeader from '../../headers/MainHeader/MainHeader';
import DoctorHeader from '../../headers/DoctorHeader/DoctorHeader';
import SiteAdminHeader from '../../headers/SiteAdminHeader/SiteAdminHeader';
import MainFooter from '../../footers/MainFooter/MainFooter';
import UserAuthenticationModal 
    from '../../pages/user/UserAuthenticationModal/UserAuthenticationModal';
import UserLogout from '../../pages/user/UserLogout/UserLogout';
import MainMenuSideDrawer from '../../side-drawers/MainMenuSideDrawer/MainMenuSideDrawer';
import DoctorMenuSideDrawer from '../../side-drawers/DoctorMenuSideDrawer/DoctorMenuSideDrawer';

type Props = {
    headerType: PageHeaderType,
    onOpenMenuSideDrawer: () => void,
    userAuthenticationStatus: number | Symbol,
    children: React.Node
}

const MainLayoutView = (props: Props) => {

    const headerComponent = getHeaderComponent(props);
    const sideDrawerComponent = getMenuSideDrawerComponent(props);

    return (
        <main className={classes.Layout}>

            {sideDrawerComponent}
            
            <UserAuthenticationModal />
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
                    userAuthenticationStatus={props.userAuthenticationStatus}
                    onOpenMenuSideDrawer={props.onOpenMenuSideDrawer}
            /> );
        case PageHeaderType.DOCTOR:
            return (
                <DoctorHeader
                    onOpenMenuSideDrawer={props.onOpenMenuSideDrawer}
            /> );     
        case PageHeaderType.SYS_ADMIN:
            return <SiteAdminHeader />;
        default:
            console.log("MainLayoutView. getHeaderComponent. " +
                "Unknown header component provided: " + props.headerType);
    }
    return null;
}

const getMenuSideDrawerComponent = (props: Props) : React.Node => {
  switch (props.headerType) {
        case PageHeaderType.MAIN:
            return (
                <MainMenuSideDrawer /> 
            );
        case PageHeaderType.DOCTOR:
            return (
                <DoctorMenuSideDrawer /> 
            );

        case PageHeaderType.SYS_ADMIN:
            return (
                <MainMenuSideDrawer /> 
            );
        default:
            console.log("MainLayoutView. getMenuSideDrawerComponent. " +
                "Unknown header component provided: " + props.headerType);
    }
    return null;
}

export default MainLayoutView;
