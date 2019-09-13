import React from 'react';

import classes from './MainHdrView.module.css';
import mainImg from '../../../static/images/main_hdr.jpg'
import PatientMainMenuView from '../../menus/PatientMainMenuView/PatientMainMenuView';
import DoctorMainMenuView from '../../menus/DoctorMainMenuView/DoctorMainMenuView';

export default () => (
    <header>
        <nav>
            <DoctorMainMenuView />
            <PatientMainMenuView />
            <img className={classes.MainImg} src={mainImg} alt=""/>
        </nav>
    </header>
);