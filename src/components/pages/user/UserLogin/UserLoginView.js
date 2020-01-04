// @flow
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLoginView.module.css';
import LoginExistingAccount from '../shared/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../shared/CreatePatientAccount/CreatePatientAccount';
import CheckSMSCode from '../shared/CheckSMSCode/CheckSMSCode';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControl from '../../../UI/FormControl/FormControl';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import { type AuthenticationState } from './UserLogin';
import { LoginStatus } from './UserLogin';

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

type Props = {
    authenticationState: AuthenticationState,
    onAuthenticate: (phoneNo: string, password: string) => void,
    onCreateAccount: () => void,
    onCancel: () => void
}

/**
 * 
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function passed to
 * LoginExistingAccount component in order to authenticate the user on the server
 * @param {function(accountInfo)} props.onCreateAccount -  Callback function passed to 
 * CreatePatientAccount component in order to create a new account
 * @param {function} props.onCancel - Callback function to cancel the authentication request
 */
const UserLoginView = (props: Props) => {
    useEffectSetup();

    const createAccountText = <FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"} />
    
    const phoneNoValidationText = <FormattedMessage id="label_phone_no_check"
                                    defaultMessage ={"Phone number validation"} />


    if (props.authenticationState.loginStatus === LoginStatus.CreateNewAccount &&
        props.authenticationState.loginStates.createNewAccount.checkingSMSCode === true ) {
            return (
                <React.Fragment>
                    <Backdrop show={true} />
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

                            <FormControl.HorizontalSep repeat={2}/>

                            {/* Check the SMS code in order to verify the phone number is valid */}
                            <FormControl.Group name={phoneNoValidationText} stressedName>
                                <FormControl.HorizontalSep repeat={2}/>
                                <CheckSMSCode 
                                    phoneNoToCheck="0766666666"
                                    onCheckCode={ (code: string) => {} }
                                />
                            </FormControl.Group>

                        </div>
                    </div>
                </React.Fragment>
            );
        }

    return (
        <React.Fragment>
            <Backdrop show={true} />
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

                    <FormControl.HorizontalSep repeat={2}/>

                    {/* Log int an existing account if the user has one */}
                    <LoginExistingAccount onAuthenticate={ props.onAuthenticate } />

                    <FormControl.HorizontalSep repeat={10}/>

                    {/* Create a new account if the user doesn't have one */}
                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat={2}/>
                        <CreatePatientAccount 
                            onCreateAccount={ props.onCreateAccount } 
                        />
                    </FormControl.Group>

                </div>
            </div>
        </React.Fragment>
    );
}

export default UserLoginView;