// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

export type UserInputValidatorReturnType = {
   isValid: boolean,
   errMsg: typeof FormattedMessage | null
}
/**
 * Class used to validate values entered by user.
 */
class userInputValidator {
   static GenericNameMinLen = 3;
   static GenericNameMaxLen = 20;
   static PhoneNoLen = 20;

   static ValidateGenericName = (value: string): UserInputValidatorReturnType => {
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

   static ValidatePartialPhoneNo = (value: string): UserInputValidatorReturnType => {
      // check if the string is null, not defined or empty
      const len = !value? 0 : value.trim().length;
      if (len === 0 || len > this.PhoneNoLen) {
         const errMsg = <FormattedMessage id="input.validation.rules.phone-invalid" /> ;
         return {isValid:false, errMsg: errMsg};
      }
      return {isValid:true, errMsg: null};
   }
}

export default userInputValidator;