// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './PatientAccountToolbarItem.module.css';
import { PatientMenuItem } from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';


type Props = {
    onClick: (itemId: number | Symbol) => void
}

const PatientAccountToolbarItemView = (props: Props) => {
    return (
        <div className={classes.PatientAccount}>
            <LinkButton
                type={LinkButtonType.DANGER}
                boldStyle
                onClick={ () => {props.onClick(PatientMenuItem.MY_ACCOUNT) }}
            >
                <FormattedMessage id="toolbar_patient_account" defaultMessage={'Patient Account'}/>
            </LinkButton>
        </div>
    )
}

export default PatientAccountToolbarItemView;