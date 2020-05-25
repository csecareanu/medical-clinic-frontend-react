// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../../UI/Button/Button';
import UserEntryElement, { UserEntryType } 
    from '../../../../../UI/userEntryElement/UserEntryElement/UserEntryElement';

type SearchPatientsCallbackType = (phoneNo: string) => void;

type Props = {
    autoFocus?: boolean,
    onSearchPatients: SearchPatientsCallbackType
}

type State = {
   phoneNo: string,
   isValid: boolean
}

class SearchPatientByPhoneNo extends React.Component<Props, State> {

   state: State = {
      phoneNo: "",
      isValid: true
   }

   handleSearchPatients = () => {
      this.props.onSearchPatients(this.state.phoneNo);
   }

   handleInputChange = (value: string, isValid: boolean) => {
      this.setState({
         phoneNo: value,
         isValid: isValid
      })
   }

   render() {
      const patientNameLabel = 
         <FormattedMessage id="label_phone_number" defaultMessage={'Phone Number:'}/>
      return (
         <React.Fragment>
            <UserEntryElement
               label={patientNameLabel}
               value={this.state.phoneNo}
               isValid={this.state.isValid}
               type={UserEntryType.PHONE_NUMBER}
               autoFocus={this.props.autoFocus? this.props.autoFocus : false}
               onInputChange={this.handleInputChange}
            />
            <FormControl.HorizontalSep repeat={2}/>
            <Button
               type={ButtonType.SUCCESS}
               fullWidth
               onClick={this.handleSearchPatients}
            >
               <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
         </React.Fragment>
      );
   }
}

export default SearchPatientByPhoneNo;