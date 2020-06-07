// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './ClinicMainPage.module.css';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import ClinicServices from './ClinicServices/ClinicServices';
import ClinicDescription from './ClinicDescription/ClinicDescription';
import ClinicMainTitle from './ClinicMainTitle/ClinicMainTitle';

export default () => {
    return (
        <MainLayout headerType={PageHeaderType.MAIN}>

            <div className={classes.MainView}>
                
                <ClinicMainTitle 
                  text={<FormattedMessage id="pages.clinic-main-page.clinic-name" />} />
                <ClinicDescription />

                <div className={classes.SectionSep}></div>

                <ClinicMainTitle 
                  text={<FormattedMessage id="pages.clinic-main-page.our-services" />} />
                <ClinicServices />

                <div className={classes.SectionSep}></div>
            </div>
        </MainLayout>
    );
}
