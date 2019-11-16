import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLoginView.module.css';
import LoginExistingAccount from '../common/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControl from '../../../UI/FormControl/FormControl';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const onComponentLoaded = () => {
    // make the top of the window visible if the page is scrolled
    window.scrollTo(0, 0);
}

const onComponentUnloaded = () => {
}

const useEffectSetup = () => {
    useEffect( () => {
        onComponentLoaded();
        return () => {
            onComponentUnloaded();
        }
    }, []);
}

/**
 * 
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function passed to
 * LoginExistingAccount component in order to authenticate the user on the server
 * @param {function(accountInfo)} props.onCreateAccount -  Callback function passed to 
 * CreatePatientAccount component in order to create a new account
 * @param {function} props.onCancel - Callback function to cancel the authentication request
 */
const UserLoginView = (props) => {
    useEffectSetup();

    const createAccountText = <FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"}/>

    return (
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <div className={classes.CancelButton}>
                        <Button
                            type={ButtonType.DANGER}
                            onClick={props.onCancel}
                        >
                            <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                        </Button>
                    </div>
                    <FormControl.HorizontalSep repeat='2'/>

                    <LoginExistingAccount onAuthenticate={ props.onAuthenticate } />

                    <FormControl.HorizontalSep repeat='10'/>

                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat='2'/>
                        <CreatePatientAccount onCreateAccount={ props.onCreateAccount } />
                    </FormControl.Group>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserLoginView;