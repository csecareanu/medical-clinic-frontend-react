// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LogIntoPatientAccountView.module.css';
import useCanAccessDoctorContent from '../../../shared/useCanAccessDoctorContent';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import SearchAndAuthPatient from '../shared/SearchAndAuthPatient/SearchAndAuthPatient';
import CreatePatientAccount, { NewAccountRegMode }  
        from '../shared/CreatePatientAccount/CreatePatientAccount';
import { LoginIntoAccountFormType } from './LogIntoPatientAccountPage';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import FormControl from '../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../UI/Button/Button';

type Props = {
    displayedForm: $Values<typeof LoginIntoAccountFormType>,
    onPatientAuthenticated: () => void,
    onChangeDisplayedForm: (newFormType: $Values<typeof LoginIntoAccountFormType>) => void
}

const getHeaderWhenSearchActionNotInPending = (props: Props): React.Node => {
    return (
        <React.Fragment>
            <FormControl.Group 
               name={
                  <FormattedMessage 
                     id="pages.user.log-into-patient-account-page.label-find-patient" 
                  />
               }
               stressedName 
            />
            <FormControl.HorizontalSep repeat={2} />
        </React.Fragment>
    );
}

const getFooterWhenSearchActionNotInPending = (props: Props): React.Node => (
    <React.Fragment>
        <FormControl.HorizontalSep repeat={8} />
        {getCreateNewAccountLink(props)}
    </React.Fragment>
)

const getHeaderWhenCreateActionNotInPending = (props: Props): React.Node => {
    
    return (
        <React.Fragment>
            <FormControl.Group 
               name={
                  <FormattedMessage 
                     id="pages.user.log-into-patient-account-page.label-create-new-account" 
                  />
               }
               stressedName 
            />
            <FormControl.HorizontalSep repeat={2} />
        </React.Fragment>
    );
}

const getFooterWhenCreateActionNotInPending = (props: Props): React.Node => (
    <React.Fragment>
        <FormControl.HorizontalSep repeat={8} />
        {getSearchExistingAccountLink(props)}
    </React.Fragment>
)

const getCreateNewAccountLink = (props) => {
    return (
        <React.Fragment>
            {/* Button to switch to create a new account */}
            <FormControl.Group 
               name={
                  <FormattedMessage 
                     id="pages.user.log-into-patient-account-page.if-not-account-yet" 
                  />
               } 
               stressedName
            >
                <FormControl.HorizontalSep repeat={2}/>
                    <Button 
                        type={ButtonType.SUCCESS}
                        fullWidth
                        onClick={() => {
                            props.onChangeDisplayedForm(
                                LoginIntoAccountFormType.CREATE_NEW_ACCOUNT_FORM)
                        }}
                    >
                        <FormattedMessage 
                           id="pages.user.log-into-patient-account-page.btn-create-new-account" 
                        />
                    </Button>
            </FormControl.Group>
        </React.Fragment>
    );
}


const getSearchExistingAccountLink = (props) => {
    return (
        <React.Fragment>
            {/* Button to switch to authenticate existing account */}
            <FormControl.Group 
               name={
                  <FormattedMessage 
                     id="pages.user.log-into-patient-account-page.label-if-already-has-account" 
                  />
               } 
               stressedName
            >
                <FormControl.HorizontalSep repeat={2}/>
                <Button 
                    type={ButtonType.SUCCESS} 
                    fullWidth
                    onClick={() => {
                        props.onChangeDisplayedForm(
                            LoginIntoAccountFormType.SEARCH_PATIENT_FORM)
                    }}
                >
                    <FormattedMessage 
                        id="pages.user.log-into-patient-account-page.btn-search-existing-account" 
                     />
                </Button>
            </FormControl.Group>
        </React.Fragment>
    )
}


const LogIntoPatientAccountView = (props: Props) => {

    if (!useCanAccessDoctorContent()) {
        return <NotificationMessage typeAccessNotAllowed />;
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <h1 className={classes.Title}>
                        <FormattedMessage id="pages.user.log-into-patient-account-page.title" />
                    </h1>

                    <FormControl.HorizontalSep repeat={2} />

                    {props.displayedForm === LoginIntoAccountFormType.SEARCH_PATIENT_FORM
                        ?   <SearchAndAuthPatient
                                renderHeaderWhenSearchActionNotInPending={ () => (
                                    getHeaderWhenSearchActionNotInPending(props) )
                                }
                                renderFooterWhenSearchActionNotInPending={ () => (
                                    getFooterWhenSearchActionNotInPending(props) )
                                }
                                onPatientAuthenticated={props.onPatientAuthenticated}
                            />
                        : null 
                    }
                    {props.displayedForm === LoginIntoAccountFormType.CREATE_NEW_ACCOUNT_FORM
                        ?   <CreatePatientAccount 
                                userRegistrationMode={
                                    NewAccountRegMode.AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT}
                                renderHeaderWhenCreateActionNotInPending={ () => (
                                    getHeaderWhenCreateActionNotInPending(props) )
                                }
                                renderFooterWhenCreateActionNotInPending={ () => (
                                    getFooterWhenCreateActionNotInPending(props) )
                                }
                                
                                onAccountCreated={props.onPatientAuthenticated}
                            />
                        : null
                    }
                    <FormControl.HorizontalSep repeat={10} />
                </div>
            </div>
        </MainLayout>
    )
}


export default LogIntoPatientAccountView;