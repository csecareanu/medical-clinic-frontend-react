import { useContext } from 'react';
import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../shared/UserAuthType';

/**
 * Custom hook to be used in all 'doctor' pages.
 */
const useCheckUserAccessAllowed = () => {
    const uiStateContext = useContext(UIStateContext);
    if(uiStateContext.userAuthStatus !== UserAuthType.PATIENT) {
        return false;
    }
    return true;
}

export default useCheckUserAccessAllowed;