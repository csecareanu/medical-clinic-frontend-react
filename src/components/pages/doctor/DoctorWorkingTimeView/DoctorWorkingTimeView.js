import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorHeader from '../../../headers/DoctorHeader/DoctorHeader';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorWorkingTimeView = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout header={<DoctorHeader />}>
            <h1>Working Time Page</h1>
        </MainLayout>
    );
}

 export default DoctorWorkingTimeView;