// @flow

import * as React from 'react';

import { UserAuthType } from '../../../../common/UserAuthType';
import UIStateContext from '../../../../react-context/UIState/UIState-context';

const appointmentContainer = {
    uiStateContext: (null: null | UIStateContext),
    userAuthStatus: (UserAuthType.UNAUTHENTICATED: number | Symbol)
}

type Props = {
    children: (containerData: typeof appointmentContainer) => React.Node
}

const PatientNewAppointmentContainer = (props: Props) => {
    let uiStateContext = React.useContext(UIStateContext);
    appointmentContainer.uiStateContext = uiStateContext;
    appointmentContainer.userAuthStatus = uiStateContext.userAuthStatus;
    return (props.children)(appointmentContainer);
}

export default PatientNewAppointmentContainer;