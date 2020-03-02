// @flow

import React from 'react';

import LogIntoPatientAccountContainer, { type ContainerData } 
        from './LogIntoPatientAccountContainer';
import LogIntoPatientAccountView from './LogIntoPatientAccountView';

const hasSymbol = typeof Symbol === 'function';

export const LoginIntoAccountFormType = {
    SEARCH_PATIENT_FORM: hasSymbol
        ? Symbol("SEARCH_PATIENT_FORM")
        : 1,
    CREATE_NEW_ACCOUNT_FORM: hasSymbol
        ? Symbol("CREATE_NEW_ACCOUNT_FORM")
        : 2
};

/** 
 * The component's role:
 *  - shows a regular web page with more form options for authentication:
 *      - form to search for an existing account and authenticate it
 *      - form to create a new account
 *  - store into state which form is active (search for existing user, create new account, ...)
 *  - allows the user to change the active form (search patient / create new account for patient )
 *  - when a patient is authenticated the component navigates to another resource (it makes no
        sense to remain on the authentication page)
 * The component does not:
    - change the global context. This is done by specialized sub-components.
*/
const LogIntoPatientAccount = () => {
    //TODO log all user actions in order to reproduce all user's steps at debug time

    return (
        <LogIntoPatientAccountContainer>
        {
            (logPatientData: ContainerData) => (
                <LogIntoPatientAccountView
                    displayedForm={logPatientData.displayedForm}
                    onPatientAuthenticated={logPatientData.onPatientAuthenticated}
                    onChangeDisplayedForm={logPatientData.onChangeDisplayedForm}
                />
            )
        }
        </LogIntoPatientAccountContainer>
    )
}


export default LogIntoPatientAccount;