// @flow

import React from 'react';
import { typeof FormattedMessage } from 'react-intl';

import FormControl from '../../FormControl/FormControl';

const hasSymbol = typeof Symbol === 'function';

export const UserEntryType = {
    FIRST_NAME: hasSymbol
      ? Symbol("FIRST_NAME")
      : 0,
   LAST_NAME: hasSymbol
      ? Symbol("LAST_NAME")
      : 1,
   PHONE_NUMBER: hasSymbol
       ? Symbol("PHONE_NUMBER")
      : 2,
   CITY: hasSymbol
      ? Symbol("CITY")
      : 3,
   COUNTY: hasSymbol
      ? Symbol("COUNTY")
      : 4
}

type Props = {
    label?: string | FormattedMessage,
    value: string,
    isValid: boolean,
    placeholder?: string | FormattedMessage,
    autoFocus?: boolean,
    type: $Values<typeof UserEntryType>,
    onInputChange: (value: string, isValid: boolean) => void
}


/**
 * Component used to add an element of UserEntryType type on a form.
 * It uses different existing user entry controls and add specific input restrictions and error 
 * notifications depending on the control type displayed.
 */
const UserEntryElement = (props: Props) => {
      const addGroup = props.label != null;
      const element = (
               <FormControl.Text
                  size={20}
                  placeholder={props.placeholder? props.placeholder : '' }
                  value={props.value}
                  autoFocus={props.autoFocus? props.autoFocus : false}
                  onChange={(event) => { handleInputChange(props, event) }}
               />
         );
      
      if(addGroup) {
         return (
               <FormControl.Group name={props.label}>
                  {element}
               </FormControl.Group>
         )
      }
      else {
         return element;
      }
   }

const handleInputChange = (props: Props, event: SyntheticInputEvent<HTMLInputElement>) => {
   props.onInputChange(event.target.value, true);
}

export default UserEntryElement;