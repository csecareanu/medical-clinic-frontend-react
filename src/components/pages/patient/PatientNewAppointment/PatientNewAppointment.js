// @flow

import * as React from 'react';

import { UserAuthType } from '../../../../shared/UserAuthType';
import { DoctorMenuItem }  from '../../../../shared/MenuItemIdentifiers';
import NavContainer from '../../../NavContainer/NavContainer';
import PatientNewAppointmentView from './PatientNewAppointmentView';


const PatientAccount = () => (
    <NavContainer>
    {
        (navigationData) => {
            if (navigationData.userAuthStatus === UserAuthType.DOCTOR && 
                navigationData.isUserConnectedToAPatientAccount === false) {
                    navigationData.onClinicMenuItemSelect(DoctorMenuItem.LOG_INTO_PATIENT_ACCOUNT);
            }
            
            return (
                <PatientNewAppointmentView
                    userAuthStatus={navigationData.userAuthStatus}
                    isUserConnectedToAPatientAccount={navigationData.isUserConnectedToAPatientAccount}
                />
            );
        }
    }
    </NavContainer>
)

export default PatientAccount;