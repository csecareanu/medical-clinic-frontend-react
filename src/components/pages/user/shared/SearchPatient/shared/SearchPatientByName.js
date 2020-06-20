// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, {ButtonType} from '../../../../../UI/Button/Button';


type UserEntryValidatorReturnType = {
   isValid: boolean,
   errMsg: typeof FormattedMessage | null
}
/**
 * Class used to validate values entered by user.
 */
class UserEntryValidator {
   static GenericNameMinLen = 3;
   static GenericNameMaxLen = 20;

   static ValidateGenericName = (value: string):UserEntryValidatorReturnType => {
      // check if the string is null, not defined or empty
      const len = !value? 0 : value.trim().length;
      if (len < this.GenericNameMinLen || len > this.GenericNameMaxLen) {
         const errMsg = (
            <FormattedMessage
               id="input.validation.rules.generic-name"
               values={{
                  min_len: this.GenericNameMinLen,
                  max_len: this.GenericNameMaxLen
               }}
            /> );
         return {isValid:false, errMsg: errMsg};
      }
      return {isValid:true, errMsg: null};
   }
}

const hasSymbol = typeof Symbol === 'function';
export const ElementErrorHandlerType = { 
   UNKNOWN: hasSymbol? Symbol("UNKNOWN") : 0,
   GENERIC_NAME: hasSymbol? Symbol("GENERIC_NAME") : 1,
   FIRST_NAME: hasSymbol? Symbol("FIRST_NAME") : 2,
   LAST_NAME: hasSymbol? Symbol("LAST_NAME") : 3
}

type ElementErrorHandlerStatus = {
   isValid: boolean,
   errMsg: string | null,
   touched: boolean,
   checkForErr: boolean
}

/**
 * Check user input elements for correct values.
 *
 * The content of the @param elementStatus parameter should be kept in the state of component
 * which instantiate this class. This way the component will be re-rendered when 
 * @param elementStatus changes.
 * In order to be compatible with react state notification mechanism, the @param elementStatus 
 * will change its pointer value any time a parameter form inside changes.
 * 
 * @param elementType      ElementErrorHandlerType       the type of the element being checked
 * @param elementStatus    ElementErrorHandlerStatus     keep the current status of the checked 
 *                                                       element.
 */
class ElementErrorHandler {
   elementType: $Values<typeof ElementErrorHandlerType>;
   elementStatus: ElementErrorHandlerStatus;

   constructor(elementType: $Values<typeof ElementErrorHandlerType>) {
      this.elementStatus = {
         isValid: true,
         errMsg: null,
         touched: false,
         checkForErr: false
      }

      this.elementType = elementType? elementType : ElementErrorHandlerType.UNKNOWN;
   }

   checkValidity = (value: string): boolean => {
      let {isValid, errMsg} = this._validateElement(value);

      // change pointer value when a variable form inside changes 
      // (keep compatibility with react state)
      this.elementStatus = {
         ...this.elementStatus,
         isValid: isValid,
         errMsg: errMsg,
         checkForErr: true
      }

      return isValid;
   }

   handleChange = (value: string): boolean => {
      let isValid = true;
      let errMsg = null;
      
      if (this.elementStatus.checkForErr) {
         let { isValid: _isValid, errMsg: _errMsg } = this._validateElement(value);
         isValid = _isValid;
         errMsg = _errMsg;
      }

      // change pointer value when a variable form inside changes 
      // (keep compatibility with react state)
      this.elementStatus = {
         ...this.elementStatus,
         isValid: isValid,
         errMsg: errMsg,
         touched: true
      }

      return isValid;
   }

   handleBlur = (value: string): boolean => {
      let touched = this.elementStatus.touched;
      let isValid = true;
      let errMsg = null;

      if (value.length > 0) {
         let {isValid: _isValid, errMsg: _errMsg} = this._validateElement(value);
         isValid = _isValid;
         errMsg = _errMsg;
         touched = true;
      }

      // change pointer value when a variable form inside changes 
      // (keep compatibility with react state)
      this.elementStatus = {
         ...this.elementStatus,
         isValid: isValid,
         errMsg: errMsg,
         touched: touched
      };

      return isValid;
   }

   _validateElement = (value: string): UserEntryValidatorReturnType => {
      
      if( this.elementType === ElementErrorHandlerType.GENERIC_NAME ) {
         return UserEntryValidator.ValidateGenericName(value);
      }

      return {isValid: true, errMsg: null };
   }
}


type Props = {
    autoFocus?: boolean,
    onSearchPatients: (firstName: string) => void
}

type State = {
   nameElemValue: string,
   nameElemErrStatus: ElementErrorHandlerStatus
}

class SearchPatientByName extends React.Component<Props, State> {

   nameErrHandler: ElementErrorHandler;
   state: State;

   constructor(props: Props) {
      super(props);
      this.nameErrHandler = new ElementErrorHandler(ElementErrorHandlerType.GENERIC_NAME);

      this.state = {
         nameElemValue: "sd",
         nameElemErrStatus: this.nameErrHandler.elementStatus
      }
   }

   handleSearchPatients = (props: Props) => {
      let isValid = this.nameErrHandler.checkValidity(this.state.nameElemValue);

      if (!isValid) {
         this.setState({
            nameElemErrStatus: this.nameErrHandler.elementStatus
         });
         return;
      }
      props.onSearchPatients(this.state.nameElemValue);
   }

   handleNameChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
      const value = event.target.value;

      this.nameErrHandler.handleChange(value);

      this.setState({
         nameElemValue: value,
         nameElemErrStatus: this.nameErrHandler.elementStatus
      });
   }

   handleNameBlur = (event: SyntheticInputEvent<HTMLInputElement>): void => {
      
      this.nameErrHandler.handleBlur(this.state.nameElemValue);

      this.setState({
         nameElemErrStatus: this.nameErrHandler.elementStatus
      });
   }
   render () {
      return (
         <React.Fragment>
               <FormControl.Text
                  size={20}
                  label={ <FormattedMessage id="input.label-name"/> }
                  value={this.state.nameElemValue}
                  isValid={this.state.nameElemErrStatus.isValid}
                  errorMsg={this.state.nameElemErrStatus.errMsg}
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