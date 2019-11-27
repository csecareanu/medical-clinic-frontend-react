// @flow

import * as React from 'react';

import { UserAuthType } from '../../../../shared/UserAuthType';
import useCanAccessPatientContent from '../../../shared/useCanAccessPatientContent';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import PatientNewAppointmentContainer from './PatientNewAppointmentContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';

const PatientNewAppointment = () => {
    if (!useCanAccessPatientContent()) {
        return <AccessNotAllowedMsg/>
    }

    return (
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
}

export default PatientNewAppointment;