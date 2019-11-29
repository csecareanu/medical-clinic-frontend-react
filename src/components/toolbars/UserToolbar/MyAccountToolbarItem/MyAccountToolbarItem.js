// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './MyAccountToolbarItem.module.css';
import { UserMenuItem } from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';


type Props = {
    onClick: (itemId: number  | Symbol) => void
}

const MyAccountToolbarItemView = (props: Props) => {
    return (
        <div className={classes.MyAccount}>
            <LinkButton
                type={LinkButtonType.SUCCESS}
                boldStyle
                onClick={ () => {props.onClick(UserMenuItem.MY_ACCOUNT) }}
            >
                <FormattedMessage id="toolbar_my_account" defaultMessage={'My Account'}/>
            </LinkButton>
        </div>
    );
}

export default MyAccountToolbarItemView;