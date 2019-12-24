// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './CreatePatientAccountView.module.css';
import CreatePatientAccount from '../shared/CreatePatientAccount/CreatePatientAccount';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import FormControl from '../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../UI/Button/Button';


const createPatientAccountView = () => {
    const createAccountText = <FormattedMessage id="label_create_new_account" 
                                    defaultMessage={"Create new account"}/>

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.NewAccount}>
                <div className={classes.NewAccountContent}>
                    <h1 className={classes.Title}>
                        <FormattedMessage id="title_create_new_account" 
                                    defaultMessage={"Create new patient account"}/>
                    </h1>
                    <div className={classes.CancelButton}>
                        <Button type={ButtonType.DANGER}>
                            <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                        </Button>
                    </div>

                    <FormControl.HorizontalSep repeat={2}/>

                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat={4}/>
                        <CreatePatientAccount showAdminControls onCreateAccount={() => {}}/>
                    </FormControl.Group>
                    <FormControl.HorizontalSep repeat={10} />
                </div>
            </div>
        </MainLayout>
    )
}

export default createPatientAccountView;