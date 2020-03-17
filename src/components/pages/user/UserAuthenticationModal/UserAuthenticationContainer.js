// @flow
import type { RouterHistory } from 'react-router';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthenticationFormType } from './UserAuthenticationModal';

export type ContainerData = {
    displayUserAuthenticationModal: boolean,
    displayedForm: $Values<typeof UserAuthenticationFormType>,
    onChangeDisplayedForm: (newFormType: $Values<typeof UserAuthenticationFormType>) => void,
    onUserAuthenticated: () => void,
    onCancelAuthentication: () => void
}

type Props = {
    children: (containerData: ContainerData) => React.Node,
    history: RouterHistory
}

type State = {
    displayedForm: $Values<typeof UserAuthenticationFormType>
}


class UserAuthenticationContainer extends React.Component<Props, State> {
    containerData: ContainerData;
    state: State;

    static contextType = UIStateContext;

    constructor(props: Props, context: UIStateContext) {
        super(props, context);

        this.state = {
            displayedForm: UserAuthenticationFormType.LOGIN_FORM
        }

        this.containerData = {
            displayUserAuthenticationModal: context.displayUserAuthenticationModal,

            displayedForm: this.state.displayedForm,

            onChangeDisplayedForm: this.onChangeDisplayedForm,
            onUserAuthenticated: this.onUserAuthenticated,
            onCancelAuthentication: this.onCancelAuthentication
        }
    }

    // Change the authentication method between 'login existing user' and 'create new account'
    onChangeDisplayedForm = (newFormType: $Values<typeof UserAuthenticationFormType>) => {
        this.setState({ 
            displayedForm: newFormType
        });
    }

    // The user has authenticated successfully
    onUserAuthenticated = () => {
        const uiStateContext = this.context;
        
        if(uiStateContext.navigateToURIOnSuccessfullyAuth) {
            this.props.history.push({pathname: uiStateContext.navigateToURIOnSuccessfullyAuth});
        }

        this.closeLoginComponent();
    }

    // The user wants to cancel the entire authentication process
    onCancelAuthentication = () => {
        const uiStateContext = this.context;

        if(this.context.navigateToURIOnCancelAuth) {
            this.props.history.push({pathname: uiStateContext.navigateToURIOnCancelAuth});
        }

        this.closeLoginComponent();
    }

    closeLoginComponent = () => {
        // Resetting the state and the context to default for correct behaviour 
        // for the case when it will be displayed again

        this.setState({ 
            displayedForm: UserAuthenticationFormType.LOGIN_FORM
        });

        this.context.setNavigateToURIOnCancelAuth(null);
        this.context.setNavigateToURIOnSuccessfullyAuth(null);
        this.context.setDisplayUserAuthenticationModal(false);
    }

    render() {
        const uiStateContext = this.context;

        // updating the container data parameter with the latest values
        this.containerData.displayUserAuthenticationModal = 
                    uiStateContext.displayUserAuthenticationModal;

        this.containerData.displayedForm = this.state.displayedForm;

        return (this.props.children)(this.containerData);
    }
}

export default withRouter(UserAuthenticationContainer);