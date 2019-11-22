// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';

type Props = {
    history: RouterHistory
}

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
                                    containerData.onAuthenticate(phoneNo, password)
                                }}
                                onCreateAccount={(/*accountInfo*/) => {
                                    containerData.onCreateAccount(/*accountInfo*/);
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