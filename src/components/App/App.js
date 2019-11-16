// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UIState from '../UIState/UIState';

import LogIntoPatientAccountView from '../pages/connect/LogIntoPatientAccountView/LogIntoPatientAccountView';
import LogOutPatientAccountView from '../pages/connect/LogOutPatientAccountView/LogOutPatientAccountView';

import ClinicMainPage from '../pages/clinic/ClinicMainPage/ClinicMainPage';
import ClinicAboutPage from '../pages/clinic/ClinicAboutPage/ClinicAboutPage';
import ClinicContactPage from '../pages/clinic/ClinicContactPage/ClinicContactPage';
import ClinicDoctorsPage from '../pages/clinic/ClinicDoctorsPage/ClinicDoctorsPage';
import ClinicPricesPage from '../pages/clinic/ClinicPricesPage/ClinicPricesPage';

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

function App() {
  return (
    <UIState>
      <Switch>
        <Route path="/" exact component={ClinicMainPage} />
        <Route path="/log_into_patient_account" component={LogIntoPatientAccountView} />
        <Route path="/log_out_patient_account" component={LogOutPatientAccountView} />

        <Route path="/appointment" component={PatientNewApptView} />
        <Route path ="/my_account" component={PatientAccountView} />
        <Route path="/doctors" component={ClinicDoctorsPage} />
        <Route path="/prices" component={ClinicPricesPage} />
        <Route path="/about" component={ClinicAboutPage} />
        <Route path="/contact" component={ClinicContactPage} />

        <Route path="/doctor" exact component={DoctorMainView} />
        <Route path="/doctor/my_account" exact component={DoctorMyAccountView} />
        <Route path="/doctor/appointments" component={DoctorApptsInfoView} />
        <Route path="/doctor/working_time" component={DoctorWorkingTimeView} />
        <Route path="/doctor/notifications_msgs" component={DoctorNotificationsMsgsView} />
        <Route path="/doctor/log_events" component={DoctorLogEventsView} />

        <Route path="/admin" exact component={SysAdminMainView} />
        <Route path="/admin/doctors" component={SysAdminDoctorsView} />
        <Route path="/admin/specialties" component={SysAdminSpecialtiesView} />
        <Route path="/admin/services" component={SysAdminServicesView} />
        <Route path="/admin/doctor_to_svcs" component={SysAdminDoctorToSvcsView} />
        <Route path="/admin/log_events" component={SysAdminLogEventsView} />
        <Route path="/admin/settings" component={SysAdminSettingsView} />
      </Switch>
    </UIState>
 );
}

export default App;
