import React from 'react';
import { FormattedMessage } from 'react-intl';

import SearchPatientFormView from '../common/SearchPatientFormView/SearchPatientFormView';
import Button, { ButtonType } from '../../../UI/Button/Button';

export default () => (
    <div>
        <Button type={ButtonType.DANGER}>
            <FormattedMessage id="button_cancel" defaultMessage={'Cancel'}/>
        </Button>
        <SearchPatientFormView />
    </div>
);
