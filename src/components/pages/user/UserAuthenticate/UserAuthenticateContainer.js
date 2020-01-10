// @flow

import * as React from 'react';

import UIStateContext from '../../../../react-context/UIState/UIState-context';

type ContainerData = {
    displayUserAuthenticateModal: boolean,
    navigateToURIOnSuccessfullyAuth: string,
    navigateToURIOnCancelAuth: string,
    createAccountPending: boolean,
    loginUserPending: boolean,
    onCreateAccountPending: () => void,
    onCancelCreateAccount: () => void,
    onLoginUserPending: () => void,
    onCancelLoginUser: () => void,
    onUserAuthenticated: () => void,
    onCancelAuthenticateProcess: () => void
}

type Props = {
    children: (containerData: ContainerData) => React.Node,
}

type State = {
    createAccountPending: boolean,
    loginUserPending: boolean
}

class UserAuthenticateContainer extends React.Component<Props, State> {
    containerData: ContainerData;
    state: State;

    static contextType = UIStateContext;

    constructor(props: Props, context: UIStateContext) {
        super(props, context);

        this.state = {
            // The user has chosen to use the 'create new account' form
            createAccountPending: false,
            // The user has chosen to use the 'login existing user' form
            loginUserPending: false
        }

        //TODO change navigateToURIOnSuccessfullyAuth -> navigateToURIOnSuccessfullyAuth and
        // navigateToURIOnCancelAuth -> navigateToURIOnCancelAuth
        this.containerData = {
            displayUserAuthenticateModal: context.displayUserAuthenticateModal,
            navigateToURIOnSuccessfullyAuth: context.navigateToURIOnSuccessfullyAuth,
            navigateToURIOnCancelAuth: context.navigateToURIOnCancelAuth,

            createAccountPending: this.state.createAccountPending,
            loginUserPending: this.state.loginUserPending,
            
            onCreateAccountPending: this.onCreateAccountPending,
            onLoginUserPending: this.onLoginUserPending,
            onCancelCreateAccount: this.onCancelCreateAccount,
            onCancelLoginUser: this.onCancelLoginUser,
            onUserAuthenticated: this.onUserAuthenticated,
            onCancelAuthenticateProcess: this.onCancelAuthenticateProcess  
        }
    }

    updateStateCreateAccountPending = () => {
        this.setState({
            createAccountPending: true,
            loginUserPending: false
        })
    }

    updateStateResetAuthPending = () => {
        this.setState({
            createAccountPending: false,
            loginUserPending: false
        })
    }

    updateStateLoginUserPending = () => {
        this.setState({
            createAccountPending: false,
            loginUserPending: true
        })
    }

    // The user chose to use the 'create new account' form
    onCreateAccountPending = () => {
        this.updateStateCreateAccountPending();
    }

    // The user has left the 'create new account' form but 
    // he/she didn't leave the authentication form
    onCancelCreateAccount = () => {
        this.updateStateResetAuthPending();
    }

    // A new account has been created
    onAccountCreated = () => {
        this.updateStateResetAuthPending();
        this.context.setDisplayUserAuthenticateModal(false);
    }

    // The user chose to use the 'login existing user' form
    onLoginUserPending = () => {
        this.updateStateLoginUserPending();        
    }

    // The user has left the 'login existing user' form but
    // he/she didn't leave the authentication form
    onCancelLoginUser = () => {
        this.updateStateResetAuthPending();
    }

    // The user has authenticated successfully
    onUserAuthenticated = () => {
        this.closeLoginComponent();
    }

    // The user wants to cancel the entire authentication process
    onCancelAuthenticateProcess = () => {
        this.closeLoginComponent();
    }

    closeLoginComponent = () => {
        this.context.setNavigateToURIOnCancelAuth(null);
        this.context.setNavigateToURIOnSuccessfullyAuth(null);
        this.context.setDisplayUserAuthenticateModal(false);
    }

    render() {
        const uiStateContext = this.context;

        //updating the container data parameter with the latest values
        this.containerData.displayUserAuthenticateModal = 
                    uiStateContext.displayUserAuthenticateModal;
        this.containerData.navigateToURIOnSuccessfullyAuth = 
                uiStateContext.navigateToURIOnSuccessfullyAuth;
        this.containerData.navigateToURIOnCancelAuth = 
                uiStateContext.navigateToURIOnCancelAuth;

        this.containerData.createAccountPending = this.state.createAccountPending;
        this.containerData.loginUserPending = this.state.loginUserPending;

        return (this.props.children)(this.containerData);
    }
}

export default UserAuthenticateContainer;