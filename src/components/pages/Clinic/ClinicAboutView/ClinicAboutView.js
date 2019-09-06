
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import MainHdrView from '../../../headers/MainHdrView/MainHdrView';

export default () => (
    <MainLayout header={<MainHdrView />}>
        <h1>About Page</h1>
    </MainLayout>
);
