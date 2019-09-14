import React from 'react';
import { FormattedMessage } from 'react-intl';

import classesCommon from '../../../../common.module.css'
import classes from './ClinicMainView.module.css';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import MainHdrView from '../../../headers/MainHdrView/MainHdrView';
import ClinicServicesView from '../../../ClinicServicesView/ClinicServicesView';

export default () => {
    const clinicDescP1 = <FormattedMessage id="main_page_clinic_desc_1" defaultMessage={'Acupuncture is a complementary medical practice that entails stimulating certain points on the body, most often with a needle penetrating the skin, to alleviate pain or to help treat various health conditions.'}/>
    const clinicDescP2 = <FormattedMessage id="main_page_clinic_desc_w" defaultMessage={'Acupuncture dates back to at least 100 B.C., which is when an organized system of diagnosis and treatment using needles was first described in writing in China.'}/>
    return (
        <MainLayout header={<MainHdrView />}>
            <div className={classes.PageContainer}>
                <h1 className={classes.Title}>TAI CHI MEDICAL</h1>
                <div className={classes.ClinicDesc}>
                    <p className={classesCommon.ParagraphTextIndent}>{clinicDescP1}</p>
                    <p className={classesCommon.ParagraphTextIndent}>{clinicDescP2}</p>
                </div>

                <div className={classes.SectionSep}></div>

                <h1 className={classes.Title}>
                    <FormattedMessage id="main_page_clinic_desc_1" defaultMessage={'OUR SERVICES'} />
                </h1>
                <ClinicServicesView />

                <div className={classes.SectionSep}></div>
            </div>
        </MainLayout>
    );
}
