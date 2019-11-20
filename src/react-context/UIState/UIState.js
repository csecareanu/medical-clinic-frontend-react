// @flow
import * as React from 'react';

import UIStateContext from './UIState-context';
import { UserAuthType } from '../../common/UserAuthType';


type Props = {
  children?: React.Node
};

type State = {
  userAuthStatus: number | Symbol,
  isUserConnectedToAPatientAccount: boolean,
  displayLoginComponent: boolean,
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
        userAuthStatus: UserAuthType.UNAUTHENTICATED,
        isUserConnectedToAPatientAccount: false,
        displayLoginComponent: false,
        displayLogoutComponent: false,
        displayMenuSideDrawerComponent: false
    }

    render () {
        return (
            <UIStateContext.Provider
                value={{
                    // variables
                    userAuthStatus: this.state.userAuthStatus,
                    isUserConnectedToAPatientAccount: this.state.isUserConnectedToAPatientAccount,
                    displayLoginComponent: this.state.displayLoginComponent,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    displayMenuSideDrawerComponent: this.state.displayMenuSideDrawerComponent,
                    // methods
                    setUserAuthenticationStatus: (userAuthenticationType: number) => { 
                        this.setState({userAuthStatus: userAuthenticationType}) 
                    },
                    setUserConnectedToPatientAccount: (isConnected: boolean) => {
                        this.setState({isUserConnectedToAPatientAccount: isConnected})
                    },
                    setDisplayLoginComponent: (show: boolean) => {
                        this.setState({displayLoginComponent: show})
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