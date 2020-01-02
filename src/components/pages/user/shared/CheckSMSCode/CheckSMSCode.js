// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';

const Elements = {
    SMS_CODE: 1
}

type CheckCodeCallback = (code: string) => void;

type Props = {
    phoneNoToCheck: string,
    onCheckCode: CheckCodeCallback
}

type State = {
    elementsStatus: {
        [number]: { value: string}
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
                <FormControl.Group
                    name={checkSMSCodeLine1Text}
                    nameLine2={checkSMSCodeLine2Text}
                >
                    <FormControl.Text
                        size={20}
                        value={this.state.elementsStatus[Elements.SMS_CODE].value}
                        onChange={(event) => { this.inputChangedHandler(event, Elements.SMS_CODE) }}
                    />
                </FormControl.Group>

                <FormControl.HorizontalSep repeat={2} />

                <Button
                    type={ButtonType.SUCCESS}
                    fullWidth
                    onClick={() => { this.onCheckCode(this.props.onCheckCode) }}
                >
                    <FormattedMessage id="verify_code" defaultMessage={'Verify'} />
                </Button>
            </React.Fragment>
        )
    }
}

export default CheckSMSCode;