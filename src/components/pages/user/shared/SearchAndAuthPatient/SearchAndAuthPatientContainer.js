// @flow

import * as React from 'react';

import UIStateContext from '../../../../../react-context/UIState/UIState-context';

export type ContainerData = {
    onAuthenticatePatient: (/* patientId */) => void
}

type Props = {
    onPatientAuthenticated: () => void,
    children: (containerData: ContainerData) => React.Node
}


class SearchAndAuthPatientContainer extends React.Component<Props, null> {
    containerData: ContainerData;

    static contextType = UIStateContext;

    constructor() {
        super();

        this.containerData = {
            onAuthenticatePatient: this.onAuthenticatePatient
        }
    }

    onAuthenticatePatient = (/* patientId */) => {
        const uiStateContext = this.context;
        uiStateContext.setUserConnectedToPatientAccount(true);
        this.props.onPatientAuthenticated();
    }

    render() {
        return this.props.children(this.containerData);
    }
}

export default SearchAndAuthPatientContainer;