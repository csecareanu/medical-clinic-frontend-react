import React from 'react';

import UIStateContext from './UIState-context';

/**
 * Component used to share global user interface state.
 * It allows UI components to communicate between them.
 * It does not keep any kind of data retrieved from the backend, just UI state.
 * 
 * @param props.children - The JSX content which will be rendered and which will have access
 * to this context.
 */
class UIState extends React.Component {
    state = {
        userAuthenticated: false,
        displayLoginComponent: false,
        displayLogoutComponent: false
    }

    setUserAuthenticated = (isAuthenticated) => {
        this.setState({userAuthenticated: isAuthenticated});
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
                    userAuthenticated: this.state.userAuthenticated,
                    displayLoginComponent: this.state.displayLoginComponent,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    setDisplayLoginComponent: this.setDisplayLoginComponent,
                    setDisplayLogoutComponent: this.setDisplayLogoutComponent,
                    setUserAuthenticated: this.setUserAuthenticated
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;