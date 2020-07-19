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

type SearchPatientsCallbackType = (phoneNo: string) => void;

type Props = {
    autoFocus?: boolean,
    onSearchPatients: SearchPatientsCallbackType
}

type State = {
   phoneElemValue: string,
   phoneElemErrStatus: UserInputErrorHandlerStatus
}

class SearchPatientByPhoneNo extends React.Component<Props, State> {

   phoneErrHandler: userInputErrorHandler;
   state: State;

   constructor(props: Props) {
      super(props);
      this.phoneErrHandler = new userInputErrorHandler(UserInputErrorHandlerType.GENERIC_NAME);

      this.state = {
         phoneElemValue: "",
         phoneElemErrStatus: this.phoneErrHandler.elementStatus
      }
   }

   handleSearchPatients = () => {
      this.phoneErrHandler.checkValidity(this.state.phoneElemValue);
      this.setState({
         phoneElemErrStatus: this.phoneErrHandler.elementStatus
      });

      if (!this.phoneErrHandler.elementStatus.isValid) {
         return;
      }

      this.props.onSearchPatients(this.state.phoneElemValue);
   }

   handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
      const value = event.target.value;
      this.phoneErrHandler.handleChange(value);
      this.setState({
         phoneElemValue: value,
         phoneElemErrStatus: this.phoneErrHandler.elementStatus
      });
   }

   render() {
      return (
         <React.Fragment>
            <FormControl.Text
               size={20}
               label={ <FormattedMessage id="input.label-search-phone-no"/> }
               value={this.state.phoneElemValue}
               isValid={this.state.phoneElemErrStatus.isValid}
               errorMsg={this.state.phoneElemErrStatus.errMsg}
               autoFocus={this.props.autoFocus? this.props.autoFocus : false}
               onChange={this.handleInputChange}
            />

            <FormControl.HorizontalSep repeat={2}/>
            <Button
               type={ButtonType.SUCCESS}
               fullWidth
               onClick={this.handleSearchPatients}
            >
               <FormattedMessage 
                  id="pages.user.search-patient.search-patient-by-phoneNo.btn-show-patients" 
               />
            </Button>
         </React.Fragment>
      );
   }
}

export default SearchPatientByPhoneNo;