// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

type Props = {
    notAuthenticated?: boolean
}

const PatientNewAppointment = (props: Props) => {

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            {
                props.notAuthenticated
                    ? ( <FormattedMessage 
                            id="not_auth_to_use_resource" 
                            defaultMessage={'You need to be authenticated to access this resource.'}/>

                    )
                    : <UnderConstruction title="Patient New/Modify Appointment" />
        }
        </MainLayout>
    );
}

export default PatientNewAppointment;
