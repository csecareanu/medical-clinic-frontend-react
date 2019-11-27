// @flow

import * as React from 'react';

import { UserAuthType } from '../../../../shared/UserAuthType';
import useCheckUserAccessAllowed from '../shared/useCheckUserAccessAllowed';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import PatientNewAppointmentContainer from './PatientNewAppointmentContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';

const PatientNewAppointment = () => {
    if (!useCheckUserAccessAllowed()) {
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