// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import FormControl from '../../../../../UI/FormControl/FormControl';
import Button, {ButtonType} from '../../../../../UI/Button/Button';
import 
   userInputErrorHandler,
   {type UserInputErrorHandlerStatus,
   UserInputErrorHandlerType}
   from '../../../../../UI/userInput/utils/userInputErrorHandler';


type Props = {
    autoFocus?: boolean,
    onSearchPatients: (firstName: string) => void
}

type State = {
   nameElemValue: string,
   nameElemErrStatus: UserInputErrorHandlerStatus
}

class SearchPatientByName extends React.Component<Props, State> {

   nameErrHandler: userInputErrorHandler;
   state: State;

   constructor(props: Props) {
      super(props);
      this.nameErrHandler = new userInputErrorHandler(UserInputErrorHandlerType.GENERIC_NAME);

      this.state = {
         nameElemValue: "",
         nameElemErrStatus: this.nameErrHandler.elementStatus
      }
   }

   handleSearchPatients = (props: Props) => {
      this.nameErrHandler.checkValidity(this.state.nameElemValue);
      this.setState({
         nameElemErrStatus: this.nameErrHandler.elementStatus
      });

      if (!this.nameErrHandler.elementStatus.isValid) {
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