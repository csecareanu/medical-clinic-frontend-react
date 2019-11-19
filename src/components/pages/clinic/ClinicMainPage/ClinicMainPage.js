// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './ClinicMainPage.module.css';
import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import ClinicServices from './ClinicServices/ClinicServices';
import ClinicDescription from './ClinicDescription/ClinicDescription';
import ClinicMainTitle from './ClinicMainTitle/ClinicMainTitle';

export default () => {
    const clinicNameText =  <FormattedMessage id="main_page_clinic_name" defaultMessage={'TAI CHI MEDICAL'} />;
    const clinicOurServicesText =  <FormattedMessage id="main_page_our_services" defaultMessage={'OUR SERVICES'} />;
    return (
        <MainLayout headerType={PageHeaderType.MAIN}>

            <div className={classes.MainView}>
                
                <ClinicMainTitle text={clinicNameText} />
                <ClinicDescription />

                <div className={classes.SectionSep}></div>

                <ClinicMainTitle text={clinicOurServicesText} />
                <ClinicServices />

                <div className={classes.SectionSep}></div>
            </div>
        </MainLayout>
    );
}
