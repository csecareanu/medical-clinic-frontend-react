// @flow

import React from 'react';

import {PageHeaderType}  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

export default () => (
    <MainLayout headerType={PageHeaderType.MAIN}>
        <UnderConstruction title="Clinic About Page" />
    </MainLayout>
);
