import React from 'react';

import classes from './MainHdrView.module.css';
import imgMain from '../../../static/images/main_hdr.jpg'
import imgLogo from '../../../static/images/logo.jpg'
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';


export default () => (
    <header className={classes.HeaderContainer}>
        <nav>
            <div className={classes.LogoContainer}>
                <img  src={imgLogo} alt="site_logo"/>
            </div>
            <div className={classes.MenuContainer}>
                <DoctorMenuView />
                <ClinicMenuView />
            </div>
            <img className={classes.MainImg} src={imgMain} alt=""/>
        </nav>
    </header>
);