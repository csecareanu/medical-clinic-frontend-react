import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './PhoneToolbarItem.module.css';
import imgPhone from '../../../../static/images/phone.jpg';

export default () => (
    <div className={classes.Phone}>
        <img  src={imgPhone} alt="" className={classes.ImgPhone}/>
        <div className={classes.PhoneLabel}>
            <FormattedMessage id="toolbars.about-clinic-toolbar.phone-toolbar-item.contact_us" />
        </div>
        <div className={classes.PhoneNo}>
            {/*TODO from DB */}
            (+4) 0731-245-931
        </div>
    </div>
);