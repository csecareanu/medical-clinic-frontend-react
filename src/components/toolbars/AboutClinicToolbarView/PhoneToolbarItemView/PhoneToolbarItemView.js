import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './PhoneToolbarItemView.module.css';
import imgPhone from '../../../../static/images/phone.jpg';

export default () => (
    <div className={classes.Phone}>
        <img  src={imgPhone} alt="" className={classes.ImgPhone}/>
        <div className={classes.PhoneTitle}>
            <FormattedMessage id="contact_us" defaultMessage={'Contact us:'}/>
        </div>
        <div className={classes.PhoneNo}>
            (+4) 0731-245-931
        </div>
    </div>
);