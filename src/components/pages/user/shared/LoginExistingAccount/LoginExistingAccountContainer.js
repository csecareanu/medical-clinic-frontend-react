// @flow

import * as React from 'react';
import type { RouterHistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import UIStateContext from '../../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../../shared/UserAuthType';

export type ContainerData = {
    onAuthenticate: (phoneNo: string, password: string) => void
}

type Props = {
    navigateToURIOnSuccessfullyAuth: string,
    onLoginUserPending: () => void,
    onCancelLoginUser: () => void,
    onUserAuthenticated: () => void,
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}

class LoginExistingAccountContainer extends React.Component<Props, void> {

    containerData: ContainerData;

    static contextType = UIStateContext;

    constructor () {
        super();

        this.containerData = {
            onAuthenticate: this.onAuthenticate
        }
    }

    onAuthenticate = (phoneNo: string, password: string) : void => {
        const uiStateContext = this.context;

        this.props.onLoginUserPending();

        let newAuthStatus = UserAuthType.UNAUTHENTICATED;

        if(phoneNo === "c" && password === "c") {
            this.props.onCancelLoginUser();
            return;
        }

        if(phoneNo === "m" && password === "m") {
            newAuthStatus = UserAuthType.DOCTOR;
        }
        else if (phoneNo === "a" && password === "a") {
            newAuthStatus = UserAuthType.SITE_ADMIN;
        }
        else {
            newAuthStatus = UserAuthType.PATIENT;
        }

        uiStateContext.setUserAuthenticationStatus(newAuthStatus);

        if (this.props.navigateToURIOnSuccessfullyAuth) {
            this.props.history.push({
                pathname: this.props.navigateToURIOnSuccessfullyAuth
            });
        }

        this.props.onUserAuthenticated();
    }

    render() {
        return (this.props.children)(this.containerData);
    }
}

export default withRouter(LoginExistingAccountContainer);