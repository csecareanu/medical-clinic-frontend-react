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
    const findPatientText = 
        <FormattedMessage id="label_find_patient" defaultMessage={'Find Patient'} />
    return (
        <React.Fragment>
            <FormControl.Group name={findPatientText} stressedName />
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

    const createNewAccountText = <FormattedMessage id="label_create_new_account" 
                                    defaultMessage={'Create New Account'}/>
    
    return (
        <React.Fragment>
            <FormControl.Group name={createNewAccountText} stressedName />
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
    const newAccountText = <FormattedMessage id="patient_does_not_have_account"
                                defaultMessage={"If the patient doesn't have an account"}/>
    return (
        <React.Fragment>
            {/* Button to switch to create a new account */}
            <FormControl.Group name={newAccountText} stressedName>
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
                            id="create_new_account" 
                            defaultMessage={'Create new account'}
                        />
                    </Button>
            </FormControl.Group>
        </React.Fragment>
    );
}


const getSearchExistingAccountLink = (props) => {
    const searchForAccountText = <FormattedMessage id="label_patient_have_account_search"
                                    defaultMessage={"If the patient already has an account"}/>
    return (
        <React.Fragment>
            {/* Button to switch to authenticate existing account */}
            <FormControl.Group name={searchForAccountText} stressedName>
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
                        id="search_existing_patient_account" 
                        defaultMessage={'Search for existing patient account'}
                    />
                </Button>
            </FormControl.Group>
        </React.Fragment>
    )
}

const onComponentLoaded = (pageTitleElemRef: {| current: null | React$ElementRef<string> |}) => {
    
    // the page may not contain this element (e.g: when an error message is displayed on the page)
    if (pageTitleElemRef.current) {
        // make the top of the window visible if the page is scrolled
        window.scrollTo(0, pageTitleElemRef.current.offsetTop);
    }
}

const onComponentUnloaded = () => {
}

const useEffectSetup = (pageTitleComponent: {| current: null | React$ElementRef<string> |}) => {
    React.useEffect( () => {
        onComponentLoaded(pageTitleComponent);
        return () => {
            onComponentUnloaded();
        }
    });
}


const LogIntoPatientAccountView = (props: Props) => {
    // take a reference to the page title's component in order to scroll to it on page load
    var pageTitleComponent = React.useRef(null);
    useEffectSetup(pageTitleComponent);

    if (!useCanAccessDoctorContent()) {
        return <NotificationMessage typeAccessNotAllowed />;
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <h1 ref={pageTitleComponent} className={classes.Title}>
                        <FormattedMessage id="title_log_into_patient_account" 
                                    defaultMessage={"Log into patient account"} />
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