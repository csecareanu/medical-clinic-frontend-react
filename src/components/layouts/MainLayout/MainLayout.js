
import React from 'react';

import MainLayoutView from './MainLayoutView';
import MainLayoutContainer from './MainLayoutContainer';
import { UserAuthStatus } from '../../common/UserAuthStatus';

const MainLayout = (props) => {
    return (
        <MainLayoutContainer>
            {
                (containerData) => (
                    <MainLayoutView
                        displayMenuSideDrawerComponent={containerData.displayMenuSideDrawerComponent}
                        onCloseMenuSideDrawer={containerData.onCloseMenuSideDrawer}
                        isLoggedUserADoctor={containerData.userAuthStatus === UserAuthStatus.DOCTOR}
                        displayLoginComponent={containerData.displayLoginComponent}
                        displayLogoutComponent={containerData.displayLogoutComponent}
                        header={props.header} 
                    >
                        {props.children}
                    </MainLayoutView> 
                )
            }
        </MainLayoutContainer>
    );
}

export default MainLayout;