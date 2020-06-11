// @flow

import * as React from 'react';

import UIStateContext from '../../../react-context/UIState/UIState-context';
import {UserAuthType} from '../../../shared/UserAuthType';
import {LanguageType} from '../../../shared/LanguageType';

const containerData = {
    _uiStateContext: (null: null | UIStateContext),
    userAuthenticationStatus: (UserAuthType.UNAUTHENTICATED: $Values<typeof UserAuthType>),
    
    onChangeLang: (lang: $Values<typeof LanguageType>) => {
        if(containerData._uiStateContext == null) {
            console.log("MainLayoutContainer. onChangeLang. uiStateContext not set");
            return;
        }        
        containerData._uiStateContext.setLanguage(lang);
    },

    onOpenMenuSideDrawer: () : void => {
        if(containerData._uiStateContext == null) {
            console.log("MainLayoutContainer. onOpenMenuSideDrawer. uiStateContext not set");
            return;
        }        
        containerData._uiStateContext.setDisplayMenuSideDrawerModal(true);
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}

const MainLayoutContainer = (props: Props) => {
    const uiStateContext = React.useContext(UIStateContext);
    containerData._uiStateContext = uiStateContext;
    containerData.userAuthenticationStatus = uiStateContext.userAuthenticationStatus;

    return (props.children)(containerData);
}

export default MainLayoutContainer;