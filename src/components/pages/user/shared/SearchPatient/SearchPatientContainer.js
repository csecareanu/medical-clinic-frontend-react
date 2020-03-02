// @flow

import * as React from 'react';

import { SearchPatientFormType } from './SearchPatient';

/*
export type ChoosePatientFormInfo = {
    patientList: void[]
}
*/

export type ContainerData = {
    onChangeSearchPatientForm: 
            (newFormType:  $Values<typeof SearchPatientFormType> ) => void,
    displayedForm: $Values<typeof SearchPatientFormType>

   /* choosePatientFormInfo: ChoosePatientFormInfo */
}

type Props = {
    children: (containerData: ContainerData) => React.Node
}

type State = {
    displayedForm: $Values<typeof SearchPatientFormType>
}

class SearchPatientContainer extends React.Component<Props, State> {

    containerData: ContainerData;
    state: State;

    constructor() {
        super();

        this.state = {
            displayedForm: SearchPatientFormType.SEARCH_BY_BIRTHDAY
        }

        this.containerData = {
            displayedForm: this.state.displayedForm,
            onChangeSearchPatientForm: this.onChangeSearchPatientForm
        }
    }

    onChangeSearchPatientForm = (newFormType: $Values<typeof SearchPatientFormType>) => {
        this.setState({
            displayedForm: newFormType
        })
    }

    render() {
        this.containerData.displayedForm = this.state.displayedForm;
        return this.props.children(this.containerData);
    }
}

export default SearchPatientContainer;