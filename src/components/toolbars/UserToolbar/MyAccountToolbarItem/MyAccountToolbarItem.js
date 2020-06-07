// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './MyAccountToolbarItem.module.css';
import { UserMenuItem } from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';


type Props = {
    onClick: (itemId: number  | Symbol) => void
}

const MyAccountToolbarItem = (props: Props) => {
    return (
        <div className={classes.MyAccount}>
            <LinkButton
                type={LinkButtonType.SUCCESS}
                boldStyle
                onClick={ () => {props.onClick(UserMenuItem.MY_ACCOUNT) }}
            >
                <FormattedMessage 
                  id="toolbars.user-toolbar.my-account-toolbar-item.btn-my-account" 
               />
            </LinkButton>
        </div>
    );
}

export default MyAccountToolbarItem;