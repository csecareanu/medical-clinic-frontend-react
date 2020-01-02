// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button, { ButtonType } from '../../../../UI/Button/Button';
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
                    value={this.state.elementsStatus[Elements.FIRST_NAME].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.FIRST_NAME) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={lastNameText}
                    value={this.state.elementsStatus[Elements.LAST_NAME].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.LAST_NAME) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={phoneNoText}
                    value={this.state.elementsStatus[Elements.PHONE_NO].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.PHONE_NO) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={passwordText}
                    value={this.state.elementsStatus[Elements.PASSWORD].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.PASSWORD) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={passwordRepeatText}
                    value={this.state.elementsStatus[Elements.PASSWORD_REPEAT].value}
                    onChange={(event) => {
                        this.inputChangedHandler(event,
                            Elements.PASSWORD_REPEAT)
                    }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={cityText}
                    value={this.state.elementsStatus[Elements.CITY].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.CITY) }}
                />

                <FormControl.Text
                    size={20}
                    placeholder={countyText}
                    value={this.state.elementsStatus[Elements.COUNTY].value}
                    onChange={(event) => { this.inputChangedHandler(event, Elements.COUNTY) }}
                />

                <BirthdayUserEntryElement />

                <GenderUserEntryElement />

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