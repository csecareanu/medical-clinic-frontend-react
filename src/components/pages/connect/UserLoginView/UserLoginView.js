import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLoginView.module.css';
import LoginExistingAccount from '../common/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControlsView from '../../../UI/FormControlsView/FormControlsView';


const userLoginView = () => {
    const createAccountText = <FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"}/>

    return (
        <div className={classes.Login}>

            <div className={classes.CancelButton}>
                <Button type={ButtonType.DANGER}>
                    <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                </Button>
            </div>
            <FormControlsView.HorizontalSep repeat='2'/>

            <LoginExistingAccount />
            <FormControlsView.HorizontalSep repeat='4'/>

            <FormControlsView.Group name={createAccountText} stressedName>
                <FormControlsView.HorizontalSep repeat='2'/>
                <CreatePatientAccount />
            </FormControlsView.Group>
                
        </div>
    );
}

export default userLoginView;