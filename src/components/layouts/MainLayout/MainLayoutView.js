// @flow

import * as React from 'react';

import classes from './MainLayoutView.module.css';
import commonClasses from '../../../common.module.css';
import type { UserAuthType } from '../../../common/UserAuthType';
import { PageHeaderType } from '../../../common/PageHeaderType';
import MainHeader from '../../headers/MainHeader/MainHeader';
import DoctorHeader from '../../headers/DoctorHeader/DoctorHeader';
import SysAdminHeader from '../../headers/SysAdminHeader/SysAdminHeader';
import Footer from '../../footers/Footer/Footer';
import UserLogin from '../../pages/connect/UserLogin/UserLogin';
import UserLogoutView from '../../pages/connect/UserLogoutView/UserLogoutView';
import MenuSideDrawerView from '../../side-drawers/MenuSideDrawerView/MenuSideDrawerView';

const getHeaderComponent = ( headerType: PageHeaderType) : React.Node => {
  switch (headerType) {
        case PageHeaderType.MAIN:
            return <MainHeader />;
        case PageHeaderType.DOCTOR:
            return <DoctorHeader />;
        case PageHeaderType.SYS_ADMIN:
            return <SysAdminHeader />;
        default:
            console.log("MainLayoutView. Unknown header component provided: " + headerType);
    }
    return null;
}

type Props = {
    headerType: PageHeaderType,
    displayMenuSideDrawerComponent: boolean,
    onCloseMenuSideDrawer: () => void,
    userAuthStatus: UserAuthType,
    displayLoginComponent: boolean,
    displayLogoutComponent: boolean,
    children: React.Node
}

const MainLayoutView = (props: Props) => {

    const headerComponent = getHeaderComponent(props.headerType);

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
                <Footer />
            </div>
        </main>
    );
}

export default MainLayoutView;
