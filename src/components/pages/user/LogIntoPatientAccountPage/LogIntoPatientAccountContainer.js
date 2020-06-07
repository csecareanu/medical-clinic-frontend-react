// @flow

import * as React from 'react';
import {withRouter} from 'react-router-dom';
import type {RouterHistory} from 'react-router';

import {LoginIntoAccountFormType} from './LogIntoPatientAccountPage';
import {PatientLinkLocationName} from '../../../../shared/LinkLocationNames';


export type ContainerData = {
    displayedForm: $Values<typeof LoginIntoAccountFormType>,
    onPatientAuthenticated: () => void,
    onChangeDisplayedForm: (newFormType: $Values<typeof LoginIntoAccountFormType>) => void
}

type Props = {
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}

type State = {
    displayedForm: $Values<typeof LoginIntoAccountFormType>
}

/**
 * 
 */
class LogIntoPatientAccountContainer extends React.Component<Props, State>
{
    containerData: ContainerData;
    state: State;

    constructor () {
        super();

        this.state = {
            displayedForm: LoginIntoAccountFormType.SEARCH_PATIENT_FORM
        }

        this.containerData = {
            displayedForm: this.state.displayedForm,
            onChangeDisplayedForm: this.onChangeDisplayedForm,
            onPatientAuthenticated: this.onPatientAuthenticated
        }
    }

    // Change the authentication method between 'login as an existing user' and 
    // 'login as a new created account'
    onChangeDisplayedForm = (newFormType: $Values<typeof LoginIntoAccountFormType>) => {
        this.setState({ 
            displayedForm: newFormType
        });
    }

    onPatientAuthenticated = (/*, accountInfo*/) : void => {
        this.props.history.push({pathname: PatientLinkLocationName.MY_ACCOUNT});
    }

    render() {
        // updating the containerData with the latest values
        this.containerData.displayedForm = this.state.displayedForm;
        return (this.props.children)(this.containerData);
    }
}

export default withRouter(LogIntoPatientAccountContainer);