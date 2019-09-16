import React from 'react';

import classes from './EmailToolbarItemView.module.css';
import imgEmail from '../../../../static/images/email.jpg';

export default () => (
    <div className={classes.Email}>
        <img  src={imgEmail} alt="" className={classes.ImgEmail}/>
        <div className={classes.EmailText}>
            angelas88tudor@gmail.com
        </div>
    </div>
);