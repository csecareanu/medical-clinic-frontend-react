// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './ClinicMainPage.module.css';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import MainHeader from '../../../headers/MainHeader/MainHeader';
import ClinicServicesView from './src/ClinicServicesView/ClinicServicesView';
import ClinicDescView from './src/ClinicDescView/ClinicDescView';
import ClinicMainTitleView from './src/ClinicMainTitleView/ClinicMainTitleView';

export default () => {
    const clinicNameText =  <FormattedMessage id="main_page_clinic_name" defaultMessage={'TAI CHI MEDICAL'} />;
    const clinicOurServicesText =  <FormattedMessage id="main_page_our_services" defaultMessage={'OUR SERVICES'} />;
    return (
        <MainLayout header={<MainHeader />}>

            <div className={classes.MainView}>
                
                <ClinicMainTitleView text={clinicNameText} />
                <ClinicDescView />

                <div className={classes.SectionSep}></div>

                <ClinicMainTitleView text={clinicOurServicesText} />
                <ClinicServicesView />

                <div className={classes.SectionSep}></div>
            </div>
        </MainLayout>
    );
}
