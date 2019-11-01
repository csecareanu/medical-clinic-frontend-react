import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LogIntoPatientAccountView.module.css';
import SearchPatientView from '../common/SearchPatientView/SearchPatientView';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControlView from '../../../UI/FormControlView/FormControlView';


const logIntoPatientAccountView = () => {
    const findPatientText = <FormattedMessage id="label_find_patient" 
                                    defaultMessage={'Find Patient'}/>
    const createAccountText = <FormattedMessage id="label_create_patient_account" 
                                    defaultMessage={"Create patient account"}/>

    return (
        <div className={classes.Login}>
            
            <div className={classes.CancelButton}>
                <Button type={ButtonType.DANGER}>
                    <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                </Button>
            </div>

            <FormControlView.HorizontalSep2/>

            <FormControlView.Group name={findPatientText} stressedName>
                <FormControlView.HorizontalSep2/>
                <SearchPatientView />
            </FormControlView.Group>
            
            <FormControlView.HorizontalSep4/>

            <FormControlView.Group name={createAccountText} stressedName>
                <FormControlView.HorizontalSep2/>
                <CreatePatientAccount />
            </FormControlView.Group>
        </div>
    );
}

export default logIntoPatientAccountView;