// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserAuthenticationView.module.css';
import { UserAuthenticationFormType } from './UserAuthenticationModal';
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
    return (
        <React.Fragment>
            {/* Button to switch to create a new account */}
            <FormControl.Group 
               name={ 
                  <FormattedMessage id="pages.user.user-authentication-modal.if-no-user-account" /> 
               } 
               stressedName
            >
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
                            id="pages.user.user-authentication-modal.btn-create-new-account" 
                        />
                    </Button>
            </FormControl.Group>
        </React.Fragment>
    );
}


const getLoginExistingAccountLink = (props: Props): React.Node => (
   <React.Fragment>
      {/* Button to switch to login using an existing account */}
      <FormControl.Group 
         name={ <FormattedMessage id="pages.user.user-authentication-modal.if-user-has-account" /> } 
         stressedName
      >
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
                     id="pages.user.user-authentication-modal.login-existing-account" 
                  />
               </Button>
      </FormControl.Group>
   </React.Fragment>
);

const UserAuthenticationView = (props: Props) => {

    return (
        <React.Fragment>
            <Backdrop show={true} />

            <div className={classes.Auth}>
                <div className={classes.AuthContent}>
                    {props.displayedForm === UserAuthenticationFormType.LOGIN_FORM
                        ?   <LoginExistingAccount 
                                userRegistrationMode={ExistingAccountRegMode.AS_NEW_USER}
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
                                userRegistrationMode={NewAccountRegMode.AS_NEW_USER}
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