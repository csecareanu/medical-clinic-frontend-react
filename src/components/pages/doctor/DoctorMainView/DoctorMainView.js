
import React from 'react';

import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';

const DoctorMainView = () => {
    return (
        <MainLayoutView header={<DoctorAdminHdrView />}>
        </MainLayoutView>
    )
}

export default DoctorMainView;