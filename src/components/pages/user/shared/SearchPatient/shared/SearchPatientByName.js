// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, { ButtonType } from '../../../../../UI/Button/Button';
import UserEntryElement, { UserEntryType } 
    from '../../../../../UI/userEntryElement/UserEntryElement/UserEntryElement';


type Props = {
    autoFocus?: boolean,
    onSearchPatients: (firstName: string) => void
}

type State = {
   name: string,
   isValid: boolean
}

class SearchPatientByName extends React.Component<Props, State> {

   state: State = {
      name: "",
      isValid: true
   }

   handleSearchPatients = (props: Props, firstName: string) => {
      props.onSearchPatients(firstName);
   }

   handleInputChange = (value: string, isValid: boolean) => {
      this.setState({
         name: value,
         isValid: isValid
      })
   }

   render () {
      return (
         <React.Fragment>
               <UserEntryElement 
                  label={ <FormattedMessage id="input.label-first-name"/> }
                  value={this.state.name}
                  isValid={this.state.isValid}
                  type={UserEntryType.LAST_NAME}
                  autoFocus={this.props.autoFocus? this.props.autoFocus : false}
                  onInputChange={this.handleInputChange}
               />
               <FormControl.HorizontalSep repeat={2}/>
               <Button 
                  type={ButtonType.SUCCESS} 
                  fullWidth
                  onClick={ () => {
                     this.handleSearchPatients(this.props, 'first name')
                  }}
               >
                  <FormattedMessage 
                     id="pages.user.search-patient.search-patient-by-name.btn-show-patients" 
                  />
               </Button>
         </React.Fragment>
      );
   }
}

export default SearchPatientByName;