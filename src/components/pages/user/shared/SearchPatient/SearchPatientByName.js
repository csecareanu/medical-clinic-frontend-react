// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import UserEntryElement, { UserEntryFieldType } 
    from '../userEntryElement/UserEntryElement/UserEntryElement';

const SearchPatientByName = () => {
   const patientNameLabel = <FormattedMessage id="label_first_name" defaultMessage={'First Name'}/>
    return (
        <form>
            <UserEntryElement 
                label={patientNameLabel}
                type={UserEntryFieldType.LAST_NAME}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button type={ButtonType.SUCCESS} fullWidth>
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}

export default SearchPatientByName;