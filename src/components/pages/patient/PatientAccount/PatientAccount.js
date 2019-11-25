// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../common/UnderConstruction/UnderConstruction';

export default () => (
    <MainLayout headerType={PageHeaderType.MAIN}>
        <UnderConstruction title="Patient My account Page" />
    </MainLayout>
);
