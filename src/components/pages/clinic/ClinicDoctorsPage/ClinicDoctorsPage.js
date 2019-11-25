// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../common/UnderConstruction/UnderConstruction';

const ClinicDoctorsPage = () => (
    <MainLayout headerType={PageHeaderType.MAIN}>
        <UnderConstruction title="Clinic Doctors Page" />
    </MainLayout>
);

export default ClinicDoctorsPage;