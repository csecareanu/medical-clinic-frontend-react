// @flow
import { useContext } from 'react';
import UIStateContext from '../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../shared/UserAuthType';

/**
 * Custom hook to check if the current authenticated / not authenticated user can access
 * a doctor page.
 */
const useCanAccessDoctorContent = () => {
    const uiStateContext = useContext(UIStateContext);
    if(uiStateContext.userAuthStatus !== UserAuthType.DOCTOR) {
        return false;
    }
    return true;
}

export default useCanAccessDoctorContent;