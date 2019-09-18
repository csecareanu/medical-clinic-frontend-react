
import React from 'react';

import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import MainHdrView from '../../../headers/MainHdrView/MainHdrView';

export default () => (
    <MainLayoutView header={<MainHdrView />}>
        <h1>Prices Page</h1>
    </MainLayoutView>
);
