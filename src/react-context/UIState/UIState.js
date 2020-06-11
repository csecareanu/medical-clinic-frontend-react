// @flow
import * as React from 'react';

import UIStateContext from './UIState-context';
import {UserAuthType} from '../../shared/UserAuthType';
import {LanguageType} from '../../shared/LanguageType';

type Props = {
  children?: React.Node
};

type State = {
  userAuthenticationStatus: $Values<typeof UserAuthType>,

  isUserConnectedToAPatientAccount: boolean,

  displayUserAuthenticationModal: boolean,
  navigateToURIOnCancelAuth: string | null,
  navigateToURIOnSuccessfullyAuth: string | null,

  displayUserLogoutModal: boolean,

  displayMenuSideDrawerModal: boolean,

  language: $Values<typeof LanguageType>
};

/**
 * Component used to share global user interface state.
 * It allows UI components to communicate between them.
 * It does not keep any kind of data retrieved from the backend, only UI state.
 * 
 * For detailed information about context variables provided @see UIState-context.js
 * 
 * @param props.children - The JSX content which will be rendered and which will have access
 * to this context.
 */
class UIState extends React.Component<Props, State> {

    state = {
        userAuthenticationStatus: UserAuthType.UNAUTHENTICATED,

        isUserConnectedToAPatientAccount: false,

        displayUserAuthenticationModal: false,
        navigateToURIOnCancelAuth: null,
        navigateToURIOnSuccessfullyAuth: null,

        displayUserLogoutModal: false,

        displayMenuSideDrawerModal: false,

        language: LanguageType.EN
    }

    render () {
        return (
            <UIStateContext.Provider
                value={{
                    // variables
                    userAuthenticationStatus: this.state.userAuthenticationStatus,
                    isUserConnectedToAPatientAccount: this.state.isUserConnectedToAPatientAccount,
                    displayUserAuthenticationModal: this.state.displayUserAuthenticationModal,
                    navigateToURIOnCancelAuth: this.state.navigateToURIOnCancelAuth,
                    navigateToURIOnSuccessfullyAuth: this.state.navigateToURIOnSuccessfullyAuth,
                    displayUserLogoutModal: this.state.displayUserLogoutModal,
                    displayMenuSideDrawerModal: this.state.displayMenuSideDrawerModal,
                    language: this.state.language,
                    // methods
                    setUserAuthenticationStatus: (userAuthenticationType: number) => {
                       //TODO add action log for every function
                        this.setState({userAuthenticationStatus: userAuthenticationType}) 
                    },
                    setUserConnectedToPatientAccount: (isConnected: boolean) => {
                        this.setState({isUserConnectedToAPatientAccount: isConnected})
                    },
                    setDisplayUserAuthenticationModal: (show: boolean) => {
                        this.setState({displayUserAuthenticationModal: show})
                    },
                    setNavigateToURIOnCancelAuth: (uri: string | null) => {
                        this.setState({navigateToURIOnCancelAuth: uri})
                    },
                    setNavigateToURIOnSuccessfullyAuth: (uri: string | null) => {
                        this.setState({navigateToURIOnSuccessfullyAuth: uri})
                    },
                    setDisplayUserLogoutModal: (show: boolean) => {
                        this.setState({displayUserLogoutModal: show})
                    },
                    setDisplayMenuSideDrawerModal: (show: boolean) => {
                        this.setState({displayMenuSideDrawerModal: show})
                    },
                    setLanguage: (lang: $Values<typeof LanguageType>) => {
                       this.setState({language: lang})
                    }
                }}
            >
                {this.props.children}
            </UIStateContext.Provider>
        );
    }
}

export default UIState;