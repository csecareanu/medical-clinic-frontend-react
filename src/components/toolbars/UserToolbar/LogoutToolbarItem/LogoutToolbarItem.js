// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './LogoutToolbarItem.module.css';
import {UserMenuItem} from '../../../../shared/MenuItemIdentifiers';
import LinkButton, {LinkButtonType} from '../../../UI/LinkButton/LinkButton';


type Props = {
    onClick: (itemId: number  | Symbol) => void
}

const LoginToolbarItem = (props: Props) => {
    return (
        <div className={classes.Logout}>
            <LinkButton
                type={LinkButtonType.SUCCESS}
                boldStyle
                onClick={ () => {props.onClick(UserMenuItem.LOGOUT) }}
            >
                <FormattedMessage id="btn-logout" />
            </LinkButton>
        </div>
    );
}

export default LoginToolbarItem;