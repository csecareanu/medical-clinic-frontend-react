// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

export default () => (
    <MainLayout headerType={PageHeaderType.SITE_ADMIN}>
        <h1>Admin Doctors Page</h1>
    </MainLayout>
);
