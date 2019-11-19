// @flow

const hasSymbol = typeof Symbol === 'function';

export const UserAuthType = {
    UNAUTHENTICATED: hasSymbol
        ? Symbol("UserAuthType.UNAUTHENTICATED")
        : 1,
    PATIENT: hasSymbol
        ? Symbol("UserAuthType.PATIENT")
        : 2,
    DOCTOR: hasSymbol
        ? Symbol("UserAuthType.DOCTOR")
        : 3,
    SITE_ADMIN: hasSymbol
        ? Symbol("UserAuthType.SITE_ADMIN")
        : 4
}