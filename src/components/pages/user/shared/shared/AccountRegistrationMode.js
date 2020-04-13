// @flow


const hasSymbol = typeof Symbol === "function";

export const AccountRegistrationMode = {
    AS_NEW_USER: hasSymbol
        ? Symbol("AS_NEW_USER") 
        : 1,
    AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT: hasSymbol
        ? Symbol("AS_PATIENT_ATTACHED_TO_DOCTOR_ACCOUNT")
        : 1
}
