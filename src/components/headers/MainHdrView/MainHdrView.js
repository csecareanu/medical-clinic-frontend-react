import React from 'react';

import classes from './MainHdrView.module.css';
import imgMain from '../../../static/images/main_hdr.jpg'
import imgLogo from '../../../static/images/logo.jpg'
import PatientMainMenuView from '../../menus/PatientMainMenuView/PatientMainMenuView';
import DoctorMainMenuView from '../../menus/DoctorMainMenuView/DoctorMainMenuView';


export default () => (
    <header className={classes.HeaderContainer}>
        <nav>
            <div className={classes.LogoContainer}>
                <img  src={imgLogo} alt="site_logo"/>
            </div>
            <div className={classes.MenuContainer}>
                <DoctorMainMenuView />
                <PatientMainMenuView />
            </div>
            <img className={classes.MainImg} src={imgMain} alt=""/>
        </nav>
    </header>
);