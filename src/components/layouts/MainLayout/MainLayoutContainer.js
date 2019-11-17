// @flow

import * as React from 'react';

import UIStateContext from '../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../common/UserAuthType';

const layoutContainer = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: UserAuthType),
    displayMenuSideDrawerComponent: (false: boolean),
    displayLoginComponent: (false: boolean),
    displayLogoutComponent: (false: boolean),
    onOpenMenuSideDrawer: () : void => {
        if(layoutContainer.uiStateContext == null) {
            console.log("MainLayoutContainer. onOpenMenuSideDrawer. uiStateContext not set");
            return;
        }        
        layoutContainer.uiStateContext.setDisplayMenuSideDrawerComponent(true);
    },    
    onCloseMenuSideDrawer: () : void => {
        if(layoutContainer.uiStateContext == null) {
            console.log("MainLayoutContainer. onCloseMenuSideDrawer. uiStateContext not set");
            return;
        }        
        layoutContainer.uiStateContext.setDisplayMenuSideDrawerComponent(false);
    }
}

type Props = {
    children: (containerData: typeof layoutContainer) => React.Node
}

const MainLayoutContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    layoutContainer.uiStateContext = uiStateContext;

    layoutContainer.userAuthStatus = uiStateContext.userAuthStatus;
    layoutContainer.displayMenuSideDrawerComponent = uiStateContext.displayMenuSideDrawerComponent;
    layoutContainer.displayLoginComponent = uiStateContext.displayLoginComponent;
    layoutContainer.displayLogoutComponent = uiStateContext.displayLogoutComponent;

    return (props.children)(layoutContainer);
}

export default MainLayoutContainer;