// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import BirthdayUserEntryElement 
    from '../userEntryElement/BirthdayUserEntryElement/BirthdayUserEntryElement';
import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';

const SearchPatientByBirthday = () => {
    const birthDayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday'}/>
    return (
        <form>
            <BirthdayUserEntryElement label={birthDayLabel}/>
            <FormControl.HorizontalSep repeat={2}/>
            <Button type={ButtonType.SUCCESS} fullWidth>
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}

export default SearchPatientByBirthday;