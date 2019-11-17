// @flow
import * as React from 'react';

import UIStateContext from './UIState-context';
import { UserAuthStatus } from '../common/UserAuthStatus';


type Props = {
  children?: React.Node
};

type State = {
  userAuthStatus: number,
  loggedIntoPatientAccount: boolean,
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
        userAuthStatus: UserAuthStatus.UNAUTHENTICATED,
        loggedIntoPatientAccount: false,
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
                    loggedIntoPatientAccount: this.state.loggedIntoPatientAccount,
                    displayLoginComponent: this.state.displayLoginComponent,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    displayMenuSideDrawerComponent: this.state.displayMenuSideDrawerComponent,
                    // methods
                    setUserAuthenticationStatus: (userAuthenticationType: number) => { 
                        this.setState({userAuthStatus: userAuthenticationType}) 
                    },
                    setLoggedIntoPatientAccount: (isLoggedIn: boolean) => {
                        this.setState({loggedIntoPatientAccount: isLoggedIn})
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