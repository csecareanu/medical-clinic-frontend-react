import { useContext } from 'react';
import UIStateContext from '../../../../react-context/UIState/UIState-context';
import { UserAuthType } from '../../../../common/UserAuthType';

/**
 * Custom hook to be used in all 'doctor' pages.
 */
const useCheckUserAccessAllowed = () => {
    const uiStateContext = useContext(UIStateContext);
    if(uiStateContext.userAuthStatus !== UserAuthType.DOCTOR) {
        return false;
    }
    return true;
}

export default useCheckUserAccessAllowed;