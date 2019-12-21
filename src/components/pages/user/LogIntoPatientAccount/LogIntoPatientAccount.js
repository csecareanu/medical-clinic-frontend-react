// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import 
    LogIntoPatientAccountView, 
    { LogIntoPatientAccountFormType } 
    from './LogIntoPatientAccountView';
import LogIntoPatientAccountContainer from './LogIntoPatientAccountContainer';

type Props = {
    history: RouterHistory
}

const LogIntoPatientAccount = (props: Props) => {
    //TODO log all user actions in order to reproduce all his/her steps at debug time

    // keep the value of the props.history inside closure
    const history = props.history;

    return (
        <LogIntoPatientAccountContainer>
            {
                (containerData) => (
                    <LogIntoPatientAccountView
                        formType={LogIntoPatientAccountFormType.FIND_BY_BIRTHDAY}
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
            }
        </LogIntoPatientAccountContainer>
    );
}


export default withRouter(LogIntoPatientAccount);