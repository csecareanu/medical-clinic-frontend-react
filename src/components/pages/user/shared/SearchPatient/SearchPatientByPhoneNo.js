// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import DataEntryElement, { DataEntryElementType } 
    from '../data-entry-elements/DataEntryElement/DataEntryElement';

const SearchPatientByPhoneNo = () => {
   const patientNameLabel = 
        <FormattedMessage id="label_phone_number" defaultMessage={'Phone Number'}/>
    return (
        <form>
            <DataEntryElement 
                label={patientNameLabel}
                type={DataEntryElementType.PHONE_NUMBER}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button type={ButtonType.SUCCESS} fullWidth>
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}

export default SearchPatientByPhoneNo;