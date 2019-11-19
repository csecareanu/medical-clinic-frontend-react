// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UIState from '../../react-context/UIState/UIState';

import ClinicMainPage from '../pages/clinic/ClinicMainPage/ClinicMainPage';
import ClinicAboutPage from '../pages/clinic/ClinicAboutPage/ClinicAboutPage';
import ClinicContactPage from '../pages/clinic/ClinicContactPage/ClinicContactPage';
import ClinicDoctorsPage from '../pages/clinic/ClinicDoctorsPage/ClinicDoctorsPage';
import ClinicPricesPage from '../pages/clinic/ClinicPricesPage/ClinicPricesPage';

import UserLogin from '../pages/connect/UserLogin/UserLogin';
import UserLogoutView from '../pages/connect/UserLogoutView/UserLogoutView';

import LogIntoPatientAccountView from '../pages/connect/LogIntoPatientAccountView/LogIntoPatientAccountView';
import LogOutPatientAccountView from '../pages/connect/LogOutPatientAccountView/LogOutPatientAccountView';

import DoctorMainView from '../pages/doctor/DoctorMainView/DoctorMainView';
import DoctorMyAccountView from '../pages/doctor/DoctorMyAccountView/DoctorMyAccountView';
import DoctorApptsInfoView from '../pages/doctor/DoctorApptsInfoView/DoctorApptsInfoView';
import DoctorLogEventsView from '../pages/doctor/DoctorLogEventsView/DoctorLogEventsView';
import DoctorNotificationsMsgsView from '../pages/doctor/DoctorNotificationsMsgsView/DoctorNotificationsMsgsView';
import DoctorWorkingTimeView from '../pages/doctor/DoctorWorkingTimeView/DoctorWorkingTimeView';

import PatientNewApptView from '../pages/patient/PatientNewApptView/PatientNewApptView';
import PatientAccountView from '../pages/patient/PatientAccountView/PatientAccountView';

import SysAdminMainView from '../pages/sysAdmin/SysAdminMainView/SysAdminMainView';
import SysAdminDoctorsView from '../pages/sysAdmin/SysAdminDoctorsView/SysAdminDoctorsView';
import SysAdminDoctorToSvcsView from '../pages/sysAdmin/SysAdminDoctorToSvcsView/SysAdminDoctorToSvcsView';
import SysAdminLogEventsView from '../pages/sysAdmin/SysAdminLogEventsView/SysAdminLogEventsView';
import SysAdminServicesView from '../pages/sysAdmin/SysAdminServicesView/SysAdminServicesView';
import SysAdminSettingsView from '../pages/sysAdmin/SysAdminSettingsView/SysAdminSettingsView';
import SysAdminSpecialtiesView from '../pages/sysAdmin/SysAdminSpecialtiesView/SysAdminSpecialtiesView';

import { 
  ClinicLinkLocationName,
  UserLinkLocationName,
  PatientLinkLocationName,
  DoctorLinkLocationName,
  SysAdminLinkLocationName 
  } from '../../common/LinkLocationNames';

function App() {
  return (
    <UIState>
      <Switch>
        {/* ClinicLinkLocationName */}
        <Route 
          path={ClinicLinkLocationName.ROOT} 
          exact 
          component={ClinicMainPage} />
        <Route 
          path={ClinicLinkLocationName.DOCTORS} 
          component={ClinicDoctorsPage} />
        <Route 
          path={ClinicLinkLocationName.PRICES} 
          component={ClinicPricesPage} />
        <Route 
          path={ClinicLinkLocationName.ABOUT} 
          component={ClinicAboutPage} />
        <Route 
          path={ClinicLinkLocationName.CONTACT} 
          component={ClinicContactPage} />

        {/* UserLinkLocationName */}
        <Route
          path={UserLinkLocationName.LOGIN} 
          component={UserLogin} />
        <Route
          path={UserLinkLocationName.LOGOUT} 
          component={UserLogoutView} />

        {/* PatientLinkLocationName */}
        <Route 
          path={PatientLinkLocationName.NEW_APPOINTMENT} 
          component={PatientNewApptView} />
        <Route 
          path={PatientLinkLocationName.MY_ACCOUNT} 
          component={PatientAccountView} />

        {/* DoctorLinkLocationName */}
        <Route 
          path={DoctorLinkLocationName.LOG_INTO_PATIENT_ACCOUNT} 
          component={LogIntoPatientAccountView} />
        <Route 
          path={DoctorLinkLocationName.LOG_OUT_PATIENT_ACCOUNT}  
          component={LogOutPatientAccountView} />          
        <Route 
          path={DoctorLinkLocationName.ROOT} 
          exact 
          component={DoctorMainView} />
        <Route 
          path={DoctorLinkLocationName.MY_ACCOUNT} 
          exact 
          component={DoctorMyAccountView} />
        <Route 
          path={DoctorLinkLocationName.APPOINTMENTS} 
          component={DoctorApptsInfoView} />
        <Route 
          path={DoctorLinkLocationName.WORKING_TIME} 
          component={DoctorWorkingTimeView} />
        <Route 
          path={DoctorLinkLocationName.NOTIFICATION_MESSAGES} 
          component={DoctorNotificationsMsgsView} />
        <Route 
          path={DoctorLinkLocationName.LOG_EVENTS} 
          component={DoctorLogEventsView} />

        {/* SysAdminLinkLocationName */}
        <Route 
          path={SysAdminLinkLocationName.ROOT} 
          exact 
          component={SysAdminMainView} />
        <Route 
          path={SysAdminLinkLocationName.DOCTORS} 
          component={SysAdminDoctorsView} />
        <Route 
          path={SysAdminLinkLocationName.SPECIALTIES} 
          component={SysAdminSpecialtiesView} />
        <Route 
          path={SysAdminLinkLocationName.SERVICES} 
          component={SysAdminServicesView} />
        <Route 
          path={SysAdminLinkLocationName.ASSIGN_SERVICES_TO_DOCTOR} 
          component={SysAdminDoctorToSvcsView} />
        <Route 
          path={SysAdminLinkLocationName.LOG_EVENTS} 
          component={SysAdminLogEventsView} />
        <Route 
          path={SysAdminLinkLocationName.SETTINGS} 
          component={SysAdminSettingsView} />
      </Switch>
    </UIState>
 );
}

export default App;
