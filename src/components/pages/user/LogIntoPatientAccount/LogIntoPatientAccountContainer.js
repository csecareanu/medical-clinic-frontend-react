// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { SearchPatientFilterType } from './SearchPatientView';
import { PatientLinkLocationName } from '../../../../shared/LinkLocationNames';

export type SearchPatientFormInfo = {
    isFormActive: boolean,
    currentSearchType: number //TODO SearchPatientFilterType
}

export type CreatePatientAccountFormInfo = {
    isFormActive: boolean
}

export type ChoosePatientFormInfo = {
        isFormActive: boolean,
        patientList: void[]
    }

export type ContainerData = {
    getSearchPatientFormInfo: () => SearchPatientFormInfo,
    getCreatePatientAccountFormInfo: () => CreatePatientAccountFormInfo,
    getChoosePatientFormInfo: () => ChoosePatientFormInfo,
    onChangeSearchPatientFilter: 
            (newFilterType: number /*TODO typeof SearchPatientFilterType*/) => void,
    onShowCreateAccountPage: () => void,
    onShowSearchAccountPage: () => void,
    onCreatePatientAccount: () => void
}

type Props = {
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}

type State = {
    searchPatientFormInfo: SearchPatientFormInfo,
    choosePatientFormInfo: ChoosePatientFormInfo,
    createPatientAccountFormInfo: CreatePatientAccountFormInfo
}

class LogIntoPatientAccountContainer extends React.Component<Props, State>
{
    containerData: ContainerData;

    constructor () {
        super();

        this.state = {
            searchPatientFormInfo: {
                isFormActive: true,
                currentSearchType: SearchPatientFilterType.BY_FIRST_NAME
            },
            choosePatientFormInfo: {
                isFormActive: false,
                patientList: []
            },
            createPatientAccountFormInfo: {
                isFormActive: false
            }
        }

        this.containerData = {
            getSearchPatientFormInfo: this.getSearchPatientFormInfo,
            getCreatePatientAccountFormInfo: this.getCreatePatientAccountFormInfo,
            getChoosePatientFormInfo: this.getChoosePatientFormInfo,

            onChangeSearchPatientFilter: this.onChangeSearchPatientFilter,
            onShowCreateAccountPage: this.onShowCreateAccountPage,
            onShowSearchAccountPage: this.onShowSearchAccountPage,

            onCreatePatientAccount: this.onCreatePatientAccount
        }
    }

    static contextType = UIStateContext;
    

    onChangeSearchPatientFilter = 
            (newFilterType: number /*TODO typeof SearchPatientFilterType*/) => {
        
        let searchPatientFormInfo = {
            ...this.state.searchPatientFormInfo,
            currentSearchType: newFilterType
        }
        this.setState({searchPatientFormInfo: searchPatientFormInfo});
    }

    onShowCreateAccountPage = () => {
        let searchPatientFormInfo = {
                ...this.state.searchPatientFormInfo,
                isFormActive: false
            };
        let choosePatientFormInfo = {
                ...this.state.choosePatientFormInfo,
                isFormActive: false
            };
        let createPatientAccountFormInfo = {
                ...this.state.createPatientAccountFormInfo,
                isFormActive: true
            };
        this.setState({
                searchPatientFormInfo: searchPatientFormInfo,
                choosePatientFormInfo: choosePatientFormInfo,
                createPatientAccountFormInfo: createPatientAccountFormInfo
                });
    }
    onShowSearchAccountPage = () => {
        let searchPatientFormInfo = {
                ...this.state.searchPatientFormInfo,
                isFormActive: true
            };
        let choosePatientFormInfo = {
                ...this.state.choosePatientFormInfo,
                isFormActive: false
            };
        let createPatientAccountFormInfo = {
                ...this.state.createPatientAccountFormInfo,
                isFormActive: false
            };
        this.setState({
                searchPatientFormInfo: searchPatientFormInfo,
                choosePatientFormInfo: choosePatientFormInfo,
                createPatientAccountFormInfo: createPatientAccountFormInfo
                });
    }

    getSearchPatientFormInfo = () => {
        return this.state.searchPatientFormInfo;
    }

    getCreatePatientAccountFormInfo = () => {
        return this.state.createPatientAccountFormInfo;
    }

    getChoosePatientFormInfo() {
        return this.state.choosePatientFormInfo;
    }

    /*??????*/
    onAuthenticate = (userId: string) : void => {
        const uiStateContext = this.context;

        uiStateContext.setUserConnectedToPatientAccount(true);
    }

    onCreatePatientAccount = (/*, accountInfo*/) : void => {
        const uiStateContext = this.context;
        uiStateContext.setUserConnectedToPatientAccount(true);
        this.props.history.push({pathname: PatientLinkLocationName.MY_ACCOUNT});
    }

    /*??????*/
    onCancel = () : void => {
        /*
        if(containerData._uiStateContext == null) {
            console.log("LogIntoPatientAccountContainer. onCancel. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;
        */
    }

    render() {
        return (this.props.children)(this.containerData);
    }
}

export default withRouter(LogIntoPatientAccountContainer);