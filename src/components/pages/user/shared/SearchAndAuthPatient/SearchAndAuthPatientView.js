// @flow

import * as React from 'react';

import SearchPatient from '../SearchPatient/SearchPatient';

type Props = {
    renderHeaderWhenSearchActionNotInPending?: () => React.Node,
    renderFooterWhenSearchActionNotInPending?: () => React.Node,
    onAuthenticatePatient: (/*patient info*/) => void
}

const SearchAndAuthPatientView = (props: Props) => {

    return (
        <React.Fragment>
            <SearchPatient
              renderHeaderWhenSearchActionNotInPending={
                    props.renderHeaderWhenSearchActionNotInPending}
                renderFooterWhenSearchActionNotInPending={
                    props.renderFooterWhenSearchActionNotInPending
                }
                onPatientFound={props.onAuthenticatePatient}
            /> 
        </React.Fragment>
    )
}

export default SearchAndAuthPatientView;