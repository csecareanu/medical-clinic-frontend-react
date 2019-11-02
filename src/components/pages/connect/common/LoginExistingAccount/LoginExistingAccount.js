import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LoginExistingAccount.module.css';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import LinkButton, { LinkButtonType } from '../../../../UI/LinkButton/LinkButton';
import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';


const ELEMENTS = {
    PHONE_NO: 0,
    PASSWORD: 1
}

class LoginExistingAccount extends React.Component {

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

                <Button type={ButtonType.SUCCESS} fullWidth>
                    <FormattedMessage id="log_in" defaultMessage={'Login'}/>
                </Button>

                <FormControlsView.HorizontalSep repeat='2'/>
                <div className={classes.ForgotPassButton}>
                    <LinkButton  type={LinkButtonType.DANGER}>
                    <FormattedMessage id="ask_forgot_password" 
                        defaultMessage={'Did you forgot the password?'}/>
                    </LinkButton>
                </div>
            </form>
        );    
    }
}

export default LoginExistingAccount;