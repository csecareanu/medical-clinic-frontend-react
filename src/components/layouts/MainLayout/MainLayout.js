// @flow

import * as React from 'react';

import MainLayoutView from './MainLayoutView';
import MainLayoutContainer from './MainLayoutContainer';

type Props = {
    header: React.Node,
    children: React.Node
}

const MainLayout = (props: Props) => {
    return (
        <MainLayoutContainer>
            {
                (containerData) => (
                    <MainLayoutView
                        displayMenuSideDrawerComponent={containerData.displayMenuSideDrawerComponent}
                        onCloseMenuSideDrawer={containerData.onCloseMenuSideDrawer}
                        userAuthStatus={containerData.userAuthStatus}
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