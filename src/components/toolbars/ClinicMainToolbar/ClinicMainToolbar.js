// @flow

import React from 'react';

import classes from './ClinicMainToolbar.module.css';
import commonClasses from '../../../common.module.css';
import PhoneToolbarItem from './PhoneToolbarItem/PhoneToolbarItem';
import EmailToolbarItem from './EmailToolbarItem/EmailToolbarItem';
import BrandLargeToolbarItemView from '../../UI/BrandLarge/BrandLarge';
import BrandSmallToolbarItemView from '../../UI/SecondBrand/SecondBrand';
import ToolbarGroup, {ToolbarSepPos} from '../shared/ToolbarGroup/ToolbarGroup';
import LanguageToolbarItem from './LanguageToolbarItem/LanguageToolbarItem';
import {LanguageType} from '../../../shared/LanguageType';

type Props = {
   onChangeLang: (lang: $Values<typeof LanguageType>) => void
}

const ClinicMainToolbar = (props: Props) => {
    return (
        <div className={classes.Toolbar} >

            <div className={classes.LeftItems}>
               <ToolbarGroup separator={ToolbarSepPos.DOWN}>
                  <div className={classes.LeftLanguage}>
                     <ToolbarGroup separator={ToolbarSepPos.RIGHT}>
                        <LanguageToolbarItem
                           lang={LanguageType.RO}
                           onChangeLang={props.onChangeLang} />
                     </ToolbarGroup>
                     <LanguageToolbarItem 
                        lang={LanguageType.EN}
                        onChangeLang={props.onChangeLang} />
                  </div>
               </ToolbarGroup>

               {/* Adding a separator below brand to keep a distance with the
               phone element. The phone element will be below brand on small screens */}
               <ToolbarGroup separator={ToolbarSepPos.DOWN | ToolbarSepPos.RIGHT}>
                  <BrandLargeToolbarItemView />
               </ToolbarGroup>
            </div>

            <div className={classes.RightItems}>
               <div className={classes.RightAbout}>
                  {/* Adding a separator below phone to keep a distance with the
                  email element - for small screens the email element will be below brand */}
                  <ToolbarGroup separator={ToolbarSepPos.DOWN}>
                        <PhoneToolbarItem />
                  </ToolbarGroup>
                  {/* The horizontal separator between email and phone is kept in the
                  same 'div' with email for the case when the email wraps, to keep
                  the email and phone right aligned. */}
                  <ToolbarGroup separator={ToolbarSepPos.DOWN | ToolbarSepPos.LEFT}>
                        <EmailToolbarItem />
                  </ToolbarGroup>
               </div>

               <div className={classes.RightBrand}>
                  <div className={commonClasses.LargeScreenOnly} >
                        <BrandSmallToolbarItemView/>
                  </div>
               </div>
            </div>

        </div>
    );
}

export default ClinicMainToolbar;