import { useContext } from 'react';
import UIStateContext, { UserAuthStatus } from '../../../UIState/UIState-context';

/**
 * Custom hook to be used in all 'doctor' pages.
 */
const useCheckAccessAllowed = () => {
    const uiStateContext = useContext(UIStateContext);
    if(uiStateContext.userAuthStatus !== UserAuthStatus.DOCTOR) {
        return false;
    }
    return true;
}

export default useCheckAccessAllowed;