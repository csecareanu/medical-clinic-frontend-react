// @flow

import * as React from 'react';

import UIStateContext from '../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../common/UserAuthType';

const containerData = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    onOpenMenuSideDrawer: () : void => {
        if(containerData.uiStateContext == null) {
            console.log("MainLayoutContainer. onOpenMenuSideDrawer. uiStateContext not set");
            return;
        }        
        containerData.uiStateContext.setDisplayMenuSideDrawerComponent(true);
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}

const MainLayoutContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    containerData.uiStateContext = uiStateContext;
    containerData.userAuthStatus = uiStateContext.userAuthStatus;

    return (props.children)(containerData);
}

export default MainLayoutContainer;