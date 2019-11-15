import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button, { ButtonType } from '../../../../UI/Button/Button';
import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';
import BirthdayElement from '../BirthdayElement/BirthdayElement';
import GenderElementView from '../GenderElementView/GenderElementView';


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
 * The component should still be a presentational one even though it uses an internal state
 * to store values from keyboard input.
 * 
 * @param {boolean} showAdminControls - If true displays controls available only for users with 
 * administrator rights (like 'create account without phone check)
 * @param {function} props.onAccountCreated - Callback function to be notified on successfully
 * account creation
 */
class CreatePatientAccount extends React.Component {

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

    onCreateAccount = (callback) => {
        if (callback) {
            callback();
        }
    }    

    render () {
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
                <FormControlsView.HorizontalSep repeat='4'/>
                <Button type={ButtonType.DANGER} fullWidth onClick={this.props.onAccountCreated}>
                    <FormattedMessage id="create_account_without_phone_check" 
                                defaultMessage={'Create Account Without Phone Check'}
                    />
                </Button>
            </React.Fragment>
        );

        return (
            <form>
                <FormControlsView.Text 
                    size={20} 
                    placeholder={firstNameText}
                    value={this.state.elementsStatus[ELEMENTS.FIRST_NAME].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.FIRST_NAME)}}
                />

                <FormControlsView.Text 
                    size={20}
                    placeholder={lastNameText}
                    value={this.state.elementsStatus[ELEMENTS.LAST_NAME].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.LAST_NAME)}}
                />

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

                <FormControlsView.Text 
                    size={20}
                    placeholder={passwordRepeatText}
                    value={this.state.elementsStatus[ELEMENTS.PASSWORD_REPEAT].value}
                    onChange={(event) => {this.inputChangedHandler(event, 
                                                        ELEMENTS.PASSWORD_REPEAT)}}
                />

                <FormControlsView.Text 
                    size={20}
                    placeholder={cityText}
                    value={this.state.elementsStatus[ELEMENTS.CITY].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.CITY)}}
                />

                <FormControlsView.Text 
                    size={20}
                    placeholder={countyText}
                    value={this.state.elementsStatus[ELEMENTS.COUNTY].value}
                    onChange={(event) => {this.inputChangedHandler(event, ELEMENTS.COUNTY)}}
                />

                <BirthdayElement/>

                <GenderElementView/>

                <FormControlsView.HorizontalSep repeat='2'/>

                <Button 
                    type={ButtonType.SUCCESS} 
                    fullWidth
                    onClick={ () => {this.onCreateAccount(this.props.onAccountCreated)} }
                >
                    <FormattedMessage id="create_account" defaultMessage={'Create Account'}/>
                </Button>

                {this.props.showAdminControls? noPhoneCheckButton : null}       
            </form>
        );    
    }
}

export default CreatePatientAccount;