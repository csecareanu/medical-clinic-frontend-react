import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LogIntoPatientAccount.module.css';
import SearchPatientByBirthday from '../shared/SearchPatient/SearchPatientByBirthday';
import CreatePatientAccount from '../shared/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControl from '../../../UI/FormControl/FormControl';
import Backdrop from '../../../UI/Backdrop/Backdrop';


const logIntoPatientAccountView = () => {
    const findPatientText = <FormattedMessage id="label_find_patient" 
                                    defaultMessage={'Find Patient'}/>
    const createAccountText = <FormattedMessage id="label_create_patient_account" 
                                    defaultMessage={"Create patient account"}/>

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
                        <SearchPatientByBirthday />
                    </FormControl.Group>
                    
                    <FormControl.HorizontalSep repeat={10}/>

                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat={4}/>
                        <CreatePatientAccount showAdminControls/>
                    </FormControl.Group>
                </div>
            </div>
        </React.Fragment>
    );
}

export default logIntoPatientAccountView;