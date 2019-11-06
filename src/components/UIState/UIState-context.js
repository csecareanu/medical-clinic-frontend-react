import React from 'react';

/**
 * Context provided by the UIState component
 * @see UIState.js
 */
const UIStateContext = React.createContext({
    // The following members and their values are only used for IDE IntelliSense and
    // to have an idea about how the interface looks like. 
    // The program compiles and works also without them.
    userAuthenticated: false,
    displayLoginComponent: false,
    displayLogoutComponent: false,
    onDisplayLoginComponent: (show) => {},
    onDisplayLogoutComponent: (show) => {},
    onUserAuthenticated: (isAuthenticated) => {}
});

export default UIStateContext;