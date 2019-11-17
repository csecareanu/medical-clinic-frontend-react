// @flow

import React from 'react';

import MainLayoutContainer from '../../../layouts/MainLayoutContainer/MainLayoutContainer';
import MainHdrView from '../../../headers/MainHdrView/MainHdrView';

export default () => (
    <MainLayoutContainer header={<MainHdrView />}>
        <h1>About Page</h1>
    </MainLayoutContainer>
);
