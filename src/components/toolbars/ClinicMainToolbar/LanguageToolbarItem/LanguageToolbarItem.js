// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './LanguageToolbarItem.module.css';
import imgRoFlag from '../../../../static/images/ro_flag.jpg';
import imgEnFlag from '../../../../static/images/uk_flag.jpg';
import LinkButton, {LinkButtonType} from '../../../UI/LinkButton/LinkButton';
import {LanguageType} from '../../../../shared/LanguageType';

type Props = {
   lang: $Values<typeof LanguageType>,
   onChangeLang: (lang: $Values<typeof LanguageType>) => void
}

const LanguageToolbarItem = (props: Props) => {
   let img = null;
   let msgId = null;

   if (props.lang === LanguageType.RO) {
      img = imgRoFlag;
      msgId = "language.btn-ro";
   }
   else if (props.lang === LanguageType.EN) {
      img = imgEnFlag;
      msgId = "language.btn-en";
   }
   else {
      console.log("LanguageToolbarItem. Unknown language type: " + props.lang.toString())
   }

   return (
      <LinkButton
         type={LinkButtonType.SUCCESS}
         boldStyle
         onClick={ () => { props.onChangeLang(props.lang) }}
      >
         <div className={classes.Flag} >
            <img src={img} alt="" className={classes.Img}/>
            <FormattedMessage id={msgId} />
         </div>
      </LinkButton>
   );
}

export default LanguageToolbarItem;