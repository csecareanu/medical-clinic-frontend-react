// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './BirthdayElement.module.css';
import FormControl from '../../../../UI/FormControl/FormControl';

const ELEMENTS = {
    BIRTH_DAY: 0,
    BIRTH_MONTH: 1,
    BIRTH_YEAR: 2
};

type Props = {
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
class BirthdayElement extends React.Component<Props, State> {
    state = {
        elementsStatus: {
            [ELEMENTS.BIRTH_DAY]: {
                value: ''
            },
            [ELEMENTS.BIRTH_MONTH]: {
                value: ''
            },
            [ELEMENTS.BIRTH_YEAR]: {
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
        const birthDayElem = this.state.elementsStatus[ELEMENTS.BIRTH_DAY];
        const birthMonthElem = this.state.elementsStatus[ELEMENTS.BIRTH_MONTH];
        const birthYearElem = this.state.elementsStatus[ELEMENTS.BIRTH_YEAR];
        
        //TODO 
        /*
        const dayText = <FormattedMessage id="birthday_day" defaultMessage={'day'}/>
        const monthText = <FormattedMessage id="birthday_month" defaultMessage={'month'}/>
        const yearText = <FormattedMessage id="birthday_year" defaultMessage={'year'}/>
        */
       const dayText = 'day';
       const monthText = 'month';
       const yearText = 'year';

       const birthdayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday:'}/>

        return (
            <FormControl.Group name={birthdayLabel}>
                <div className={classes.Birthday}>
                    <FormControl.Text 
                        size={6}
                        placeholder={dayText}
                        value={birthDayElem.value}
                        onChange={
                            (event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_DAY)}
                        }
                    />
                    <FormControl.VerticalSep/>
                    <FormControl.Text 
                        size={6} 
                        placeholder= {monthText}
                        value={birthMonthElem.value}
                        onChange={
                            (event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_MONTH)}
                        }
                    />
                    <FormControl.VerticalSep/>
                    <FormControl.Text 
                        size={12}
                        placeholder={yearText}
                        value={birthYearElem.value}
                        onChange={
                            (event) => {this.inputChangedHandler(event, ELEMENTS.BIRTH_YEAR)}
                        }
                    />
                </div>
            </FormControl.Group>
        );
    }
}

export default BirthdayElement;