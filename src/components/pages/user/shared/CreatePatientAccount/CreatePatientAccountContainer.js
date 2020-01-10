import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import { type CreateNewAccountState } from './CreatePatientAccount';

export type ContainerData = {
    authenticationState: AuthenticationState,
    onCreateAccount: () => void
}


type Props = {
    navigateToURIOnSuccessfullyAuth: string,
    onCreateAccountPending: () => void,
    onCancelCreateAccount: () => void,
    onAccountCreated: () => void,
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}

class CreatePatientAccountContainer extends React.Component<Props, CreateNewAccountState> {
    containerData: ContainerData;

    constructor () {
        super();

        this.state = {
            waitingUserToEnterData: true,
            checkingSMSCode: false,
            isSMSCodeValid: false
        }

        this.containerData = {
            authenticationState: this.state,
            onCreateAccount: this.onCreateAccount
        }
    }

    onCreateAccount = (/*, accountInfo*/) : void => {
        //const uiStateContext = this.context;

        const state = {
            waitingUserToEnterData: false,
            checkingSMSCode: true,
            isSMSCodeValid: false
        }

        this.setState(state);

        /*
        uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);
        uiStateContext.setDisplayUserAuthenticateModal(false);

        if (uiStateContext.navigateToURIOnSuccessfullyAuth) {
            this.props.history.push({
                pathname: uiStateContext.navigateToURIOnSuccessfullyAuth
            });
            uiStateContext.setNavigateToURIOnSuccessfullyAuth(null);
        }
        */
    }

    render() {
        // Updating the container data parameter with the latest values
        this.containerData.authenticationState = this.state;
        return (this.props.children)(this.containerData);
    }
}

export default withRouter(CreatePatientAccountContainer);