// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

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
                    : <h1>New/Modify Appointment</h1>
        }
        </MainLayout>
    );
}

export default PatientNewAppointment;
