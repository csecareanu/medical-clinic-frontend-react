// @flow

import * as React from 'react';

import MainLayoutView from './MainLayoutView';
import MainLayoutContainer from './MainLayoutContainer';
import { PageHeaderType }  from '../../../common/PageHeaderType';

type Props = {
    headerType: PageHeaderType,
    children: React.Node
}

const MainLayout = (props: Props) => {
    return (
        <MainLayoutContainer>
            {
                (containerData) => (
                    <MainLayoutView
                        displayMenuSideDrawerComponent={containerData.displayMenuSideDrawerComponent}
                        onOpenMenuSideDrawer={containerData.onOpenMenuSideDrawer}
                        onCloseMenuSideDrawer={containerData.onCloseMenuSideDrawer}
                        userAuthStatus={containerData.userAuthStatus}
                        displayLoginComponent={containerData.displayLoginComponent}
                        displayLogoutComponent={containerData.displayLogoutComponent}
                        headerType={props.headerType} 
                    >
                        {props.children}
                    </MainLayoutView> 
                )
            }
        </MainLayoutContainer>
    );
}

export default MainLayout;