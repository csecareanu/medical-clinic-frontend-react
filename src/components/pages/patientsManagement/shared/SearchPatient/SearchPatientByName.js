// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../UI/Button/Button';
import UserEntryElement, { UserEntryFieldType } 
    from '../../../../UI/userEntryElement/UserEntryElement/UserEntryElement';

type OnSearchPatientsType = (firstName: string) => void;

const onSearchPatients = (onSearchPatientsCallback: OnSearchPatientsType, firstName: string) => {
    if(onSearchPatientsCallback) {
        onSearchPatientsCallback(firstName);
    }
}

type Props = {
    onSearchPatients: OnSearchPatientsType
}

const SearchPatientByName = (props: Props) => {
   const patientNameLabel = <FormattedMessage id="label_first_name" defaultMessage={'First Name'}/>
    return (
        <form>
            <UserEntryElement 
                label={patientNameLabel}
                type={UserEntryFieldType.LAST_NAME}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button 
                type={ButtonType.SUCCESS} 
                fullWidth
                onClick={ () => {onSearchPatients(props.onSearchPatients, 'first name')} }
            >
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}

export default SearchPatientByName;