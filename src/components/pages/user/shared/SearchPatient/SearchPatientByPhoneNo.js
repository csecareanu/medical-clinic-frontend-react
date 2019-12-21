// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import UserEntryElement, { UserEntryFieldType } 
    from '../userEntryElement/UserEntryElement/UserEntryElement';

const SearchPatientByPhoneNo = () => {
   const patientNameLabel = 
        <FormattedMessage id="label_phone_number" defaultMessage={'Phone Number'}/>
    return (
        <form>
            <UserEntryElement 
                label={patientNameLabel}
                type={UserEntryFieldType.PHONE_NUMBER}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button type={ButtonType.SUCCESS} fullWidth>
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}

export default SearchPatientByPhoneNo;