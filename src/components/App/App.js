import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import PatientNewApptView from '../pages/patient/PatientNewApptView/PatientNewApptView';
import PatientAccountView from '../pages/patient/PatientAccountView/PatientAccountView';

import ClinicView from '../pages/Clinic/ClinicView';
import ClinicAboutView from '../pages/Clinic/ClinicAboutView/ClinicAboutView';
import ClinicContactView from '../pages/Clinic/ClinicContactView/ClinicContactView';
import ClinicDoctorsView from '../pages/Clinic/ClinicDoctorsView/ClinicDoctorsView';
import ClinicPricesView from '../pages/Clinic/ClinicPricesView/ClinicPricesView';

import DoctorView from '../pages/Doctor/DoctorView';
import DoctorMyAccountView from '../pages/Doctor/DoctorMyAccountView/DoctorMyAccountView';
import DoctorApptsInfoView from '../pages/Doctor/DoctorApptsInfoView/DoctorApptsInfoView';
import DoctorLogEventsView from '../pages/Doctor/DoctorLogEventsView/DoctorLogEventsView';
import DoctorNotifMsgsView from '../pages/Doctor/DoctorNotifMsgsView/DoctorNotifMsgsView';
import DoctorWorkingTimeView from '../pages/Doctor/DoctorWorkingTimeView/DoctorWorkingTimeView';
import DoctorPatientLoginView from '../pages/Doctor/DoctorPatientLoginView/DoctorPatientLoginView';

import SysAdminView from '../pages/SysAdmin/SysAdminView';
import SysAdminDoctorsView from '../pages/SysAdmin/SysAdminDoctorsView/SysAdminDoctorsView';
import SysAdminDoctorToSvcsView from '../pages/SysAdmin/SysAdminDoctorToSvcsView/SysAdminDoctorToSvcsView';
import SysAdminLogEventsView from '../pages/SysAdmin/SysAdminLogEventsView/SysAdminLogEventsView';
import SysAdminServicesView from '../pages/SysAdmin/SysAdminServicesView/SysAdminServicesView';
import SysAdminSettingsView from '../pages/SysAdmin/SysAdminSettingsView/SysAdminSettingsView';
import SysAdminSpecialtiesView from '../pages/SysAdmin/SysAdminSpecialtiesView/SysAdminSpecialtiesView';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={ClinicView} />
        <Route path="/appointment" component={PatientNewApptView} />
        <Route path ="/my_account" component={PatientAccountView} />
        <Route path="/doctors" component={ClinicDoctorsView} />
        <Route path="/prices" component={ClinicPricesView} />
        <Route path="/about" component={ClinicAboutView} />
        <Route path="/contact" component={ClinicContactView} />

        <Route path="/doctor" exact component={DoctorView} />
        <Route path="/doctor/patient_login" component={DoctorPatientLoginView} />
        <Route path="/doctor/my_account" exact component={DoctorMyAccountView} />
        <Route path="/doctor/appointments" component={DoctorApptsInfoView} />
        <Route path="/doctor/working_time" component={DoctorWorkingTimeView} />
        <Route path="/doctor/notification_msgs" component={DoctorNotifMsgsView} />
        <Route path="/doctor/log_events" component={DoctorLogEventsView} />

        <Route path="/admin" exact component={SysAdminView} />
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
