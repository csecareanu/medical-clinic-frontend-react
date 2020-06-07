import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LanguageToolbarItem.module.css';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';
import imgRoFlag from '../../../../static/images/ro_flag.jpg';
import imgEnFlag from '../../../../static/images/uk_flag.jpg';

const hasSymbol = typeof Symbol === 'function';

export const Language = {
   RO: hasSymbol? Symbol("Ro") : 1,
   EN: hasSymbol? Symbol("En") : 2
};

type Props = {
   lang: $Values<typeof Language>
}

const LanguageToolbarItem = (props: Props) => {
   let img = null;
   let msg_id = null;

   if (props.lang === Language.RO) {
      img = imgRoFlag;
      msg_id = "language.btn-ro";
   }
   else {
      img = imgEnFlag;
      msg_id = "language.btn-en";
   }

   return (
      <LinkButton
         type={LinkButtonType.SUCCESS}
         boldStyle
         onClick={ () => { handleChangeLang(props.lang) }}
      >
         <div className={classes.Flag} >
            <img src={img} alt="" className={classes.Img}/>
            <FormattedMessage id={msg_id} />
         </div>
      </LinkButton>
   );
}

const handleChangeLang = (lang: $Values<typeof Language>) => {
   console.log(lang);
}

export default LanguageToolbarItem;