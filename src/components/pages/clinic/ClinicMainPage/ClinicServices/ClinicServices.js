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
    return  (
        <React.Fragment>
            <div className={classes.Container}>
                <ClinicService 
                  img={imgAcupuncture} 
                  title={<FormattedMessage 
                           id="pages.clinic-main-page.clinic-services.acupuncture" />
                  } />
                <ClinicService 
                  img={imgCupping} 
                  title={<FormattedMessage 
                           id="pages.clinic-main-page.clinic-services.cupping-therapy" />
                  } />
            </div>

            <div className={classes.Container}>
                <ClinicService 
                  img={imgLaser} 
                  title={<FormattedMessage 
                           id="pages.clinic-main-page.clinic-services.laser-therapy" />
                  } />
                <ClinicService 
                  img={imgMassage} 
                  title={<FormattedMessage 
                           id="pages.clinic-main-page.clinic-services.massage" />
                  } />
            </div>
        </React.Fragment>
    );
}