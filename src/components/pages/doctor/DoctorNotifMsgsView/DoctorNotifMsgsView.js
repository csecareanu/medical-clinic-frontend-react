
import React from 'react';

import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';

export default () => (
    <MainLayoutView header={<DoctorAdminHdrView />}>
        <h1>Notification Messages Page</h1>
    </MainLayoutView>
);
