// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import { UserAuthType } from '../../../../shared/UserAuthType';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

type Props = {
    userAuthenticationStatus: number | Symbol,
    isUserConnectedToAPatientAccount: boolean
}

const PatientNewAppointmentPage = (props: Props) => {
    // Only a patient or a doctor connected to a patient account can see this page
    if (props.userAuthenticationStatus !== UserAuthType.PATIENT) {

        if (props.userAuthenticationStatus !== UserAuthType.DOCTOR) {
            return <NotificationMessage typeAccessNotAllowed />;
        }

        if (!props.isUserConnectedToAPatientAccount) {
            return <NotificationMessage typeNotConnectedToPatientAccount />;
        }
    }
    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <UnderConstruction title="Patient New/Modify Appointment" />
        </MainLayout>
    );
}

export default PatientNewAppointmentPage;
