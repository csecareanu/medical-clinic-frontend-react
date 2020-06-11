// @flow
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {IntlProvider} from 'react-intl';

import UIStateContext from '../../react-context/UIState/UIState-context';
import {LanguageType} from '../../shared/LanguageType';

import ClinicMainPage from '../pages/clinic/ClinicMainPage/ClinicMainPage';
import ClinicAboutPage from '../pages/clinic/ClinicAboutPage/ClinicAboutPage';
import ClinicContactPage from '../pages/clinic/ClinicContactPage/ClinicContactPage';
import ClinicDoctorsPage from '../pages/clinic/ClinicDoctorsPage/ClinicDoctorsPage';
import ClinicPricesPage from '../pages/clinic/ClinicPricesPage/ClinicPricesPage';

import UserAuthenticationModal from '../pages/user/UserAuthenticationModal/UserAuthenticationModal';
import UserLogout from '../pages/user/UserLogout/UserLogout';
import MyAccountPage from '../pages/user/MyAccountPage/MyAccountPage';

import LogIntoPatientAccountPage 
    from '../pages/user/LogIntoPatientAccountPage/LogIntoPatientAccountPage';
import LogOutPatientAccount 
    from '../pages/user/LogOutPatientAccount/LogOutPatientAccount';

import DoctorMainPage from '../pages/doctor/DoctorMainPage/DoctorMainPage';
import DoctorMyAccountPage from '../pages/doctor/DoctorMyAccountPage/DoctorMyAccountPage';
import DoctorApptsInfoPage from '../pages/doctor/DoctorApptsInfoPage/DoctorApptsInfoPage';
import DoctorLogEventsPage from '../pages/doctor/DoctorLogEventsPage/DoctorLogEventsPage';
import DoctorNotificationsMessagesPage 
  from '../pages/doctor/DoctorNotificationsMessagesPage/DoctorNotificationsMessagesPage';
import DoctorWorkingTimePage from '../pages/doctor/DoctorWorkingTimePage/DoctorWorkingTimePage';

import PatientNewAppointmentPage 
  from '../pages/patient/PatientNewAppointmentPage/PatientNewAppointmentPage';
import PatientMyAccountPage from '../pages/patient/PatientMyAccountPage/PatientMyAccountPage';

import SiteAdminMainPage from '../pages/siteAdmin/SiteAdminMainPage/SiteAdminMainPage';
import SiteAdminDoctorsPage from '../pages/siteAdmin/SiteAdminDoctorsPage/SiteAdminDoctorsPage';
import SiteAdminDoctorToServicesPage 
  from '../pages/siteAdmin/SiteAdminDoctorToServicesPage/SiteAdminDoctorToServicesPage';
import SiteAdminLogEventsPage from '../pages/siteAdmin/SiteAdminLogEventsPage/SiteAdminLogEventsPage';
import SiteAdminServicesPage from '../pages/siteAdmin/SiteAdminServicesPage/SiteAdminServicesPage';
import SiteAdminSettingsPage from '../pages/siteAdmin/SiteAdminSettingsPage/SiteAdminSettingsPage';
import SiteAdminSpecialtiesPage 
  from '../pages/siteAdmin/SiteAdminSpecialtiesPage/SiteAdminSpecialtiesPage';
import {
  ClinicLinkLocationName,
  UserLinkLocationName,
  PatientLinkLocationName,
  DoctorLinkLocationName,
  SiteAdminLinkLocationName 
  } from '../../shared/LinkLocationNames';
import messages_en from '../.././translations/en.json';
import messages_ro from '../.././translations/ro.json';

function App() {
   const uiStateContext = React.useContext(UIStateContext);

   // get the language of the browser
   // const language = navigator.language.split(/[-_]/)[0];  // language without region code

   const languages = new Map();
   languages.set(LanguageType.RO, {locale: 'ro', messages: messages_ro});
   languages.set(LanguageType.EN, {locale: 'en', messages: messages_en});

   let currLang = uiStateContext.language;
 
   if (!languages.has(currLang)) {
      console.log("App component. Unknown language: " + currLang.toString());
      currLang = LanguageType.RO;
   }

  return (
   <IntlProvider {...languages.get(currLang)}>  
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
            <UserAuthenticationModal navigateToURIOnCancel={ClinicLinkLocationName.HOME} />
            ) } 
      />
      <Route
         path={UserLinkLocationName.LOGOUT} 
         component={UserLogout} />
      <Route
         path={UserLinkLocationName.MY_ACCOUNT} 
         component={MyAccountPage} />

      {/* PatientLinkLocationName */}
      <Route 
         path={PatientLinkLocationName.NEW_APPOINTMENT} 
         component={PatientNewAppointmentPage} />
      <Route 
         path={PatientLinkLocationName.MY_ACCOUNT} 
         component={PatientMyAccountPage} />

      {/* DoctorLinkLocationName */}
      <Route 
         path={DoctorLinkLocationName.LOG_INTO_PATIENT_ACCOUNT} 
         component={LogIntoPatientAccountPage} />
      <Route 
         path={DoctorLinkLocationName.LOG_OUT_PATIENT_ACCOUNT}  
         component={LogOutPatientAccount} />          
      <Route 
         path={DoctorLinkLocationName.HOME} 
         exact 
         component={DoctorMainPage} />
      <Route 
         path={DoctorLinkLocationName.MY_ACCOUNT} 
         exact 
         component={DoctorMyAccountPage} />
      <Route 
         path={DoctorLinkLocationName.APPOINTMENTS} 
         component={DoctorApptsInfoPage} />
      <Route 
         path={DoctorLinkLocationName.WORKING_TIME} 
         component={DoctorWorkingTimePage} />
      <Route 
         path={DoctorLinkLocationName.NOTIFICATION_MESSAGES} 
         component={DoctorNotificationsMessagesPage} />
      <Route 
         path={DoctorLinkLocationName.LOG_EVENTS} 
         component={DoctorLogEventsPage} />

      {/* SiteAdminLinkLocationName */}
      <Route 
         path={SiteAdminLinkLocationName.HOME} 
         exact 
         component={SiteAdminMainPage} />
      <Route 
         path={SiteAdminLinkLocationName.DOCTORS} 
         component={SiteAdminDoctorsPage} />
      <Route 
         path={SiteAdminLinkLocationName.SPECIALTIES} 
         component={SiteAdminSpecialtiesPage} />
      <Route 
         path={SiteAdminLinkLocationName.SERVICES} 
         component={SiteAdminServicesPage} />
      <Route 
         path={SiteAdminLinkLocationName.ASSIGN_SERVICES_TO_DOCTOR} 
         component={SiteAdminDoctorToServicesPage} />
      <Route 
         path={SiteAdminLinkLocationName.LOG_EVENTS} 
         component={SiteAdminLogEventsPage} />
      <Route 
         path={SiteAdminLinkLocationName.SETTINGS} 
         component={SiteAdminSettingsPage} />
      </Switch>
   </IntlProvider>
 );
}

export default App;
