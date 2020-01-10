// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './CreatePatientAccountView.module.css';
import CreatePatientAccount from '../../user/shared/CreatePatientAccount/CreatePatientAccount';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import FormControl from '../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../UI/Button/Button';

type Props = {
    onShowSearchAccountPage: () => void,
    onCreatePatientAccount: () => void
}

const createPatientAccountView = (props: Props) => {
    const createAccountText = <FormattedMessage id="label_create_new_account" 
                                    defaultMessage={"Create new account"}/>

    const searchForAccountText = <FormattedMessage id="label_patient_have_account_search"
                                    defaultMessage={"If the patient already has an account"}/>

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.NewAccount}>
                <div className={classes.NewAccountContent}>
                    <h1 className={classes.Title}>
                        <FormattedMessage id="title_create_new_account" 
                                    defaultMessage={"Create new patient account"}/>
                    </h1>

                    <FormControl.HorizontalSep repeat={2}/>

                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat={4}/>
                        <CreatePatientAccount 
                            showAdminControls 
                            onCreateAccountPending={ () => {}}
                            onCancelCreateAccount={ () => {}}
                            onAccountCreated={() => {
                                props.onCreatePatientAccount();
                            }}
                        />
                    </FormControl.Group>
                    <FormControl.HorizontalSep repeat={10} />

                    {/* Button to switch to create account form */}
                    <FormControl.Group name={searchForAccountText} stressedName>
                            <FormControl.HorizontalSep repeat={4}/>
                            <Button 
                                type={ButtonType.SUCCESS} 
                                fullWidth
                                onClick={props.onShowSearchAccountPage}
                            >
                                <FormattedMessage 
                                    id="search_existing_patient_account" 
                                    defaultMessage={'Search for existing patient account'}
                                />
                            </Button>
                    </FormControl.Group>

                    <FormControl.HorizontalSep repeat={10}/>

                </div>
            </div>
        </MainLayout>
    )
}

export default createPatientAccountView;