import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';

const GenderType = {
    MALE: 'male',
    FEMALE: 'female'
};

const RadioGroupName='gender';

const GenderElement = (props) => {
    const genderLabel = <FormattedMessage id="label_gender" defaultMessage={'Gender:'}/>
    const maleText = <FormattedMessage id="gender_male" defaultMessage={'Male'}/>;
    const femaleText = <FormattedMessage id="gender_female" defaultMessage={'Female'}/>;

    return (
        <React.Fragment>
            <FormControlsView.Group name={genderLabel}>

                <FormControlsView.Radio 
                    name={RadioGroupName}
                    value={GenderType.MALE}
                    noHorizontalSepAfter
                >
                    {maleText}
                </FormControlsView.Radio>

                <FormControlsView.VerticalSep repeat='2'/>

                <FormControlsView.Radio 
                    name={RadioGroupName}
                    value={GenderType.FEMALE}
                    noHorizontalSepAfter
                >
                    {femaleText}
                </FormControlsView.Radio>

            </FormControlsView.Group>                     
        </React.Fragment>
    );
}

export default GenderElement;