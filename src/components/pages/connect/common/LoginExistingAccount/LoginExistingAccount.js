// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LoginExistingAccount.module.css';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import LinkButton, { LinkButtonType } from '../../../../UI/LinkButton/LinkButton';
import FormControl from '../../../../UI/FormControl/FormControl';


const ELEMENTS = {
    PHONE_NO: 1,
    PASSWORD: 2
}

type AuthenticationCallback = (phoneNo: string, password: string) => void;

type Props = {
    onAuthenticate: AuthenticationCallback
}

type State = {
    elementsStatus: { 
        [number]: { value: string}
    }
}

/**
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function to be called 
 * with the user provided parameters in order to authenticate the user on the server.
 */
class LoginExistingAccount extends React.Component<Props, State> {

    state = {
        elementsStatus: {
            [ELEMENTS.PHONE_NO]: {
                value: ''
            },
            [ELEMENTS.PASSWORD]: {
                value: ''
            }
        }
    }

    inputChangedHandler = (event: SyntheticInputEvent<HTMLInputElement>, elementId: number) => {
        let updatedElement = {
            ...this.state.elementsStatus[elementId],
            value: event.target.value
        };

        let updatedElementsStatus = {
            ...this.state.elementsStatus,
            [elementId]: updatedElement
        };

        this.setState({elementsStatus: updatedElementsStatus});
    }

    /**
     * The user has pressed the login button
     * @param {function(phoneNo, password)} authenticationCallback - If provided by the parent 
     * component will call it in order to authenticate the user
     * login
     */
    onLogin = (authenticationCallback: AuthenticationCallback ) => {
        if (authenticationCallback) {
            authenticationCallback(this.state.elementsStatus[ELEMENTS.PHONE_NO].value,
                this.state.elementsStatus[ELEMENTS.PASSWORD].value);
        }
    }

    render () {

        //TODO 
        const phoneNoText = "Phone No";
        const passwordText = "Password";
        return (
            <form>
                <FormControl.Text 
                    size={20}
                    placeholder={phoneNoText}
                    value={this.state.elementsStatus[ELEMENTS.PHONE_NO].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.PHONE_NO)}}
                />

                <FormControl.Text 
                    size={20}
                    placeholder={passwordText}
                    value={this.state.elementsStatus[ELEMENTS.PASSWORD].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.PASSWORD)}}
                />

                <FormControl.HorizontalSep repeat='2'/>

                <Button 
                    type={ButtonType.SUCCESS} 
                    fullWidth 
                    onClick={ () => {this.onLogin(this.props.onAuthenticate)} }
                >
                    <FormattedMessage id="log_in" defaultMessage={'Login'}/>
                </Button>

                <FormControl.HorizontalSep repeat='2'/>
                <div className={classes.ForgotPassButton}>
                    <LinkButton  type={LinkButtonType.DANGER}>
                            <FormattedMessage id="ask_forgot_password" 
                                defaultMessage={'Did you forget the password?'}/>

                    </LinkButton>
                </div>
            </form>
        );    
    }
}

export default LoginExistingAccount;