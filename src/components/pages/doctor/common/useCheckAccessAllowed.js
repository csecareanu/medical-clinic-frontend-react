import { useContext } from 'react';
import UIStateContext from '../../../UIState/UIState-context';
import { UserAuthStatus } from '../../../common/UserAuthStatus';

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