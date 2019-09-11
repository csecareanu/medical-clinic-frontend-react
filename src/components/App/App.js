import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import PatientNewApptView from '../pages/patient/PatientNewApptView/PatientNewApptView';
import PatientAccountView from '../pages/patient/PatientAccountView/PatientAccountView';

import ClinicMainView from '../pages/clinic/ClinicMainView/ClinicMainView';
import ClinicAboutView from '../pages/clinic/ClinicAboutView/ClinicAboutView';
import ClinicContactView from '../pages/clinic/ClinicContactView/ClinicContactView';
import ClinicDoctorsView from '../pages/clinic/ClinicDoctorsView/ClinicDoctorsView';
import ClinicPricesView from '../pages/clinic/ClinicPricesView/ClinicPricesView';
import ClinicUserLoginView from '../pages/clinic/ClinicUserLoginView/ClinicUserLoginView';
import ClinicUserLogoutView from '../pages/clinic/ClinicUserLogoutView/ClinicUserLogoutView';

import DoctorMainView from '../pages/doctor/DoctorMainView/DoctorMainView';
import DoctorMyAccountView from '../pages/doctor/DoctorMyAccountView/DoctorMyAccountView';
import DoctorApptsInfoView from '../pages/doctor/DoctorApptsInfoView/DoctorApptsInfoView';
import DoctorLogEventsView from '../pages/doctor/DoctorLogEventsView/DoctorLogEventsView';
import DoctorNotifMsgsView from '../pages/doctor/DoctorNotifMsgsView/DoctorNotifMsgsView';
import DoctorWorkingTimeView from '../pages/doctor/DoctorWorkingTimeView/DoctorWorkingTimeView';
import DoctorPatientLoginView from '../pages/doctor/DoctorPatientLoginView/DoctorPatientLoginView';

import SysAdminMainView from '../pages/sysAdmin/SysAdminMainView/SysAdminMainView';
import SysAdminDoctorsView from '../pages/sysAdmin/SysAdminDoctorsView/SysAdminDoctorsView';
import SysAdminDoctorToSvcsView from '../pages/sysAdmin/SysAdminDoctorToSvcsView/SysAdminDoctorToSvcsView';
import SysAdminLogEventsView from '../pages/sysAdmin/SysAdminLogEventsView/SysAdminLogEventsView';
import SysAdminServicesView from '../pages/sysAdmin/SysAdminServicesView/SysAdminServicesView';
import SysAdminSettingsView from '../pages/sysAdmin/SysAdminSettingsView/SysAdminSettingsView';
import SysAdminSpecialtiesView from '../pages/sysAdmin/SysAdminSpecialtiesView/SysAdminSpecialtiesView';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ClinicMainView} />
        <Route path="/login" component={ClinicUserLoginView} />
        <Route path="/logout" component={ClinicUserLogoutView} />
        <Route path="/appointment" component={PatientNewApptView} />
        <Route path ="/my_account" component={PatientAccountView} />
        <Route path="/doctors" component={ClinicDoctorsView} />
        <Route path="/prices" component={ClinicPricesView} />
        <Route path="/about" component={ClinicAboutView} />
        <Route path="/contact" component={ClinicContactView} />

        <Route path="/doctor" exact component={DoctorMainView} />
        <Route path="/doctor/patient_login" component={DoctorPatientLoginView} />
        <Route path="/doctor/my_account" exact component={DoctorMyAccountView} />
        <Route path="/doctor/appointments" component={DoctorApptsInfoView} />
        <Route path="/doctor/working_time" component={DoctorWorkingTimeView} />
        <Route path="/doctor/notification_msgs" component={DoctorNotifMsgsView} />
        <Route path="/doctor/log_events" component={DoctorLogEventsView} />

        <Route path="/admin" exact component={SysAdminMainView} />
        <Route path="/admin/doctors" component={SysAdminDoctorsView} />
        <Route path="/admin/specialties" component={SysAdminSpecialtiesView} />
        <Route path="/admin/services" component={SysAdminServicesView} />
        <Route path="/admin/doctor_to_svcs" component={SysAdminDoctorToSvcsView} />
        <Route path="/admin/log_events" component={SysAdminLogEventsView} />
        <Route path="/admin/settings" component={SysAdminSettingsView} />
      </Switch>
    </div>
 );
}

export default App;
