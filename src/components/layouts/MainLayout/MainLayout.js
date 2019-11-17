
import React from 'react';

import MainLayoutView from './MainLayoutView';
import MainLayoutContainer from './MainLayoutContainer';
import { UserAuthType } from '../../../common/UserAuthType';

const MainLayout = (props) => {
    return (
        <MainLayoutContainer>
            {
                (containerData) => (
                    <MainLayoutView
                        displayMenuSideDrawerComponent={containerData.displayMenuSideDrawerComponent}
                        onCloseMenuSideDrawer={containerData.onCloseMenuSideDrawer}
                        isLoggedUserADoctor={containerData.userAuthStatus === UserAuthType.DOCTOR}
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