import React from 'react';

import UIStateContext, { UserAuthStatus } from './UIState-context';

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
class UIState extends React.Component {

    state = {
        userAuthStatus: UserAuthStatus.UNAUTHENTICATED,
        loggedIntoPatientAccount: false,
        displayLoginComponent: false,
        displayLogoutComponent: false,
        displaySideDrawerComponent: false
    }

    setUserAuthenticationStatus = (userAuthenticationType) => {
        this.setState({userAuthStatus: userAuthenticationType});
    }

    setLoggedIntoPatientAccount = (isLoggedIn) => {
        this.setState({loggedIntoPatientAccount: isLoggedIn});
    }

    setDisplayLoginComponent = (show) => {
        this.setState({displayLoginComponent: show});
    }

    setDisplayLogoutComponent = (show) => {
        this.setState({displayLogoutComponent: show});
    }

    setDisplaySideDrawerComponent = (show) => {
        this.setState({displaySideDrawerComponent: show});
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
                    displaySideDrawerComponent: this.state.displaySideDrawerComponent,
                    // methods
                    setUserAuthenticationStatus: this.setUserAuthenticationStatus,
                    setLoggedIntoPatientAccount: this.setLoggedIntoPatientAccount,
                    setDisplayLoginComponent: this.setDisplayLoginComponent,
                    setDisplayLogoutComponent: this.setDisplayLogoutComponent,
                    setDisplaySideDrawerComponent: this.setDisplaySideDrawerComponent
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;