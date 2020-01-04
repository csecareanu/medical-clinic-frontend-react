// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../shared/UserAuthType';
import { LoginStatus } from './UserLogin';
import { type AuthenticationState } from './UserLogin';


export type ContainerData = {
    displayLoginComponent: boolean,
    authenticationState: AuthenticationState,
    onAuthenticate: (phoneNo: string, password: string) => void,
    onCreateAccount: (/*, accountInfo*/) => void,
    onCreateAccountCheckSMSCode: (code: string) => void,
    onCancel: () => void
}

type Props = {
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}


class UserLoginContainer extends React.Component<Props, AuthenticationState> 
{
    containerData: ContainerData;
    state: AuthenticationState;

    constructor () {
        super();

        this.state = {
            loginStatus: LoginStatus.WaitingUserAction,

            loginStates: {
                waitingUserAction: {

                },

                loginExistingUser: {

                },

                createNewAccount: {
                    checkingSMSCode: false,
                    isSMSCodeValid: false
                }
            }
        }

        this.containerData = {
            displayLoginComponent: false,
            authenticationState: this.state,
            onAuthenticate: this.onAuthenticate,
            onCreateAccount: this.onCreateAccount,
            onCreateAccountCheckSMSCode: this.onCreateAccountCheckSMSCode,
            onCancel: this.onCancel
        }
    }

    static contextType = UIStateContext;

    onAuthenticate = (phoneNo: string, password: string) : void => {
        const uiStateContext = this.context;

        let newAuthStatus = UserAuthType.UNAUTHENTICATED;

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
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnSuccessfullyLogin) {
            this.props.history.push({
                pathname: uiStateContext.navigateToURIOnSuccessfullyLogin
            });
            uiStateContext.setNavigateToURIOnSuccessfullyLogin(null);
        }        
    }

    onCreateAccount = (/*, accountInfo*/) : void => {
        //const uiStateContext = this.context;

        const createNewAccount = {
            ...this.state.loginStates.createNewAccount,
            checkingSMSCode: true,
            isSMSCodeValid: false
        }

        const state = {
            ...this.state,
            loginStatus: LoginStatus.CreateNewAccount
        }

        state.loginStates.createNewAccount = createNewAccount;

        this.setState(state);

        /*
        uiStateContext.setUserAuthenticationStatus(UserAuthType.PATIENT);
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnSuccessfullyLogin) {
            this.props.history.push({
                pathname: uiStateContext.navigateToURIOnSuccessfullyLogin
            });
            uiStateContext.setNavigateToURIOnSuccessfullyLogin(null);
        }
        */
    }

    onCreateAccountCheckSMSCode = (code: string) : void => {

    }

    onCancel = () : void => {
        const state = {
            ...this.state,
            loginStatus: LoginStatus.WaitingUserAction
        }

        this.setState(state);        

        const uiStateContext = this.context;
        uiStateContext.setDisplayLoginComponent(false);

        if (uiStateContext.navigateToURIOnCancelLogin) {
            this.props.history.push({
                pathname: uiStateContext.navigateToURIOnCancelLogin
            });
            uiStateContext.setNavigateToURIOnCancelLogin(null);
        }        
    }

    render() {
        const uiStateContext = this.context;
        //updating the container data parameter with the latest values
        this.containerData.displayLoginComponent = uiStateContext.displayLoginComponent;
        this.containerData.authenticationState = this.state;

        return (this.props.children)(this.containerData);
    }
}

export default withRouter(UserLoginContainer);