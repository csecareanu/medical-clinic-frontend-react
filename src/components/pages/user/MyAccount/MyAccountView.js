// @flow

import React from 'react';

import { UserAuthType } from '../../../../shared/UserAuthType';
import PatientMyAccount from '../../patient/PatientMyAccount/PatientMyAccount';
import DoctorMyAccount from '../../doctor/DoctorMyAccount/DoctorMyAccount';

type Props = {
    userAuthStatus: number | Symbol
}
export default (props: Props) => {
    switch (props.userAuthStatus) {
        case UserAuthType.PATIENT:
            return <PatientMyAccount />;
        case UserAuthType.DOCTOR:
            return <DoctorMyAccount />;            
        default:
            console.log("MyAccountView. No account component when user authentication type is: ",
                props.userAuthStatus);
            return null;
    }
}
