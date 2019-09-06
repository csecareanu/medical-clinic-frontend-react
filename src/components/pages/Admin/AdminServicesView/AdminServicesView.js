
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import AdminHdrView from '../../../headers/AdminHdrView/AdminHdrView';

export default () => (
    <MainLayout header={<AdminHdrView />}>
        <h1>Admin Services Page</h1>
    </MainLayout>
);
