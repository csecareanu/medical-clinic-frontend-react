// @flow
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router';

import classes from './UserAuthenticateView.module.css';
import LoginExistingAccount from '../shared/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../shared/CreatePatientAccount/CreatePatientAccount';
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

type Props = {
    displayLoginComponent: boolean,
    navigateToURIOnSuccessfullyAuth: string,
    navigateToURIOnCancelAuth: string,
    createAccountPending: boolean,
    loginUserPending: boolean,
    onCreateAccountPending: () => void,
    onCancelCreateAccount: () => void,
    onLoginUserPending: () => void,
    onCancelLoginUser: () => void,
    onUserAuthenticated: () => void,
    onCancelAuthenticateProcess: () => void,

    history: RouterHistory
}

    const onCancelAuthentication = (onCancelCallback: () => void, history: RouterHistory, 
                                        navigateToURIOnCancelAuth) => {
        
        if(history && navigateToURIOnCancelAuth) {
            history.push({pathname: navigateToURIOnCancelAuth});
        }

        if(onCancelCallback) {
            onCancelCallback();
        }
    }

/**
 * 
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function passed to
 * LoginExistingAccount component in order to authenticate the user on the server
 * @param {function(accountInfo)} props.onCreateAccount -  Callback function passed to 
 * CreatePatientAccount component in order to create a new account
 * @param {function} props.onCancelAuthenticateProcess - Callback function to cancel 
 * the authentication request
 */
const UserAuthenticateView = (props: Props) => {
    useEffectSetup();

    const createAccountText = (<FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"} />);
    
    const cancelAuthBtn = (
            <div className={classes.CancelButton}>
                <Button
                    type={ButtonType.DANGER}
                    onClick={ () => {
                        onCancelAuthentication(props.onCancelAuthenticateProcess, 
                                    props.history, props.navigateToURIOnCancelAuth)
                    }}
                >
                    <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                </Button>
            </div>
    );

    // Log into an existing account if the user has one
    const loginExistingAccount = (
        <LoginExistingAccount 
            navigateToURIOnSuccessfullyAuth={props.navigateToURIOnSuccessfullyAuth}
            onLoginUserPending={props.onLoginUserPending}
            onCancelLoginUser={props.onCancelLoginUser}
            onUserAuthenticated={props.onUserAuthenticated}
        />
    );

    // Create a new account if the user doesn't have one
    const createPatientAccount = (
        <CreatePatientAccount 
            navigateToURIOnSuccessfullyAuth={props.navigateToURIOnSuccessfullyAuth}
            onCreateAccountPending={props.onCreateAccountPending}
            onCancelCreateAccount={props.onCancelCreateAccount}
            onAccountCreated={props.onUserAuthenticated}
        />
    );

    return (
        <React.Fragment>
            <Backdrop show={true} />
            <div className={classes.Auth}>
                <div className={classes.AuthContent}>
                    { props.loginUserPending
                        ? loginExistingAccount
                        : props.createAccountPending
                            ? createPatientAccount
                            : (<React.Fragment>
                                    {cancelAuthBtn}
                                    <FormControl.HorizontalSep repeat={2}/>
                                    {loginExistingAccount}
                                    <FormControl.HorizontalSep repeat={10}/>

                                    <FormControl.Group name={createAccountText} stressedName>
                                        <FormControl.HorizontalSep repeat={2}/>
                                        {createPatientAccount}
                                    </FormControl.Group>
                                </React.Fragment>
                            )
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(UserAuthenticateView);