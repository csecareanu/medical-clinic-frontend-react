// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UIState from '../../react-context/UIState/UIState';

import ClinicMainPage from '../pages/clinic/ClinicMainPage/ClinicMainPage';
import ClinicAboutPage from '../pages/clinic/ClinicAboutPage/ClinicAboutPage';
import ClinicContactPage from '../pages/clinic/ClinicContactPage/ClinicContactPage';
import ClinicDoctorsPage from '../pages/clinic/ClinicDoctorsPage/ClinicDoctorsPage';
import ClinicPricesPage from '../pages/clinic/ClinicPricesPage/ClinicPricesPage';

import UserLogin from '../connect/UserLogin/UserLogin';
import UserLogout from '../connect/UserLogout/UserLogout';
import MyAccount from '../pages/user/MyAccount/MyAccount';

import LogIntoPatientAccount from '../connect/LogIntoPatientAccount/LogIntoPatientAccount';
import LogOutPatientAccount from '../connect/LogOutPatientAccount/LogOutPatientAccount';

import DoctorMain from '../pages/doctor/DoctorMain/DoctorMain';
import DoctorMyAccount from '../pages/doctor/DoctorMyAccount/DoctorMyAccount';
import DoctorApptsInfo from '../pages/doctor/DoctorApptsInfo/DoctorApptsInfo';
import DoctorLogEvents from '../pages/doctor/DoctorLogEvents/DoctorLogEvents';
import DoctorNotificationsMessages from '../pages/doctor/DoctorNotificationsMessages/DoctorNotificationsMessages';
import DoctorWorkingTime from '../pages/doctor/DoctorWorkingTime/DoctorWorkingTime';

import PatientNewAppointment from '../pages/patient/PatientNewAppointment/PatientNewAppointment';
import PatientMyAccount from '../pages/patient/PatientMyAccount/PatientMyAccount';

import SiteAdminMain from '../pages/siteAdmin/SiteAdminMain/SiteAdminMain';
import SiteAdminDoctors from '../pages/siteAdmin/SiteAdminDoctors/SiteAdminDoctors';
import SiteAdminDoctorToServices from '../pages/siteAdmin/SiteAdminDoctorToServices/SiteAdminDoctorToServices';
import SiteAdminLogEvents from '../pages/siteAdmin/SiteAdminLogEvents/SiteAdminLogEvents';
import SiteAdminServices from '../pages/siteAdmin/SiteAdminServices/SiteAdminServices';
import SiteAdminSettings from '../pages/siteAdmin/SiteAdminSettings/SiteAdminSettings';
import SiteAdminSpecialties from '../pages/siteAdmin/SiteAdminSpecialties/SiteAdminSpecialties';


import { 
  ClinicLinkLocationName,
  UserLinkLocationName,
  PatientLinkLocationName,
  DoctorLinkLocationName,
  SiteAdminLinkLocationName 
  } from '../../shared/LinkLocationNames';

function App() {
  return (
    <UIState>
      <Switch>
        {/* ClinicLinkLocationName */}
        <Route 
          path={ClinicLinkLocationName.HOME} 
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
          component={() => (
            <UserLogin navigateToURIOnCancel={ClinicLinkLocationName.HOME} />
            ) } 
        />
        <Route
          path={UserLinkLocationName.LOGOUT} 
          component={UserLogout} />
        <Route
          path={UserLinkLocationName.MY_ACCOUNT} 
          component={MyAccount} />

        {/* PatientLinkLocationName */}
        <Route 
          path={PatientLinkLocationName.NEW_APPOINTMENT} 
          component={PatientNewAppointment} />
        <Route 
          path={PatientLinkLocationName.MY_ACCOUNT} 
          component={PatientMyAccount} />

        {/* DoctorLinkLocationName */}
        <Route 
          path={DoctorLinkLocationName.LOG_INTO_PATIENT_ACCOUNT} 
          component={LogIntoPatientAccount} />
        <Route 
          path={DoctorLinkLocationName.LOG_OUT_PATIENT_ACCOUNT}  
          component={LogOutPatientAccount} />          
        <Route 
          path={DoctorLinkLocationName.HOME} 
          exact 
          component={DoctorMain} />
        <Route 
          path={DoctorLinkLocationName.MY_ACCOUNT} 
          exact 
          component={DoctorMyAccount} />
        <Route 
          path={DoctorLinkLocationName.APPOINTMENTS} 
          component={DoctorApptsInfo} />
        <Route 
          path={DoctorLinkLocationName.WORKING_TIME} 
          component={DoctorWorkingTime} />
        <Route 
          path={DoctorLinkLocationName.NOTIFICATION_MESSAGES} 
          component={DoctorNotificationsMessages} />
        <Route 
          path={DoctorLinkLocationName.LOG_EVENTS} 
          component={DoctorLogEvents} />

        {/* SiteAdminLinkLocationName */}
        <Route 
          path={SiteAdminLinkLocationName.HOME} 
          exact 
          component={SiteAdminMain} />
        <Route 
          path={SiteAdminLinkLocationName.DOCTORS} 
          component={SiteAdminDoctors} />
        <Route 
          path={SiteAdminLinkLocationName.SPECIALTIES} 
          component={SiteAdminSpecialties} />
        <Route 
          path={SiteAdminLinkLocationName.SERVICES} 
          component={SiteAdminServices} />
        <Route 
          path={SiteAdminLinkLocationName.ASSIGN_SERVICES_TO_DOCTOR} 
          component={SiteAdminDoctorToServices} />
        <Route 
          path={SiteAdminLinkLocationName.LOG_EVENTS} 
          component={SiteAdminLogEvents} />
        <Route 
          path={SiteAdminLinkLocationName.SETTINGS} 
          component={SiteAdminSettings} />
      </Switch>
    </UIState>
 );
}

export default App;
