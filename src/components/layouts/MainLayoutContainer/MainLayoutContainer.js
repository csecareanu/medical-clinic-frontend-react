import React, { useContext } from 'react';

import classes from './MainLayoutContainer.module.css';
import commonClasses from '../../../common.module.css';
import FooterView from '../../FooterView/FooterView';
import UserLoginView from '../../pages/connect/UserLoginView/UserLoginView';
import UserLogoutView from '../../pages/connect/UserLogoutView/UserLogoutView';
import UIStateContext, { UserAuthStatus } from '../../UIState/UIState-context';
import MenuSideDrawerView from '../../side-drawers/MenuSideDrawerView/MenuSideDrawerView';

const onCloseMenuSideDrawer = (uiStateContext) => {
    uiStateContext.setDisplayMenuSideDrawerComponent(false);
}

const MainLayoutContainer = (props) => {

    const uiStateContext = useContext(UIStateContext);

    return (
        <main className={classes.LayoutContainer}>

            {uiStateContext.displayMenuSideDrawerComponent ?
                <div className={commonClasses.SmallScreenOnly}>
                    <MenuSideDrawerView 
                        onClose={ () => {onCloseMenuSideDrawer(uiStateContext)}} 
                        isLoggedUserDoctor={uiStateContext.userAuthStatus === UserAuthStatus.DOCTOR}
                    />
                </div>
            :
                null
            }

            {uiStateContext.displayLoginComponent ? 
                <UserLoginView /> 
            : 
                null
            }

            {uiStateContext.displayLogoutComponent ? 
                <UserLogoutView /> 
            : 
                null
            }

            <div className={classes.HeaderContainer}>
                {props.header}
            </div>

            <div className={classes.BodyContainer}>
                {props.children}
            </div>
            
            <div className={classes.FooterContainer}>
                <FooterView />
            </div>
        </main>
    );
}

export default MainLayoutContainer;
