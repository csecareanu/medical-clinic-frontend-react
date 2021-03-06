// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './CheckSMSCode.module.css';
import FormControl from '../../../../UI/FormControl/FormControl';
import Button, {ButtonType} from '../../../../UI/Button/Button';

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

    render () {
        return (
            <React.Fragment>
                <div className={classes.CancelButton}>
                    <Button
                        type={ButtonType.DANGER}
                        onClick={this.props.onCancel}
                    >
                        <FormattedMessage id="btn-cancel" />
                    </Button>
                </div>

                <FormControl.HorizontalSep repeat={2} />

                <form onSubmit={() => { this.onCheckCode(this.props.onCheckCode) }}>
                    {/* Check the SMS code in order to verify the phone number is valid */}
                    <FormControl.Group name={this.props.title} stressedName>
                        <FormControl.HorizontalSep repeat={2} />
            
                        <FormControl.Group
                           name={
                              <FormattedMessage 
                                 id="pages.user.check-sms-code.label-line1-enter-sms-code" 
                              />
                           }
                           nameLine2={
                              <FormattedMessage 
                                 id="pages.user.check-sms-code.label-line2-enter-sms-code"
                                 values={{
                                    phone: this.props.phoneNoToCheck
                                 }}
                              />
                           }
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
                            <FormattedMessage id="pages.user.check-sms-code.btn-verify-code" />
                        </Button>
                    </FormControl.Group>
                </form>
            </React.Fragment>
        )
    }
}

export default CheckSMSCode;