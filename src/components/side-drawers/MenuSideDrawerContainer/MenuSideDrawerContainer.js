// @flow

import * as React from 'react';

import UIStateContext from '../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../shared/UserAuthType';

const sideDrawerContainer = {
    uiStateContext: (null: null | UIStateContext),
    displayMenuSideDrawerComponent: (false: boolean),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    onCloseMenuSideDrawer: () : void => {
        if(sideDrawerContainer.uiStateContext == null) {
            console.log("MenuSideDrawerContainer. onCloseMenuSideDrawer. uiStateContext not set");
            return;
        }        
        sideDrawerContainer.uiStateContext.setDisplayMenuSideDrawerComponent(false);
    }    
}

type Props = {
    children: (containerData: typeof sideDrawerContainer) => React.Node
}

/**
 * Container component used by all menu side-drawers.
 * The container's scope is to keep the menu side-drawer components presentational.
 * It provides all context information needed and take actions to close the sidebar.
 */

const MenuSideDrawerContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    sideDrawerContainer.uiStateContext = uiStateContext;
    sideDrawerContainer.displayMenuSideDrawerComponent = 
                uiStateContext.displayMenuSideDrawerComponent;
    sideDrawerContainer.userAuthStatus = uiStateContext.userAuthStatus;
    
    return (props.children)(sideDrawerContainer);
}

export default MenuSideDrawerContainer;