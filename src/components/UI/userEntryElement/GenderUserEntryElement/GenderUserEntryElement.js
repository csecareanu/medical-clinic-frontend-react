// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../FormControl/FormControl';

const GenderType = {
    MALE: 'male',
    FEMALE: 'female'
};

const RadioGroupName='gender';

const GenderUserEntryElement = () => {

    return (
        <React.Fragment>
            <FormControl.Group 
               name={ <FormattedMessage id="ui.gender-user-entry-element.label-gender" /> }>

                <FormControl.Radio 
                    name={RadioGroupName}
                    value={GenderType.MALE}
                    noHorizontalSepAfter
                >
                    { <FormattedMessage id="ui.gender-user-entry-element.gender-male" /> }
                </FormControl.Radio>

                <FormControl.VerticalSep repeat={2}/>

                <FormControl.Radio 
                    name={RadioGroupName}
                    value={GenderType.FEMALE}
                    noHorizontalSepAfter
                >
                    { <FormattedMessage id="ui.gender-user-entry-element.gender-female" /> }
                </FormControl.Radio>

            </FormControl.Group>                     
        </React.Fragment>
    );
}

export default GenderUserEntryElement;