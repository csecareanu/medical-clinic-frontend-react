// @flow

import userInputValidator, {type UserInputValidatorReturnType} from './userInputValidator';

const hasSymbol = typeof Symbol === 'function';


export const UserInputErrorHandlerType = { 
   UNKNOWN:       hasSymbol? Symbol("UNKNOWN") : 0,
   GENERIC_NAME:  hasSymbol? Symbol("GENERIC_NAME") : 1,
   FIRST_NAME:    hasSymbol? Symbol("FIRST_NAME") : 2,
   LAST_NAME:     hasSymbol? Symbol("LAST_NAME") : 3
}

export type UserInputErrorHandlerStatus = {
   isValid: boolean,
   errMsg: string | null,
   checkForErr: boolean,
   touched: boolean
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
 * @param elementType      UserInputErrorHandlerType       the type of the element being checked
 * @param elementStatus    UserInputErrorHandlerStatus     keep the current status of the checked 
 *                                                         element.
 */
class userInputErrorHandler {
   elementType: $Values<typeof UserInputErrorHandlerType>;
   elementStatus: UserInputErrorHandlerStatus;

   constructor(elementType: $Values<typeof UserInputErrorHandlerType>) {
      this.elementStatus = {
         isValid: true,
         errMsg: null,
         checkForErr: false,
         touched: false
      }

      this.elementType = !!elementType? elementType : UserInputErrorHandlerType.UNKNOWN;
   }

   checkValidity = (value: string): void => {
      let {isValid, errMsg} = this._validateElement(value);

      // once checkValidity has been called the element will be checked for errors on any user
      // action (set checkForErr to true)

      this.elementStatus.isValid = isValid;
      this.elementStatus.errMsg = errMsg;
      this.elementStatus.checkForErr = true;
      this.elementStatus.touched = true;

      // create new object (keep compatibility with react state)
      this.elementStatus = {
         ...this.elementStatus
      }
   }

   handleChange = (value: string): void => {
      let isValid = true;
      let errMsg = null;
      
      if (this.elementStatus.checkForErr) {
         let { isValid: _isValid, errMsg: _errMsg } = this._validateElement(value);
         isValid = _isValid;
         errMsg = _errMsg;
      }

      this.elementStatus.isValid = isValid;
      this.elementStatus.errMsg = errMsg;
      this.elementStatus.touched = true;
      // create new object (keep compatibility with react state)
      this.elementStatus = {
         ...this.elementStatus
      }
   }
   
   _validateElement = (value: string): UserInputValidatorReturnType => {
      if( this.elementType === UserInputErrorHandlerType.GENERIC_NAME ) {
         return userInputValidator.ValidateGenericName(value);
      }

      return {isValid: true, errMsg: null };
   }
}

export default userInputErrorHandler;