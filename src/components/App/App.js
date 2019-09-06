import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';
import ClinicView from '../pages/Clinic/ClinicView';

import PatientNewApptView from '../pages/patient/PatientNewApptView/PatientNewApptView';
import PatientAccountView from '../pages/patient/PatientAccountView/PatientAccountView';

import ClinicAboutView from '../pages/Clinic/ClinicAboutView/ClinicAboutView';
import ClinicContactView from '../pages/Clinic/ClinicContactView/ClinicContactView';
import ClinicDoctorsView from '../pages/Clinic/ClinicDoctorsView/ClinicDoctorsView';
import ClinicPricesView from '../pages/Clinic/ClinicPricesView/ClinicPricesView';

import AdminView from '../pages/Admin/AdminView';
import AdminDoctorsView from '../pages/Admin/AdminDoctorsView/AdminDoctorsView';
import AdminSpecialtiesView from '../pages/Admin/AdminSpecialitiesView/AdminSpecialtiesView';
import AdminServicesView from '../pages/Admin/AdminServicesView/AdminServicesView';
import AdminDoctorToSvcsView from '../pages/Admin/AdminDoctorToSvcsView/AdminDoctorToSvcsView';
import AdminLogEventsView from '../pages/Admin/AdminLogEventsView/AdminLogEventsView';
import AdminSettingsView from '../pages/Admin/AdminSettingsView/AdminSettingsView';

import DoctorView from '../pages/Doctor/DoctorView';
import DoctorApptsInfoView from '../pages/Doctor/DoctorApptsInfoView/DoctorApptsInfoView';
import DoctorWorkingTimeView from '../pages/Doctor/DoctorWorkingTimeView/DoctorWorkingTimeView';
import DoctorNotifMsgs from '../pages/Doctor/DoctorNotifMsgs/DoctorNotifMsgs';
import DoctorLogEventsView from '../pages/Doctor/DoctorLogEventsView/DoctorLogEventsView';

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
        <Route path="/doctor/appointments" component={DoctorApptsInfoView} />
        <Route path="/doctor/working_time" component={DoctorWorkingTimeView} />
        <Route path="/doctor/notification_msgs" component={DoctorNotifMsgs} />
        <Route path="/doctor/log_events" component={DoctorLogEventsView} />

        <Route path="/admin" exact component={AdminView} />
        <Route path="/admin/doctors" component={AdminDoctorsView} />
        <Route path="/admin/specialties" component={AdminSpecialtiesView} />
        <Route path="/admin/services" component={AdminServicesView} />
        <Route path="/admin/doctor_to_svcs" component={AdminDoctorToSvcsView} />
        <Route path="/admin/log_events" component={AdminLogEventsView} />
        <Route path="/admin/settings" component={AdminSettingsView} />
      </Switch>
    </div>
 );
}

export default App;
