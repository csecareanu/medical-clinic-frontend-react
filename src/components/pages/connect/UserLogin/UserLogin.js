// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import { UserAuthType } from '../../../../common/UserAuthType';
import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';
import UserLoggedInMsg from '../../common/UserLoggedInMsg/UserLoggedInMsg';

type Props = {
    history: RouterHistory,
    navigateToURIOnSuccess?: string,
    navigateToURIOnCancel?: string
}

const UserLogin = (props: Props) => {
    //TODO log all user actions in order to reproduce all his/her steps at debug time
    return (
        <UserLoginContainer>
            {
                (containerData) => (
                    containerData.userAuthStatus !== UserAuthType.UNAUTHENTICATED
                        ? <UserLoggedInMsg />
                        : (
                            <UserLoginView
                                onAuthenticate={(phoneNo, password) => {
                                    containerData.onAuthenticate(phoneNo, password)
                                }}
                                onCreateAccount={(/*accountInfo*/) => {
                                    containerData.onCreateAccount(/*accountInfo*/);
                                }}
                                onCancel={() => {
                                    containerData.onCancel();
                                    if (props.navigateToURIOnCancel) {
                                        props.history.push({pathname: props.navigateToURIOnCancel});
                                    }
                                }}
                            />
                        )
                )
            }
        </UserLoginContainer>
    );
}

export default withRouter(UserLogin);