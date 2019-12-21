// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button, { ButtonType } from '../../../../UI/Button/Button';
import FormControl from '../../../../UI/FormControl/FormControl';
import BirthdayElement from '../data-entry-elements/BirthdayElement/BirthdayElement';
import GenderElement from '../data-entry-elements/GenderElement/GenderElement';


const ELEMENTS = {
    FIRST_NAME: 0,
    LAST_NAME: 1,
    PHONE_NO: 2,
    PASSWORD: 3,
    PASSWORD_REPEAT: 4,
    CITY: 5,
    COUNTY: 6
}

/**
 * Form which displays the controls and buttons to create a new account.
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
    onCreateAccount: () => void,
    showAdminControls?: boolean
 }

type State = {
    elementsStatus: { 
        [number]: { value: string}
    }
}

class CreatePatientAccount extends React.Component<Props, State> {

    state = {
        elementsStatus: {
            [ELEMENTS.FIRST_NAME]: {
                value: ''
            },
            [ELEMENTS.LAST_NAME]: {
                value: ''
            },
            [ELEMENTS.PHONE_NO]: {
                value: ''
            },
            [ELEMENTS.PASSWORD]: {
                value: ''
            },
            [ELEMENTS.PASSWORD_REPEAT]: {
                value: ''
            },
            [ELEMENTS.CITY]: {
                value: ''
            },
            [ELEMENTS.COUNTY]: {
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

    render() {
        //TODO 
        const firstNameText = "First Name";
        const lastNameText = "Last Name";
        const phoneNoText = "Phone No";
        const passwordText = "Password";
        const passwordRepeatText = "Repeat Password";
        const cityText = "City";
        const countyText = "County";

        const noPhoneCheckButton = (
            <React.Fragment>
                <FormControl.HorizontalSep repeat={4} />
                <Button type={ButtonType.DANGER} fullWidth onClick={this.props.onCreateAccount}>
                    <FormattedMessage id="create_account_without_phone_check"
                        defaultMessage={'Create Account Without Phone Check'}
                    />
                </Button>
            </React.Fragment>
        );

        return (
            <form>
                <FormControl.Text
                    size={20}
                    placeholder={firstNameText}
                    value={this.state.elementsStatus[ELEMENTS.FIRST_NAME].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.FIRST_NAME) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={lastNameText}
                    value={this.state.elementsStatus[ELEMENTS.LAST_NAME].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.LAST_NAME) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={phoneNoText}
                    value={this.state.elementsStatus[ELEMENTS.PHONE_NO].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.PHONE_NO) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={passwordText}
                    value={this.state.elementsStatus[ELEMENTS.PASSWORD].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.PASSWORD) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={passwordRepeatText}
                    value={this.state.elementsStatus[ELEMENTS.PASSWORD_REPEAT].value}
                    onChange={(event) => {
                        this.inputChangedHandler(event,
                            ELEMENTS.PASSWORD_REPEAT)
                    }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={cityText}
                    value={this.state.elementsStatus[ELEMENTS.CITY].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.CITY) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={countyText}
                    value={this.state.elementsStatus[ELEMENTS.COUNTY].value}
                    onChange={(event) => { this.inputChangedHandler(event, ELEMENTS.COUNTY) }}
                />

                <BirthdayElement />

                <GenderElement />

                <FormControl.HorizontalSep repeat={2} />

                <Button
                    type={ButtonType.SUCCESS}
                    fullWidth
                    onClick={() => { this.onCreateAccount(this.props.onCreateAccount) }}
                >
                    <FormattedMessage id="create_account" defaultMessage={'Create Account'} />
                </Button>

                {this.props.showAdminControls ? noPhoneCheckButton : null}
            </form>
        );
    }
}

export default CreatePatientAccount;