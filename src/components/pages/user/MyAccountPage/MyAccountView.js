// @flow

import React from 'react';

import {UserAuthType} from '../../../../shared/UserAuthType';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import PatientMyAccountPage from '../../patient/PatientMyAccountPage/PatientMyAccountPage';
import DoctorMyAccountPage from '../../doctor/DoctorMyAccountPage/DoctorMyAccountPage';

type Props = {
    userAuthenticationStatus: number | Symbol
}
export default (props: Props) => {
    switch (props.userAuthenticationStatus) {
        case UserAuthType.PATIENT:
            return <PatientMyAccountPage />;
        case UserAuthType.DOCTOR:
            return <DoctorMyAccountPage />;
        case UserAuthType.UNAUTHENTICATED:
            return <NotificationMessage typeNeedAuthentication />
        default:
            console.log("MyAccountView. No account component when user authentication type is: ",
                props.userAuthenticationStatus);
            return null;
    }
}
