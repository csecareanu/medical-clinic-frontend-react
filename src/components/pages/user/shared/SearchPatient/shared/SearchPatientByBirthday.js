// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import BirthdayUserEntryElement 
    from '../../../../../UI/userEntryElement/BirthdayUserEntryElement/BirthdayUserEntryElement';
import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../../UI/Button/Button';

type OnSearchPatientsType = (year: number, month: number, day: number) => void;

const onSearchPatients = (onSearchPatientsCallback: OnSearchPatientsType, 
                            year: number, month: number, day: number) => {
    if(onSearchPatientsCallback) {
        onSearchPatientsCallback(year, month, day);
    }
}

type Props = {
    autoFocus?:boolean,
    onSearchPatients: OnSearchPatientsType
}

const SearchPatientByBirthday = (props: Props) => (
   <React.Fragment>
      <BirthdayUserEntryElement 
            label={ <FormattedMessage id="input.label-birthday" /> }
            autoFocus={props.autoFocus? props.autoFocus : false}
      />
      <FormControl.HorizontalSep repeat={2}/>
      <Button 
            type={ButtonType.SUCCESS} 
            fullWidth
            onClick={ () => {
               onSearchPatients(props.onSearchPatients, 2000, 2,  0)
            }}
      >
            <FormattedMessage 
               id="pages.user.search-patient.search-patient-by-birthday.btn-show-patients" 
            />
      </Button>
   </React.Fragment>
);

export default SearchPatientByBirthday;