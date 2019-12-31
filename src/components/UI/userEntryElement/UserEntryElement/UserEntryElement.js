// @flow

import React from 'react';
import { typeof FormattedMessage } from 'react-intl';

import FormControl from '../../FormControl/FormControl';


export const UserEntryFieldType = {
    FIRST_NAME: 0,
    LAST_NAME: 1,
    PHONE_NUMBER: 2,
    CITY: 3,
    COUNTY: 4
}

type Props = {
    label?: string | FormattedMessage,
    value?: string,
    placeholder?: string | FormattedMessage,
    type: number // TODO: typeof DataEntryFieldType
}

type State = {
    value?: string
}

class UserEntryElement extends React.Component<Props, State> {
    state = {
        value: this.props.value? this.props.value : ''
    }

    inputChangedHandler = (event: SyntheticInputEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value });
    }

    render() {
        const addGroup = this.props.label != null;
        const element = (
                <FormControl.Text
                    size={20}
                    placeholder={this.props.placeholder? this.props.placeholder : '' }
                    value={this.state.value? this.state.value : ''}
                    onChange={(event) => { this.inputChangedHandler(event) }}
                />
            );
        
        if(addGroup) {
            return (
                <FormControl.Group name={this.props.label}>
                    {element}
                </FormControl.Group>
            )
        }
        else {
            return element;
        }
    }
}

export default UserEntryElement;