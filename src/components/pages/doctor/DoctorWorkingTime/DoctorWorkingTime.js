// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCanAccessDoctorContent from '../../../shared/useCanAccessDoctorContent';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const DoctorWorkingTime = () => {
    if (!useCanAccessDoctorContent()) {
        return <AccessNotAllowedMsg/>
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <UnderConstruction title="Doctor Working Time Page" />
        </MainLayout>
    );
}

 export default DoctorWorkingTime;