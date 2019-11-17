import { useContext } from 'react';

import UIStateContext from '../../UIState/UIState-context';
import { UserAuthStatus } from '../../common/UserAuthStatus';

const layoutContainer = {
    uiStateContext: null,

    userAuthStatus: 0,
    displayMenuSideDrawerComponent: false,
    displayLoginComponent: false,
    displayLogoutComponent: false,
    onCloseMenuSideDrawer: function () {
        this.uiStateContext.setDisplayMeuSideDrawerComponent(false);
    }
}

const MainLayoutContainer = (props) => {
    const uiStateContext = useContext(UIStateContext);
    layoutContainer.uiStateContext = uiStateContext;

    layoutContainer.userAuthStatus = uiStateContext.userAuthStatus;
    layoutContainer.displayMenuSideDrawerComponent = uiStateContext.displayMenuSideDrawerComponent;
    layoutContainer.displayLoginComponent = uiStateContext.displayLoginComponent;
    layoutContainer.displayLogoutComponent = uiStateContext.displayLogoutComponent;


    return (props.children)(layoutContainer);
}

export default MainLayoutContainer;