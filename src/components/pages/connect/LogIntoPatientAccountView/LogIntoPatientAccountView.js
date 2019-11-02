import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LogIntoPatientAccountView.module.css';
import SearchPatientView from '../common/SearchPatientView/SearchPatientView';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControlsView from '../../../UI/FormControlsView/FormControlsView';


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

            <FormControlsView.HorizontalSep repeat='2'/>

            <FormControlsView.Group name={findPatientText} stressedName>
                <FormControlsView.HorizontalSep repeat='2'/>
                <SearchPatientView />
            </FormControlsView.Group>
            
            <FormControlsView.HorizontalSep repeat='10'/>

            <FormControlsView.Group name={createAccountText} stressedName>
                <FormControlsView.HorizontalSep repeat='4'/>
                <CreatePatientAccount showAdminControls/>
            </FormControlsView.Group>
                
        </div>
    );
}

export default logIntoPatientAccountView;