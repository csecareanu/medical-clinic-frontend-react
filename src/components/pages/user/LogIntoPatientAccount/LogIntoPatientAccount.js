// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';
import SearchPatientView from './SearchPatientView';
import CreatePatientAccountView from './CreatePatientAccountView';
import LogIntoPatientAccountContainer from './LogIntoPatientAccountContainer';

type Props = {
    history: RouterHistory
}

const LogIntoPatientAccount = (props: Props) => {
    //TODO log all user actions in order to reproduce all his/her steps at debug time

    // keep the value of the props.history inside closure
    // const history = props.history;

    return (
        <LogIntoPatientAccountContainer>
            {
                (containerData) => {
                    const searchPatientFormInfo = containerData.getSearchPatientFormInfo();
                    const createPatientAccountFormInfo = 
                            containerData.getCreatePatientAccountFormInfo();
                    return (
                        <React.Fragment>
                            {searchPatientFormInfo.isFormActive
                                ? (
                                    <SearchPatientView
                                        formType={searchPatientFormInfo.currentSearchType}
                                        onChangeSearchPatientFilter={
                                                containerData.onChangeSearchPatientFilter
                                            }
                                        onShowCreateAccountPage={
                                            containerData.onShowCreateAccountPage}
                                    />
                                ) : null 
                            }
                            {createPatientAccountFormInfo.isFormActive
                                ? (
                                    <CreatePatientAccountView 
                                        onShowSearchAccountPage={
                                            containerData.onShowSearchAccountPage}
                                    />
                                ) : null
                            }
                        </React.Fragment>
                    )
                }
            }
        </LogIntoPatientAccountContainer>
    );
}


export default withRouter(LogIntoPatientAccount);