// @flow

import React from 'react';

import { UserAuthType } from '../../../../common/UserAuthType';
//import { ClinicLinkLocationName } from '../../../../common/LinkLocationNames';
import PatientNewAppointmentContainer from './PatientNewAppointmentContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';


const PatientNewAppointment = () => (
    <PatientNewAppointmentContainer>
        {
            (containerData) => (
                containerData.userAuthStatus === UserAuthType.UNAUTHENTICATED
                    ? null //<UserLogin navigateToURIOnCancel={ClinicLinkLocationName.ROOT} />
                    : <PatientNewAppointmentView />
            )
        }
    </PatientNewAppointmentContainer>

);

export default PatientNewAppointment;