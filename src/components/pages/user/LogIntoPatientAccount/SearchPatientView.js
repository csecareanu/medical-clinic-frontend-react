// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './SearchPatientView.module.css';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import SearchPatientByBirthday from '../shared/SearchPatient/SearchPatientByBirthday';
import SearchPatientByName from '../shared/SearchPatient/SearchPatientByName';
import SearchPatientByPhoneNo from '../shared/SearchPatient/SearchPatientByPhoneNo';
import Button, { ButtonType } from '../../../UI/Button/Button';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';
import FormControl from '../../../UI/FormControl/FormControl';


export const SearchPatientFormType = {
    SEARCH_BY_BIRTHDAY : 1,
    SEARCH_BY_FIRST_NAME: 2,
    SEARCH_BY_PHONE_NUMBER: 3
}

type Props = {
    formType: number // TODO typeof LogIntoPatientAccountFormType;
}

const logIntoPatientAccountView = (props: Props) => {
    const findPatientText = <FormattedMessage id="label_find_patient" 
                                    defaultMessage={'Find Patient'}/>

    const newAccountText = <FormattedMessage id="label_patient_does_not_have_account"
                                    defaultMessage={"If the patient doesn't have an account"}/>

    const searchByBirthdayLink = (
                <LinkButton
                    type={LinkButtonType.DANGER}
                    onClick={ () => { }}
                >
                    <FormattedMessage id="search_by_birthday" defaultMessage={'Search by birthday'}/>
                </LinkButton>
            );

    const searchByNameLink = (
                <LinkButton
                    type={LinkButtonType.DANGER}
                    onClick={ () => { }}
                >
                    <FormattedMessage id="search_by_name" defaultMessage={'Search by name'}/>
                </LinkButton>
            );

    const searchByPhoneNoLink = (
                <LinkButton
                    type={LinkButtonType.DANGER}
                    onClick={ () => { }}
                >
                    <FormattedMessage id="search_by_phone_no" 
                        defaultMessage={'Search by phone number'}
                    />
                </LinkButton>
            );

    let searchPatientForm = null;
    let alternativeSearchLinks = [];
    switch(props.formType) {
        case SearchPatientFormType.SEARCH_BY_BIRTHDAY:
            searchPatientForm = <SearchPatientByBirthday />;
            alternativeSearchLinks = [searchByNameLink, searchByPhoneNoLink];
            break;
        case SearchPatientFormType.SEARCH_BY_FIRST_NAME:
            searchPatientForm = <SearchPatientByName />;
            alternativeSearchLinks = [searchByBirthdayLink, searchByPhoneNoLink];
            break;
        case SearchPatientFormType.SEARCH_BY_PHONE_NUMBER:
            searchPatientForm = <SearchPatientByPhoneNo />;
            alternativeSearchLinks = [searchByBirthdayLink, searchByNameLink];
            break;
        default:
            console.log('logIntoPatientAccountView. [W] Unknown form type: ' + props.formType);
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <h1 className={classes.Title}>
                        <FormattedMessage id="title_log_into_patient_account" 
                                    defaultMessage={"Log into patient account"} />
                    </h1>

                    <FormControl.HorizontalSep repeat={2}/>

                    <FormControl.Group name={findPatientText} stressedName>
                        <FormControl.HorizontalSep repeat={2} />
                        {searchPatientForm}                              
                    </FormControl.Group>

                    <FormControl.HorizontalSep repeat={2} />


                    {alternativeSearchLinks.map( (element, idx) => (
                        <div key={idx} className={classes.AlternativeSearchItem}>{element}</div>
                    ))}
                    
                    <FormControl.HorizontalSep repeat={10} />

                    {/* Button to switch to create account form */}
                    <FormControl.Group name={newAccountText} stressedName>
                            <FormControl.HorizontalSep repeat={4}/>
                            <Button type={ButtonType.SUCCESS} fullWidth>
                                <FormattedMessage 
                                    id="create_new_account" 
                                    defaultMessage={'Create new account'}
                                />
                            </Button>
                    </FormControl.Group>

                    <FormControl.HorizontalSep repeat={10} />
                </div>
            </div>
        </MainLayout>
    );
}

export default logIntoPatientAccountView;