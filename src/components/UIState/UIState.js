import React from 'react';

import UIStateContext, { UserAuthenticationType } from './UIState-context';

/**
 * Component used to share global user interface state.
 * It allows UI components to communicate between them.
 * It does not keep any kind of data retrieved from the backend, only UI state.
 * 
 * @param props.children - The JSX content which will be rendered and which will have access
 * to this context.
 */
class UIState extends React.Component {
    /**
     * For detailed information about this context state @see UIState-context.js
     */
    state = {
        userAuthenticated: false,
        userAuthenticationType: UserAuthenticationType.NONE,
        loggedIntoPatientAccount: false,
        displayLoginComponent: false,
        displayLogoutComponent: false
    }

    setUserAuthenticated = (isAuthenticated) => {
        this.setState({userAuthenticated: isAuthenticated});
    }

    setUserAuthenticationType = (userAuthenticationType) => {
        this.setState({userAuthenticationType: userAuthenticationType});
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

    render () {
        return (
            <UIStateContext.Provider
                value={{
                    // variables
                    userAuthenticated: this.state.userAuthenticated,
                    userAuthenticationType: this.state.userAuthenticationType,
                    loggedIntoPatientAccount: this.state.loggedIntoPatientAccount,
                    displayLoginComponent: this.state.displayLoginComponent,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    // methods
                    setUserAuthenticated: this.setUserAuthenticated,
                    setUserAuthenticationType: this.setUserAuthenticationType,
                    setLoggedIntoPatientAccount: this.setLoggedIntoPatientAccount,
                    setDisplayLoginComponent: this.setDisplayLoginComponent,
                    setDisplayLogoutComponent: this.setDisplayLogoutComponent
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;