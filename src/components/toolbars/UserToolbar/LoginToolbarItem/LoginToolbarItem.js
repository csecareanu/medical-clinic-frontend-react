// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './LoginToolbarItem.module.css';
import { UserMenuItem } from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';


type Props = {
    onClick: (itemId: number  | Symbol) => void
}

const LoginToolbarItem = (props: Props) => {
    return (
        <div className={classes.Login}>
            <LinkButton
                type={LinkButtonType.SUCCESS}
                boldStyle
                onClick={ () => {props.onClick(UserMenuItem.LOGIN) }}
            >
                <FormattedMessage id="btn-login" />
            </LinkButton>
        </div>
    );
}

export default LoginToolbarItem;