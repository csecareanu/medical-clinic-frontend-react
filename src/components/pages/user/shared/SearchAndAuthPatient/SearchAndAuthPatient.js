// @flow

import * as React from 'react';

import SearchAndAuthPatientContainer, {type ContainerData} from './SearchAndAuthPatientContainer';
import SearchAndAuthPatientView from './SearchAndAuthPatientView';

type Props = {
    renderHeaderWhenSearchActionNotInPending?: () => React.Node,
    renderFooterWhenSearchActionNotInPending?: () => React.Node,
    onPatientAuthenticated: () => void
}

const SearchAndAuthPatient = (props: Props) => (
    <SearchAndAuthPatientContainer
        onPatientAuthenticated={props.onPatientAuthenticated}
    >
    {
        (logPatientData: ContainerData) => (
            <SearchAndAuthPatientView
                renderHeaderWhenSearchActionNotInPending={
                    props.renderHeaderWhenSearchActionNotInPending}
                renderFooterWhenSearchActionNotInPending={
                    props.renderFooterWhenSearchActionNotInPending
                }
                onAuthenticatePatient={logPatientData.onAuthenticatePatient}
            />
        )
    }
    </SearchAndAuthPatientContainer>
);

export default SearchAndAuthPatient;