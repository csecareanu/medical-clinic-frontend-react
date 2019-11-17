
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import SysAdminHdrView from '../../../headers/SysAdminHdrView/SysAdminHdrView';

export default () => (
    <MainLayout header={<SysAdminHdrView />}>
        <h1>Admin Settings Page</h1>
    </MainLayout>
);
