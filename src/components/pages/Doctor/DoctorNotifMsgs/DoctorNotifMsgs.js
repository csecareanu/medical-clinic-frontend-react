
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorHdrView from '../../../headers/DoctorHdrView/DoctorHdrView';

export default () => (
    <MainLayout header={<DoctorHdrView />}>
        <h1>Notification Messages Page</h1>
    </MainLayout>
);
