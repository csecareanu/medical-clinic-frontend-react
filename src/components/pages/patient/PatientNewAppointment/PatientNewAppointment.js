// @flow

import * as React from 'react';

import { UserAuthType } from '../../../../shared/UserAuthType';
import PatientNewAppointmentContainer from './PatientNewAppointmentContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';

const PatientNewAppointment = () => (
    <PatientNewAppointmentContainer>
        {
            (containerData): React.Node => (
                containerData.userAuthStatus === UserAuthType.UNAUTHENTICATED
                    ? (containerData.askUserToLogon(), 
                        <PatientNewAppointmentView notAuthenticated /> 
                      )
                    : <PatientNewAppointmentView />
            )
        }
    </PatientNewAppointmentContainer>

);

export default PatientNewAppointment;