// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './BirthdayUserEntryElement.module.css';
import FormControl from '../../FormControl/FormControl';

const Elements = {
    BIRTH_DAY: 0,
    BIRTH_MONTH: 1,
    BIRTH_YEAR: 2
};

type Props = {
    autoFocus?: boolean
}

type State = {
    elementsStatus: { 
        [number]: { value: string}
    }
}

/**
 * The component is still a presentational one even though it uses an internal state
 * to store values from keyboard input.
 */
class BirthdayUserEntryElement extends React.Component<Props, State> {
    state = {
        elementsStatus: {
            [Elements.BIRTH_DAY]: {
                value: ''
            },
            [Elements.BIRTH_MONTH]: {
                value: ''
            },
            [Elements.BIRTH_YEAR]: {
                value: ''
            }
        }
    }

    inputChangedHandler = (event: SyntheticInputEvent<HTMLInputElement>, elementId: number) => {
        const updatedElement = {
            ...this.state.elementsStatus[elementId],
            value: event.target.value
        }        
        const updatedElementsStatus = {
            ...this.state.elementsStatus,
            [elementId]: updatedElement
        }

        this.setState({elementsStatus: updatedElementsStatus});
    }

    render() {
        const birthDayElem = this.state.elementsStatus[Elements.BIRTH_DAY];
        const birthMonthElem = this.state.elementsStatus[Elements.BIRTH_MONTH];
        const birthYearElem = this.state.elementsStatus[Elements.BIRTH_YEAR];

        return (
            <FormControl.Group name={ <FormattedMessage id="input.label-birthday" /> }>
                <div className={classes.Birthday}>
                    <FormControl.Text 
                        size={6}
                        placeholderMsgId="input.label-birthday.day"
                        value={birthDayElem.value}
                        autoFocus={this.props.autoFocus? this.props.autoFocus : false}
                        onChange={
                            (event) => {this.inputChangedHandler(event, Elements.BIRTH_DAY)}
                        }
                    />
                    <FormControl.VerticalSep/>
                    <FormControl.Text 
                        size={6} 
                        placeholderMsgId="input.label-birthday.month"
                        value={birthMonthElem.value}
                        onChange={
                            (event) => {this.inputChangedHandler(event, Elements.BIRTH_MONTH)}
                        }
                    />
                    <FormControl.VerticalSep/>
                    <FormControl.Text 
                        size={12}
                        placeholderMsgId="input.label-birthday.year"
                        value={birthYearElem.value}
                        onChange={
                            (event) => {this.inputChangedHandler(event, Elements.BIRTH_YEAR)}
                        }
                    />
                </div>
            </FormControl.Group>
        );
    }
}

export default BirthdayUserEntryElement;