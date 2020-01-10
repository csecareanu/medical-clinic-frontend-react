// @flow
import { useContext } from 'react';
import UIStateContext from '../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../shared/UserAuthType';

/**
 * Custom hook to check if the current authenticated user can access a site administrator page
 */
const useCanAccessSiteAdminContent = () => {
    const uiStateContext = useContext(UIStateContext);

    if(uiStateContext.userAuthenticationStatus === UserAuthType.SITE_ADMIN) {
        return true;
    }

    return false;
}

export default useCanAccessSiteAdminContent;