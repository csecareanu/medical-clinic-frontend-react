// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserAuthenticationView.module.css';
import { UserAuthenticationFormType } from './UserAuthentication';
import LoginExistingAccount, { ExistingAccountRegMode } 
        from '../shared/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount, { NewAccountRegMode } 
        from '../shared/CreatePatientAccount/CreatePatientAccount'; 
import Backdrop from '../../../UI/Backdrop/Backdrop';
import FormControl from '../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../UI/Button/Button';

type Props = {
    displayedForm: $Values<typeof UserAuthenticationFormType>,
    onChangeDisplayedForm: (newFormType: $Values<typeof UserAuthenticationFormType>) => void,
    onUserAuthenticated: () => void,
    onCancelAuthentication: () => void
}

/**
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function passed to
 * LoginExistingAccount component in order to authenticate the user on the server
 * @param {function(accountInfo)} props.onCreateAccount -  Callback function passed to 
 * CreatePatientAccount component in order to create a new account
 * @param {function} props.onCancelAuthentication - Callback function to cancel 
 * the authentication request
 */


const getFooterWhenLoginActionNotInPending = (props: Props) => (
    <React.Fragment>
        <FormControl.HorizontalSep repeat={8}/>
        {getCreateNewAccountLink(props)}
    </React.Fragment>
)

const getFooterWhenCreateActionNotInPending = (props: Props) => (
    <React.Fragment>
        <FormControl.HorizontalSep repeat={8}/>
        {getLoginExistingAccountLink(props)}
    </React.Fragment>
)

const getCreateNewAccountLink = (props: Props): React.Node => {
    const newAccountText = <FormattedMessage id="if_user_does_not_have_account"
                                defaultMessage={"If you don't have an account"}/>
    return (
        <React.Fragment>
            {/* Button to switch to create a new account */}
            <FormControl.Group name={newAccountText} stressedName>
                <FormControl.HorizontalSep repeat={2}/>
                    <Button 
                        type={ButtonType.SUCCESS}
                        fullWidth
                        onClick={() => {
                            props.onChangeDisplayedForm(
                                UserAuthenticationFormType.CREATE_NEW_ACCOUNT_FORM)
                        }}
                    >
                        <FormattedMessage 
                            id="create_new_account" 
                            defaultMessage={'Create new account'}
                        />
                    </Button>
            </FormControl.Group>
        </React.Fragment>
    );
}


const getLoginExistingAccountLink = (props: Props): React.Node => {
    const existingAccountText = <FormattedMessage id="if_user_have_account"
                                defaultMessage={"If you already have an account"}/>
    return (
        <React.Fragment>
            {/* Button to switch to login using an existing account */}
            <FormControl.Group name={existingAccountText} stressedName>
                <FormControl.HorizontalSep repeat={2}/>
                    <Button 
                        type={ButtonType.SUCCESS}
                        fullWidth
                        onClick={() => {
                            props.onChangeDisplayedForm(
                                UserAuthenticationFormType.LOGIN_FORM)
                        }}
                    >
                        <FormattedMessage 
                            id="login_existing_account" 
                            defaultMessage={'Login using an existing account'}
                        />
                    </Button>
            </FormControl.Group>
        </React.Fragment>
    );
}

const UserAuthenticationView = (props: Props) => {

    return (
        <React.Fragment>
            <Backdrop show={true} />

            <div className={classes.Auth}>
                <div className={classes.AuthContent}>
                    {props.displayedForm === UserAuthenticationFormType.LOGIN_FORM
                        ?   <LoginExistingAccount 
                                registrationMode={ExistingAccountRegMode.AS_NEW_USER}
                                renderFooterWhenLoginActionNotInPending={ () => (
                                    getFooterWhenLoginActionNotInPending(props) )
                                }
                                onUserAuthenticated={props.onUserAuthenticated}
                                onCancelAuthentication={props.onCancelAuthentication}
                            /> 
                        : null
                    }
                    {props.displayedForm === UserAuthenticationFormType.CREATE_NEW_ACCOUNT_FORM
                        ?   <CreatePatientAccount
                                registrationMode={NewAccountRegMode.AS_NEW_USER}
                                showCancelAuthenticationBtn
                                renderFooterWhenCreateActionNotInPending={ () => (
                                    getFooterWhenCreateActionNotInPending(props) )
                                }
                                onAccountCreated={props.onUserAuthenticated}
                                onCancelAuthentication={props.onCancelAuthentication}
                            />
                        : null
                    }                    
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserAuthenticationView;