// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import UserLoginView from './UserLoginView';
import UserLoginContainer from './UserLoginContainer';
import UserLoggedInMsg from '../../common/UserLoggedInMsg/UserLoggedInMsg';
import { UserAuthType } from '../../../../common/UserAuthType';

type Props = {
    history: RouterHistory,
    navigateToOnSuccess?: string,
    navigateToOnCancel?: string
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
                                if (props.navigateToOnCancel) {
                                    props.history.push({pathname: props.navigateToOnCancel});
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