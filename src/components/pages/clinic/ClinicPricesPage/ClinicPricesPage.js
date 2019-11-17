// @flow

import React from 'react';

import MainLayoutContainer from '../../../layouts/MainLayoutContainer/MainLayoutContainer';
import MainHdrView from '../../../headers/MainHdrView/MainHdrView';

export default () => (
    <MainLayoutContainer header={<MainHdrView />}>
        <h1>Prices Page</h1>
    </MainLayoutContainer>
);
