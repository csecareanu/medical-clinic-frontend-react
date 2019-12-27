// @flow

import React from 'react';
import type { RouterHistory } from 'react-router';
import SearchPatientView from './SearchPatientView';
import CreatePatientAccountView from './CreatePatientAccountView';
import LogIntoPatientAccountContainer from './LogIntoPatientAccountContainer';
import { 
    type ContainerData,
    type SearchPatientFormInfo,
    type CreatePatientAccountFormInfo,
    /*type ChoosePatientFormInfo*/
    } from './LogIntoPatientAccountContainer';

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
                (containerData: ContainerData) => {
                    const searchPatientFormInfo: SearchPatientFormInfo = 
                            containerData.getSearchPatientFormInfo();
                    const createPatientAccountFormInfo: CreatePatientAccountFormInfo = 
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
                                        onShowSearchAccountPage=
                                            {containerData.onShowSearchAccountPage}
                                        onCreatePatientAccount= 
                                            {containerData.onCreatePatientAccount}
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


export default LogIntoPatientAccount;