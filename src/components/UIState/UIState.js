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

    onUserAuthenticated = (isAuthenticated) => {
        this.setState({userAuthenticated: isAuthenticated});
    }

    onDisplayLoginComponent = (show) => {
        this.setState({displayLoginComponent: show});
    }

    onDisplayLogoutComponent = (show) => {
        this.setState({onDisplayLogoutComponent: show});
    }    

    render () {
        return (
            <UIStateContext.Provider
                value={{
                    userAuthenticated: this.state.userAuthenticated,
                    displayLoginComponent: this.state.displayLoginComponent,
                    displayLogoutComponent: this.state.displayLogoutComponent,
                    onDisplayLoginComponent: this.onDisplayLoginComponent,
                    onDisplayLogoutComponent: this.onDisplayLogoutComponent,
                    onUserAuthenticated: this.onUserAuthenticated
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;