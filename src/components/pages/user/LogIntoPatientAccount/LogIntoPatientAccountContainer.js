// @flow

import * as React from 'react';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { SearchPatientFormType } from './SearchPatientView';
import type { RouterHistory } from 'react-router';

const containerData = {
    _uiStateContext: (null: null | UIStateContext),

    _state: {
        searchPatientForm: {
            isFormActive: true,
            currentSearchType: SearchPatientFormType.SEARCH_BY_FIRST_NAME
        },
        choosePatientForm: {
            isFormActive: false,
            patientList: []
        },
        createPatientAccountForm: {
            isFormActive: false
        }
    },
    getSearchPatientFormInfo() { 
        return containerData._state.searchPatientForm;
    },
    getChoosePatientFormInfo() {
        return containerData._state.choosePatientForm;
    },
    getCreatePatientAccountFormInfo() {
        return containerData._state.createPatientAccountForm;
    },

    onAuthenticate: (history: RouterHistory, userId: string) : void => {

        if(containerData._uiStateContext == null) {
            console.log("LogIntoPatientAccountContainer. onAuthenticate. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;

        uiStateContext.setUserConnectedToPatientAccount(true);
    },

    onCreateAccount: (history: RouterHistory /*, accountInfo*/) : void => {
        if(containerData._uiStateContext == null) {
            console.log("LogIntoPatientAccountContainer. onCreateAccount. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;

        uiStateContext.setUserConnectedToPatientAccount(true);
    },

    onCancel: (history: RouterHistory) : void => {
        /*
        if(containerData._uiStateContext == null) {
            console.log("LogIntoPatientAccountContainer. onCancel. uiStateContext not set");
            return;
        }
        const uiStateContext = containerData._uiStateContext;
        */
    }
}

type Props = {
    children: (containerData: typeof containerData) => React.Node
}
export default (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    containerData._uiStateContext = uiStateContext;

    return (props.children)(containerData);
}