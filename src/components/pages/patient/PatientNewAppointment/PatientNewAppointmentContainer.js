// @flow

import * as React from 'react';

import { ClinicLinkLocationName } from '../../../../shared/LinkLocationNames';
import { UserAuthType } from '../../../../shared/UserAuthType';
import UIStateContext from '../../../../react-context/UIState/UIState-context';

const containerData = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol),

    askUserToLogon: (): void => {
        if(containerData.uiStateContext == null) {
            console.log("onCreateAccount. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData.uiStateContext;

        // Check if the variable is already set to true. Otherwise a new object
        // with value "true" will be set and the render method will be triggered
        // recursively
        if(uiStateContext.displayLoginComponent === false) {
            uiStateContext.setDisplayLoginComponent(true);
            uiStateContext.setNavigateToURIOnCancelLogin(ClinicLinkLocationName.ROOT);
        }
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}

const PatientNewAppointmentContainer = (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    containerData.uiStateContext = uiStateContext;
    containerData.userAuthStatus = uiStateContext.userAuthStatus;

    return (props.children)(containerData);
}

export default PatientNewAppointmentContainer;