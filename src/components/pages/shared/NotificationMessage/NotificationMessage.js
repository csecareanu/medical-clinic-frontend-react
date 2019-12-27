// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import NotificationMessageView from './NotificationMessageView';

type Props = {

}

const NotificationMessage = (props: Props) => (
    <NavContainer>
    {
        (navigationData) => (
            <NotificationMessageView 
                {...props}
                onClinicItemSelect={navigationData.onClinicItemSelect} 
            />
        )
    }
    </NavContainer>
)

export default NotificationMessage;