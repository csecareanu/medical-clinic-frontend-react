import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControlView from '../../../../UI/FormControlView/FormControlView';

const GenderType = {
    MALE: 'male',
    FEMALE: 'female'
};

const RadioGroupName='gender';

const GenderElementView = (props) => {
    const genderLabel = <FormattedMessage id="label_gender" defaultMessage={'Gender:'}/>
    const maleText = <FormattedMessage id="gender_male" defaultMessage={'Male'}/>;
    const femaleText = <FormattedMessage id="gender_female" defaultMessage={'Female'}/>;

    return (
        <React.Fragment>
            <FormControlView.Group name={genderLabel}>

                <FormControlView.Radio 
                    name={RadioGroupName}
                    value={GenderType.MALE}
                    noHorizontalSepAfter
                >
                    {maleText}
                </FormControlView.Radio>

                <FormControlView.VerticalSep2/>

                <FormControlView.Radio 
                    name={RadioGroupName}
                    value={GenderType.FEMALE}
                    noHorizontalSepAfter
                >
                    {femaleText}
                </FormControlView.Radio>

            </FormControlView.Group>                     
        </React.Fragment>
    );
}

export default GenderElementView;