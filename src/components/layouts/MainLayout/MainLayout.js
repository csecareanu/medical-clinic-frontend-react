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
                        onOpenMenuSideDrawer={containerData.onOpenMenuSideDrawer}
                        userAuthStatus={containerData.userAuthStatus}
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