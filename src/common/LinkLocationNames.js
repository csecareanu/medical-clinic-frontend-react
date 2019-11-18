// @flow

export const ClinicLinkLocationName = {
    ROOT: "/",
    DOCTORS: "/doctors",
    PRICES: "/prices",
    ABOUT: "/about",
    CONTACT: "/contact"
}

export const UserLinkLocationName = {
    LOGIN: "/login",
    LOGOUT: "/logout"
}

export const PatientLinkLocationName = {
    APPOINTMENT: "/appointment",
    MY_ACCOUNT: "/my_account"
}

export const DoctorLinkLocationName = {
    ROOT: "/doctor",
    LOG_INTO_PATIENT_ACCOUNT: "/log_into_patient_account",
    LOG_OUT_PATIENT_ACCOUNT: "/log_out_patient_account",
    MY_ACCOUNT: "/doctor/my_account",
    APPOINTMENTS: "/doctor/appointments",
    WORKING_TIME: "/doctor/working_time",
    NOTIFICATION_MESSAGES: "/doctor/notifications_msgs",
    LOG_EVENTS: "/doctor/log_events"
}

export const SysAdminLinkLocationName = {
    ROOT: "/admin",
    DOCTORS: "/admin/doctors",
    SPECIALTIES: "/admin/specialties",
    SERVICES: "/admin/services",
    ASSIGN_SERVICES_TO_DOCTOR: "/admin/doctor_to_svcs",
    LOG_EVENTS: "/admin/log_events",
    SETTINGS: "/admin/settings"
}