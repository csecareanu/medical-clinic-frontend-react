// @flow

import * as React from 'react';

import SearchPatientContainer, {type ContainerData} from './SearchPatientContainer';
import SearchPatientView from './SearchPatientView';

const hasSymbol = typeof Symbol === 'function';


export const SearchPatientFormType = {
    SEARCH_BY_BIRTHDAY: hasSymbol
        ? Symbol("SEARCH_BY_BIRTHDAY")
        :1,
    SEARCH_BY_NAME: hasSymbol
        ? Symbol("SEARCH_BY_NAME")
        :2,
    SEARCH_BY_PHONE: hasSymbol
        ? Symbol("SEARCH_BY_PHONE")
        :3
}

type Props = {
    renderHeaderWhenSearchActionNotInPending?: () => React.Node,
    renderFooterWhenSearchActionNotInPending?: () => React.Node,
    onPatientFound: (/*patient id*/) => void
}

const SearchPatient = (props: Props) => (
    <SearchPatientContainer
        onPatientFound={props.onPatientFound}
    >
    {
        (searchPatientData: ContainerData) => (
            <SearchPatientView 
                displayedForm={searchPatientData.displayedForm}
                renderHeaderWhenSearchActionNotInPending={
                        props.renderHeaderWhenSearchActionNotInPending}
                    renderFooterWhenSearchActionNotInPending={
                        props.renderFooterWhenSearchActionNotInPending
                    }
                onChangeSearchPatientForm={searchPatientData.onChangeSearchPatientForm}
                onSearchPatientByBirthday={ () => { console.log("onSearchPatientByBirthday"); }}
                onSearchPatientByName={ () => { console.log("onSearchPatientByName"); }}
                onSearchPatientByPhoneNo={ (phoneNo: string) => { console.log("onSearchPatientByPhoneNo:" + phoneNo);} }
            />
        )
    }
    </SearchPatientContainer>
);

export default SearchPatient;