// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './CreatePatientAccountView.module.css';
import Button, {ButtonType} from '../../../../UI/Button/Button';
import FormControl from '../../../../UI/FormControl/FormControl';
import BirthdayUserEntryElement 
    from '../../../../UI/userEntryElement/BirthdayUserEntryElement/BirthdayUserEntryElement';
import GenderUserEntryElement 
    from '../../../../UI/userEntryElement/GenderUserEntryElement/GenderUserEntryElement';

const Elements = {
    FIRST_NAME: 1,
    LAST_NAME: 2,
    PHONE_NO: 3,
    PASSWORD: 4,
    PASSWORD_REPEAT: 5,
    CITY: 6,
    COUNTY: 7
}

/**
 * Form which displays the controls to create a new account.
 * 
 * The component is still a presentational one even though it uses an internal state
 * to store values from keyboard input.
 * 
 * @param {boolean} showAdminControls - If true displays controls available only for users with 
 * administrator rights (like 'create account without phone check)
 * @param {function(accountInfo)} props.onCreateAccount -  Callback function to be called with the 
 * user provided parameters in order to create a new account
 */

type Props = {
    showAdminControls?: boolean,
    showCancelAuthenticationBtn?: boolean,
    renderHeaderWhenCreateActionNotInPending?: () => React.Node,
    renderFooterWhenCreateActionNotInPending?: () => React.Node,
    onCreateAccount: () => void,
    onCancelAuthentication?: () => void
 }

type State = {
    elementsStatus: {
        [number]: { value: string}
    }
}

class CreatePatientAccount extends React.Component<Props, State> {

    state = {
        elementsStatus: {
            [Elements.FIRST_NAME]: {
                value: ''
            },
            [Elements.LAST_NAME]: {
                value: ''
            },
            [Elements.PHONE_NO]: {
                value: ''
            },
            [Elements.PASSWORD]: {
                value: ''
            },
            [Elements.PASSWORD_REPEAT]: {
                value: ''
            },
            [Elements.CITY]: {
                value: ''
            },
            [Elements.COUNTY]: {
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

        this.setState({ elementsStatus: updatedElementsStatus });
    }

    onCreateAccount = (createAccountCallback: (() => void) ) => {
        if (createAccountCallback) {
            createAccountCallback(/*account info*/);
        }
    }

    onCancelAuthentication = (onCancelCallback?: () => void) => {
        if (onCancelCallback) {
            onCancelCallback();
        }
    }

    render() {
        const noPhoneCheckButton = (
            <React.Fragment>
                <FormControl.HorizontalSep repeat={4} />
                <Button type={ButtonType.DANGER} fullWidth onClick={this.props.onCreateAccount}>
                  <FormattedMessage 
                     id="pages.user.create-patient-account.btn-create-without-phone-check"
                  />
                </Button>
            </React.Fragment>
        );

        return (
            <React.Fragment>

                {this.props.showCancelAuthenticationBtn
                    ?   <React.Fragment>
                            <div className={classes.CancelButton}>
                                <Button
                                    type={ButtonType.DANGER}
                                    onClick={ () => { 
                                        this.onCancelAuthentication(this.props.onCancelAuthentication);
                                    }}
                                >
                                    <FormattedMessage id="btn-cancel" />
                                </Button>
                            </div>
                            <FormControl.HorizontalSep repeat={4}/>
                        </React.Fragment>
                    : null
                }

                {this.props.renderHeaderWhenCreateActionNotInPending 
                    ? this.props.renderHeaderWhenCreateActionNotInPending()
                    : null
                }

                <form onSubmit={() => { this.onCreateAccount(this.props.onCreateAccount) } }>
                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-first-name"
                        value={this.state.elementsStatus[Elements.FIRST_NAME].value}
                        autoFocus
                        onChange={(event) => { this.inputChangedHandler(event, Elements.FIRST_NAME) }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-last-name"
                        value={this.state.elementsStatus[Elements.LAST_NAME].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.LAST_NAME) }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-phone-no"
                        value={this.state.elementsStatus[Elements.PHONE_NO].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.PHONE_NO) }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-password"
                        value={this.state.elementsStatus[Elements.PASSWORD].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.PASSWORD) }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-repeat-password"
                        value={this.state.elementsStatus[Elements.PASSWORD_REPEAT].value}
                        onChange={(event) => {
                            this.inputChangedHandler(event,
                                Elements.PASSWORD_REPEAT)
                        }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-city"
                        value={this.state.elementsStatus[Elements.CITY].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.CITY) }}
                    />

                    <FormControl.Text
                        size={20}
                        placeholderMsgId="input.label-county"
                        value={this.state.elementsStatus[Elements.COUNTY].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.COUNTY) }}
                    />

                    <BirthdayUserEntryElement />

                    <GenderUserEntryElement />

                    <FormControl.HorizontalSep repeat={2} />

                    <Button
                        type={ButtonType.SUCCESS}
                        fullWidth
                    >
                        <FormattedMessage 
                           id="pages.user.create-patient-account.btn-create-account" 
                        />
                    </Button>

                </form>

                {this.props.showAdminControls ? noPhoneCheckButton : null}
                
                {this.props.renderFooterWhenCreateActionNotInPending 
                    ? this.props.renderFooterWhenCreateActionNotInPending()
                    : null
                }

            </React.Fragment>
        );
    }
}

export default CreatePatientAccount;