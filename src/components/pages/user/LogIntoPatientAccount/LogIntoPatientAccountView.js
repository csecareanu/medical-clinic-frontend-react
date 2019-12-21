// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LogIntoPatientAccountView.module.css';
import SearchPatientByBirthday from '../shared/SearchPatient/SearchPatientByBirthday';
import SearchPatientByName from '../shared/SearchPatient/SearchPatientByName';
import SearchPatientByPhoneNo from '../shared/SearchPatient/SearchPatientByPhoneNo';
import CreatePatientAccount from '../shared/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControl from '../../../UI/FormControl/FormControl';
import Backdrop from '../../../UI/Backdrop/Backdrop';


export const LogIntoPatientAccountFormType = {
    FIND_BY_BIRTHDAY : 1,
    FIND_BY_FIRST_NAME: 2,
    FIND_BY_PHONE_NUMBER: 3,
    CREATE_ACCOUNT: 4
}

type Props = {
    formType: number // TODO typeof LogIntoPatientAccountFormType;
}

const logIntoPatientAccountView = (props: Props) => {
    const findPatientText = <FormattedMessage id="label_find_patient" 
                                    defaultMessage={'Find Patient'}/>
    const createAccountText = <FormattedMessage id="label_create_patient_account" 
                                    defaultMessage={"Create patient account"}/>
    const notAccountText = <FormattedMessage id="label_patient_does_not_have_account" 
                                    defaultMessage={"If the patient doesn't have an account"}/>                                    

    return (
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <div className={classes.CancelButton}>
                        <Button type={ButtonType.DANGER}>
                            <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                        </Button>
                    </div>

                    <FormControl.HorizontalSep repeat={2}/>

                    <FormControl.Group name={findPatientText} stressedName>
                        <FormControl.HorizontalSep repeat={2}/>
                        {props.formType === LogIntoPatientAccountFormType.FIND_BY_BIRTHDAY 
                            ? 
                                <SearchPatientByBirthday />
                            :
                                null
                        }
                        {props.formType === LogIntoPatientAccountFormType.FIND_BY_FIRST_NAME 
                            ? 
                                <SearchPatientByName />
                            :
                                null
                        }
                        {props.formType === LogIntoPatientAccountFormType.FIND_BY_PHONE_NUMBER
                            ? 
                                <SearchPatientByPhoneNo />
                            :
                                null
                        }                                
                    </FormControl.Group>
                    
                    <FormControl.HorizontalSep repeat={10}/>

                    {props.formType === LogIntoPatientAccountFormType.CREATE_ACCOUNT 
                        ? 
                            <FormControl.Group name={createAccountText} stressedName>
                                <FormControl.HorizontalSep repeat={4}/>
                                <CreatePatientAccount showAdminControls onCreateAccount={() => {}}/>
                            </FormControl.Group>
                        :
                            <FormControl.Group name={notAccountText} stressedName>
                                <FormControl.HorizontalSep repeat={4}/>
                                <Button type={ButtonType.SUCCESS} fullWidth>
                                    <FormattedMessage 
                                        id="create_new_account" 
                                        defaultMessage={'Create new account'}
                                    />
                                </Button>
                            </FormControl.Group>
                    }   

                </div>
            </div>
        </React.Fragment>
    );
}

export default logIntoPatientAccountView;