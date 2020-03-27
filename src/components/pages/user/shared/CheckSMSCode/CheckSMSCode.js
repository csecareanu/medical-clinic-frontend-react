// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './CheckSMSCode.module.css';
import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';

const Elements = {
    SMS_CODE: 1
}

type CheckCodeCallback = (code: string) => void;

type Props = {
    title: string | typeof FormattedMessage,
    phoneNoToCheck: string,
    onCheckCode: CheckCodeCallback,
    onCancel: () => void
}

type State = {
    elementsStatus: {
        [number]: { value: string }
    }
}

class CheckSMSCode extends React.Component<Props, State> {

    state = {
        elementsStatus: {
            [Elements.SMS_CODE]: {
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

    onCheckCode = (onCheckCodeCallback: CheckCodeCallback) => {
        onCheckCodeCallback(this.state.elementsStatus[Elements.SMS_CODE].value);
    }

    componentDidMount() {
        // make the top of the window visible if the page is scrolled
        window.scrollTo(0, 0);
    }

    render () {
        const checkSMSCodeLine1Text=
            <FormattedMessage 
                id="label_line1_enter_sms_code"
                defaultMessage="Enter the SMS code received at the" 
            />

         const checkSMSCodeLine2Text=
            <FormattedMessage 
                id="label_line2_enter_sms_code"
                defaultMessage="phone number {phone}:"
                values={{
                    phone: this.props.phoneNoToCheck
                }}
            />           
        return (
            <React.Fragment>
                <div className={classes.CancelButton}>
                    <Button
                        type={ButtonType.DANGER}
                        onClick={this.props.onCancel}
                    >
                        <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                    </Button>
                </div>

                <FormControl.HorizontalSep repeat={2} />

                <form onSubmit={() => { this.onCheckCode(this.props.onCheckCode) }}>
                    {/* Check the SMS code in order to verify the phone number is valid */}
                    <FormControl.Group name={this.props.title} stressedName>
                        <FormControl.HorizontalSep repeat={2} />
            
                        <FormControl.Group
                            name={checkSMSCodeLine1Text}
                            nameLine2={checkSMSCodeLine2Text}
                        >
                            <FormControl.Text
                                size={20}
                                value={this.state.elementsStatus[Elements.SMS_CODE].value}
                                autoFocus
                                onChange={(event) => { 
                                    this.inputChangedHandler(event, Elements.SMS_CODE) 
                                }}
                            />
                        </FormControl.Group>

                        <FormControl.HorizontalSep repeat={2} />

                        <Button
                            type={ButtonType.SUCCESS}
                            fullWidth
                        >
                            <FormattedMessage id="verify_code" defaultMessage={'Verify'} />
                        </Button>
                    </FormControl.Group>
                </form>
            </React.Fragment>
        )
    }
}

export default CheckSMSCode;