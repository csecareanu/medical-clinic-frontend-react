// @flow

import React from 'react';

import classes from './EmailToolbarItem.module.css';
import imgEmail from '../../../../static/images/email.jpg';

const EmailToolbarItem = () => (
    <div className={classes.Email}>
        <img  src={imgEmail} alt="" className={classes.ImgEmail}/>
        <div className={classes.EmailText}>
            angelas88tudor@gmail.com
        </div>
    </div>
);

export default EmailToolbarItem;