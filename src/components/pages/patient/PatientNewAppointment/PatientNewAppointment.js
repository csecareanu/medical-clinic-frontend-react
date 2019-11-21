// @flow

import React from 'react';

import { UserAuthType } from '../../../../common/UserAuthType';
import { ClinicLinkLocationName } from '../../../../common/LinkLocationNames';
import PatientNewAppointmentContainer from './PatientNewAppointmentContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';
import UserLogin from '../../connect/UserLogin/UserLogin';


const PatientNewAppointment = () => (
    <PatientNewAppointmentContainer>
        {
            (containerData) => (
                containerData.userAuthStatus === UserAuthType.UNAUTHENTICATED
                    ? <UserLogin navigateToURIOnCancel={ClinicLinkLocationName.ROOT} />
                    : <PatientNewAppointmentView />
            )
        }
    </PatientNewAppointmentContainer>

);

export default PatientNewAppointment;