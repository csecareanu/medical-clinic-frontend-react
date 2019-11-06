import React from 'react';

/**
 * Context provided by the UIState component
 * @see UIState.js
 */
const UIStateContext = React.createContext({
    userAuthenticated: false,
    displayLoginComponent: false,
    displayLogoutComponent: false,
    onDisplayLoginComponent: (show) => {},
    onDisplayLogoutComponent: (show) => {},
    onUserAuthenticated: (isAuthenticated) => {}
});

export default UIStateContext;