import React from 'react';
import { FormattedMessage } from 'react-intl';

import BirthdayElement from '../BirthdayElement/BirthdayElement';
import FormControlView from '../../../../UI/FormControlView/FormControlView';
import Button, { ButtonType } from '../../../../UI/Button/Button';

export default () => {
    const birthDayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday'}/>
    return (
        <form>
            <BirthdayElement label={birthDayLabel}/>
            <FormControlView.Group>
                <Button type={ButtonType.SUCCESS} fullWidth>
                    <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
                </Button>
            </FormControlView.Group>
        </form>
    );
}