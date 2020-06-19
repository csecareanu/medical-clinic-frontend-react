// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, {ButtonType} from '../../../../../UI/Button/Button';


type Props = {
    autoFocus?: boolean,
    onSearchPatients: (firstName: string) => void
}

type State = {
   nameElement: {
      value: string,
      isValid: boolean,
      errMsg: string | null,
      touched: boolean,
      checkForErr: boolean
   }
}


type FormValidationReturnType = {
   isValid: boolean,
   errMsg: typeof FormattedMessage | null
}

const FormValidation = {
   MinLenFirstName: 3,
   MaxLenFirstName: 20,

   ValidateFirstName: (value: string): FormValidationReturnType => {
      // check if the string is null, not defined or empty
      if (!value || value.trim().length === 0) {
         const errMsg = (
            <FormattedMessage
               id="input.validation.rules.first-name"
               values={{
                  min_len: FormValidation.MinLenFirstName,
                  max_len: FormValidation.MaxLenFirstName
               }}
            /> );
         return {isValid:false, errMsg: errMsg};
      }
      return {isValid:true, errMsg: null};
   }
}

class SearchPatientByName extends React.Component<Props, State> {

   state: State = {
      nameElement: {
         value: "",
         isValid: true,
         errMsg: null,
         touched: false,
         checkForErr: false
      }
   }

   handleSearchPatients = (props: Props) => {
      let { isValid, errMsg } = FormValidation.ValidateFirstName(this.state.nameElement.value);
      if (!isValid) {
         this.setState({
            nameElement: {
               ...this.state.nameElement,
               isValid: isValid,
               errMsg: errMsg,
               checkForErr: true
            }
         });
         return;
      }
      props.onSearchPatients(this.state.nameElement.value);
   }

   handleNameChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
      const value = event.target.value;

      let isValid = true;
      let errMsg = null;

      if (this.state.nameElement.checkForErr) {
        let { isValid: validity, errMsg: message } = FormValidation.ValidateFirstName(value);
        isValid = validity;
        errMsg = message;
      }

      this.setState({
         nameElement: {
            ...this.state.nameElement,
            value: value,
            isValid: isValid,
            errMsg: errMsg,
            touched: true
         }
      })
   }

   handleNameBlur = (event: SyntheticInputEvent<HTMLInputElement>): void => {
      const name = this.state.nameElement.value;
      let touched = this.state.nameElement.touched;
      let isValid = true;
      let errMsg = null;

      if (name.length > 0) {
        let { isValid: validity, errMsg: message } = FormValidation.ValidateFirstName(name);
        isValid = validity;
        errMsg = message;
        touched = true;
      }

      this.setState({
         nameElement: {
            ...this.state.nameElement,
            isValid: isValid,
            errMsg: errMsg,
            touched: touched
         }
      });
   }
   render () {
      return (
         <React.Fragment>
               <FormControl.Text
                  size={20}
                  label={ <FormattedMessage id="input.label-name"/> }
                  value={this.state.nameElement.value}
                  isValid={this.state.nameElement.isValid}
                  errorMsg={this.state.nameElement.errMsg}
                  autoFocus={this.props.autoFocus? this.props.autoFocus : false}
                  onChange={this.handleNameChange}
                  onBlur={this.handleNameBlur}
               />

               <FormControl.HorizontalSep repeat={2}/>
               <Button
                  type={ButtonType.SUCCESS} 
                  fullWidth
                  onClick={ () => {
                     this.handleSearchPatients(this.props)
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