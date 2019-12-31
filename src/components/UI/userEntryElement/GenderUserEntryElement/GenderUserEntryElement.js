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
    const genderLabel = <FormattedMessage id="label_gender" defaultMessage={'Gender:'}/>
    const maleText = <FormattedMessage id="gender_male" defaultMessage={'Male'}/>;
    const femaleText = <FormattedMessage id="gender_female" defaultMessage={'Female'}/>;

    return (
        <React.Fragment>
            <FormControl.Group name={genderLabel}>

                <FormControl.Radio 
                    name={RadioGroupName}
                    value={GenderType.MALE}
                    noHorizontalSepAfter
                >
                    {maleText}
                </FormControl.Radio>

                <FormControl.VerticalSep repeat={2}/>

                <FormControl.Radio 
                    name={RadioGroupName}
                    value={GenderType.FEMALE}
                    noHorizontalSepAfter
                >
                    {femaleText}
                </FormControl.Radio>

            </FormControl.Group>                     
        </React.Fragment>
    );
}

export default GenderUserEntryElement;