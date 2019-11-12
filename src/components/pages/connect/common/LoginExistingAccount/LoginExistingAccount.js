import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LoginExistingAccount.module.css';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import LinkButton, { LinkButtonType } from '../../../../UI/LinkButton/LinkButton';
import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';
import UIStateContext, { UserAuthStatus} from '../../../../UIState/UIState-context';


const ELEMENTS = {
    PHONE_NO: 0,
    PASSWORD: 1
}

/**
 * @param {function} props.onLoginSucceeded - Callback function to be notified on successfully login
 */
class LoginExistingAccount extends React.Component {

    static contextType = UIStateContext;

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

    inputChangedHandler = (event, elementId) => {
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
     *  The user has pressed the login button
     * @param {function} callback if provided by the parent component will notify it on successfully 
     * login
     */
    onLogin = (callback) => {
        this.context.setUserAuthenticationStatus(UserAuthStatus.PATIENT);

        if (callback) {
            callback();
        }
    }
    
    onTestLoginAdmin = (callback) => {
        this.context.setUserAuthenticationStatus(UserAuthStatus.DOCTOR);

        if (callback) {
            callback();
        }
    }

    render () {

        //TODO 
        const phoneNoText = "Phone No";
        const passwordText = "Password";
        return (
            <form>
                <FormControlsView.Text 
                    size={20}
                    placeholder={phoneNoText}
                    value={this.state.elementsStatus[ELEMENTS.PHONE_NO].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.PHONE_NO)}}
                />

                <FormControlsView.Text 
                    size={20}
                    placeholder={passwordText}
                    value={this.state.elementsStatus[ELEMENTS.PASSWORD].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.PASSWORD)}}
                />

                <FormControlsView.HorizontalSep repeat='2'/>

                <Button 
                    type={ButtonType.SUCCESS} 
                    fullWidth 
                    onClick={ () => {this.onLogin(this.props.onLoginSucceeded)} }
                >
                    <FormattedMessage id="log_in" defaultMessage={'Login'}/>
                </Button>
                <Button 
                    type={ButtonType.DANGER} 
                    fullWidth 
                    onClick={ 
                        () => {this.onTestLoginAdmin(this.props.onLoginSucceeded)} 
                    }
                >
                    Test login as a doctor
                </Button>

                <FormControlsView.HorizontalSep repeat='2'/>
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