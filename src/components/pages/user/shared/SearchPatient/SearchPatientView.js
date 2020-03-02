// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './SearchPatientView.module.css';
import SearchPatientByBirthday from './shared/SearchPatientByBirthday';
import SearchPatientByName from './shared/SearchPatientByName';
import SearchPatientByPhoneNo from './shared/SearchPatientByPhoneNo';
import LinkButton, { LinkButtonType } from '../../../../UI/LinkButton/LinkButton';
import FormControl from '../../../../UI/FormControl/FormControl';
import { SearchPatientFormType } from './SearchPatient';

type Props = {
    displayedForm: $Values<typeof SearchPatientFormType>,
    renderHeaderWhenSearchActionNotInPending?: () => React.Node,
    renderFooterWhenSearchActionNotInPending?: () => React.Node,
    onChangeSearchPatientForm: (newFormType: $Values<typeof SearchPatientFormType>) => void,
    onSearchPatientByBirthday: (year: number, month: number, day: number) => void,
    onSearchPatientByName: (firstName: string) => void,
    onSearchPatientByPhoneNo: (phone: string) => void
}

const SearchPatientView = (props: Props) => {

    const searchByBirthdayLink = (
        <LinkButton
            type={LinkButtonType.DANGER}
            onClick={ () => { 
                props.onChangeSearchPatientForm(SearchPatientFormType.SEARCH_BY_BIRTHDAY) 
            }}
        >
            <FormattedMessage id="search_by_birthday" defaultMessage={'Search by birthday'}/>
        </LinkButton>
    );

    const searchByNameLink = (
        <LinkButton
            type={LinkButtonType.DANGER}
            onClick={ () => { 
                props.onChangeSearchPatientForm(SearchPatientFormType.SEARCH_BY_NAME) 
            }}
        >
            <FormattedMessage id="search_by_name" defaultMessage={'Search by name'}/>
        </LinkButton>
    );

    const searchByPhoneNoLink = (
        <LinkButton
            type={LinkButtonType.DANGER}
            onClick={ () => { 
                props.onChangeSearchPatientForm(SearchPatientFormType.SEARCH_BY_PHONE) 
            }}
        >
            <FormattedMessage id="search_by_phone_no" 
                defaultMessage={'Search by phone number'}
            />
        </LinkButton>
    );

    

    let searchPatientForm = null;
    let alternativeSearchLinks = [];
    switch(props.displayedForm) {
        case SearchPatientFormType.SEARCH_BY_BIRTHDAY:
            searchPatientForm = (
                <SearchPatientByBirthday 
                    onSearchPatients={props.onSearchPatientByBirthday} 
                /> );
            alternativeSearchLinks = [searchByNameLink, searchByPhoneNoLink];
            break;
        case SearchPatientFormType.SEARCH_BY_NAME:
            searchPatientForm = (
                <SearchPatientByName 
                    onSearchPatients={props.onSearchPatientByName} 
                /> );
            alternativeSearchLinks = [searchByBirthdayLink, searchByPhoneNoLink];
            break;
        case SearchPatientFormType.SEARCH_BY_PHONE:
            searchPatientForm = (
                <SearchPatientByPhoneNo 
                    onSearchPatients={props.onSearchPatientByPhoneNo} 
                /> );
            alternativeSearchLinks = [searchByBirthdayLink, searchByNameLink];
            break;
        default:
            console.log('logIntoPatientAccountView. [W] Unknown form type: ' + props.displayedForm);
    }

    return (
        <React.Fragment>
            {props.renderHeaderWhenSearchActionNotInPending 
                ? props.renderHeaderWhenSearchActionNotInPending()
                : null
            }

            {searchPatientForm}
            <FormControl.HorizontalSep repeat={2} />
            {alternativeSearchLinks.map( (element, idx) => (
                <div key={idx} className={classes.AlternativeSearchItem}>{element}</div>
            ))}

            {props.renderFooterWhenSearchActionNotInPending 
                ? props.renderFooterWhenSearchActionNotInPending()
                : null
            }            
        </React.Fragment>
    );
}

export default SearchPatientView;