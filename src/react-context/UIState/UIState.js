// @flow
import * as React from 'react';

import UIStateContext from './UIState-context';
import { UserAuthType } from '../../shared/UserAuthType';


type Props = {
  children?: React.Node
};

type State = {
  userAuthenticationStatus: number | Symbol,

  isUserConnectedToAPatientAccount: boolean,

  displayUserAuthenticateModal: boolean,
  navigateToURIOnCancelAuth: string | null,
  navigateToURIOnSuccessfullyAuth: string | null,

  displayLogoutComponent: boolean,

  displayMenuSideDrawerComponent: boolean
};

/**
 * Component used to share global user interface state.
 * It allows UI components to communicate between them.
 * It does not keep any kind of data retrieved from the backend, only UI state.
 * 
 * For detailed information about context variables provided @see UIState-context.js
 * 
 * @param props.children - The JSX content which will be rendered and which will have access
 * to this context.
 */
class UIState extends React.Component<Props, State> {

    state = {
        userAuthenticationStatus: UserAuthType.UNAUTHENTICATED,

        isUserConnectedToAPatientAccount: false,

        displayUserAuthenticateModal: false,
        navigateToURIOnCancelAuth: null,
        navigateToURIOnSuccessfullyAuth: null,

        displayLogoutComponent: false,

        displayMenuSideDrawerComponent: false
    }

    render () {
        return (
            <UIStateContext.Provider
                value={{
                    // variables
                    userAuthenticationStatus: this.state.userAuthenticationStatus,
                    isUserConnectedToAPatientAccount: this.state.isUserConnectedToAPatientAccount,
                    displayUserAuthenticateModal: this.state.displayUserAuthenticateModal,
                    navigateToURIOnCancelAuth: this.state.navigateToURIOnCancelAuth,
                    navigateToURIOnSuccessfullyAuth: this.state.navigateToURIOnSuccessfullyAuth,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    displayMenuSideDrawerComponent: this.state.displayMenuSideDrawerComponent,
                    // methods
                    setUserAuthenticationStatus: (userAuthenticationType: number) => { 
                        this.setState({userAuthenticationStatus: userAuthenticationType}) 
                    },
                    setUserConnectedToPatientAccount: (isConnected: boolean) => {
                        this.setState({isUserConnectedToAPatientAccount: isConnected})
                    },
                    setDisplayUserAuthenticateModal: (show: boolean) => {
                        this.setState({displayUserAuthenticateModal: show})
                    },
                    setNavigateToURIOnCancelAuth: (uri: string | null) => {
                        this.setState({navigateToURIOnCancelAuth: uri})
                    },
                    setNavigateToURIOnSuccessfullyAuth: (uri: string | null) => {
                        this.setState({navigateToURIOnSuccessfullyAuth: uri})
                    },
                    setDisplayLogoutComponent: (show: boolean) => {
                        this.setState({displayLogoutComponent: show})
                    },
                    setDisplayMenuSideDrawerComponent: (show: boolean) => {
                        this.setState({displayMenuSideDrawerComponent: show})
                    }
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;