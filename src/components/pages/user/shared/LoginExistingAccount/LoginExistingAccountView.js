// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LoginExistingAccountView.module.css';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import LinkButton, { LinkButtonType } from '../../../../UI/LinkButton/LinkButton';
import FormControl from '../../../../UI/FormControl/FormControl';


const Elements = {
    PHONE_NO: 1,
    PASSWORD: 2
}

type AuthenticationCallback = (phoneNo: string, password: string) => void;

type Props = {
    renderHeaderWhenLoginActionNotInPending?: () => React.Node,
    renderFooterWhenLoginActionNotInPending?: () => React.Node,
    onAuthenticate: AuthenticationCallback,
    onCancelAuthentication: () => void
}

type State = {
    elementsStatus: { 
        [number]: {value: string}
    }
}

/**
 * @param {function(phoneNo, password)} props.onAuthenticate - Callback function to be called 
 * with the user provided parameters in order to authenticate the user on the server.
 */
class LoginExistingAccountView extends React.Component<Props, State> {

    state = {
        elementsStatus: {
            [Elements.PHONE_NO]: {
                value: ''
            },
            [Elements.PASSWORD]: {
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
            authenticationCallback(this.state.elementsStatus[Elements.PHONE_NO].value,
                this.state.elementsStatus[Elements.PASSWORD].value);
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className={classes.CancelButton}>
                    <Button
                        type={ButtonType.DANGER}
                        onClick={this.props.onCancelAuthentication}
                    >
                        <FormattedMessage id="btn-cancel" />
                    </Button>
                </div>

                <FormControl.HorizontalSep repeat={4}/>

                {this.props.renderHeaderWhenLoginActionNotInPending
                    ? this.props.renderHeaderWhenLoginActionNotInPending()
                    : null
                }
                <form onSubmit={ () => {this.onLogin(this.props.onAuthenticate)} }>
                    <FormControl.Text 
                        size={20}
                        placeholderMsgId="input.label-phone-no"
                        value={this.state.elementsStatus[Elements.PHONE_NO].value}
                        autoFocus
                        onChange={(event) => {this.inputChangedHandler(event, Elements.PHONE_NO)}}
                    />

                    <FormControl.Text 
                        size={20}
                        placeholderMsgId="input.label-password"
                        value={this.state.elementsStatus[Elements.PASSWORD].value}
                        onChange={(event) => {this.inputChangedHandler(event, Elements.PASSWORD)}}
                    />

                    <FormControl.HorizontalSep repeat={2}/>

                    <Button 
                        type={ButtonType.SUCCESS} 
                        fullWidth
                    >
                        <FormattedMessage id="btn-login" />
                    </Button>
                </form>

                <FormControl.HorizontalSep repeat={2} />
                <div className={classes.ForgotPassButton}>
                    <LinkButton  type={LinkButtonType.DANGER}>
                        <FormattedMessage 
                           id="pages.user.login-existing-account.btn-ask-forgot-password" 
                        />
                    </LinkButton>
                </div>

                {this.props.renderFooterWhenLoginActionNotInPending
                    ? this.props.renderFooterWhenLoginActionNotInPending()
                    : null
                }
            </React.Fragment>
        );    
    }
}

export default LoginExistingAccountView;