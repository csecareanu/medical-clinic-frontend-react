import React from 'react';
import { FormattedMessage } from 'react-intl';

import BirthdayElement from '../BirthdayElement/BirthdayElement';
import FormControlsView from '../../../../UI/FormControlsView/FormControlsView';
import Button, { ButtonType } from '../../../../UI/Button/Button';

export default () => {
    const birthDayLabel = <FormattedMessage id="label_birthday" defaultMessage={'Birthday'}/>
    return (
        <form>
            <BirthdayElement label={birthDayLabel}/>
            <FormControlsView.HorizontalSep repeat='2'/>
            <Button type={ButtonType.SUCCESS} fullWidth>
                <FormattedMessage id="show_patients" defaultMessage={'Show Patients'}/>
            </Button>
        </form>
    );
}