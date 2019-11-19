// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import ClinicService from './ClinicService/ClinicService';
import classes from './ClinicServices.module.css'
import imgAcupuncture from '../../../../../static/images/clinic_services/acupuncture.jpg'
import imgCupping from '../../../../../static/images/clinic_services/cupping.jpg'
import imgLaser from '../../../../../static/images/clinic_services/laser.jpg'
import imgMassage from '../../../../../static/images/clinic_services/massage.jpg'


export default () => 
{
    const acupunctureText = 
        <FormattedMessage id="title_acupuncture" defaultMessage={"ACUPUNCTURE"}/>;
    const cuppingTherapyText = 
        <FormattedMessage id="title_cupping_therapy" defaultMessage={"CUPPING THERAPY"}/>;
    const laserTherapyText = 
        <FormattedMessage id="title_laser_therapy" defaultMessage={"LASER THERAPY"}/>;
    const massageText = 
        <FormattedMessage id="title_massage" defaultMessage={"MASSAGE"}/>;
    
    return  (
        <React.Fragment>
            <div className={classes.Container}>
                <ClinicService img={imgAcupuncture} title={acupunctureText} />
                <ClinicService img={imgCupping} title={cuppingTherapyText} />
            </div>



            <div className={classes.Container}>
                <ClinicService img={imgLaser} title={laserTherapyText} />
                <ClinicService img={imgMassage} title={massageText} />
            </div>
        </React.Fragment>
    );
}