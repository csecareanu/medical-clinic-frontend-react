// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';

type Props = {
    history: RouterHistory
}

/**
 * Displays a login window lying over the current displayed web page which becomes semi-transparent
 * This class uses settings parameters from the UIStateContext react context:
 *      displayLoginComponent - shows on the screen only if someone has set it
 *      navigateToURIOnCancelLogin - if set will navigate this URI when the user cancels the login
            process.
        navigateToURIOnSuccessfullyLogin - if set will navigate tho this URI when the user 
            authenticates successfully
 */
const UserLogin = (props: Props) => {
    //TODO log all user actions in order to reproduce all his/her steps at debug time

    // keep the value of the props.history inside closure
    const history = props.history;
    return (
        <UserLoginContainer>
            {
                (containerData) => (
                    containerData.displayLoginComponent
                        ? (
                            <UserLoginView
                                onAuthenticate={(phoneNo, password) => {
                                    containerData.onAuthenticate(history, phoneNo, password)
                                }}
                                onCreateAccount={(/*accountInfo*/) => {
                                    containerData.onCreateAccount(history /*, accountInfo*/);
                                }}
                                onCancel={() => {
                                    containerData.onCancel(history);
                                }}
                            />
                        )
                        : null
                )
            }
        </UserLoginContainer>
    );
}

export default withRouter(UserLogin);