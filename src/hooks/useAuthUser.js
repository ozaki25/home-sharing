import { useContext } from 'react';
import { AuthUserContext } from 'context/authUser';

const useAuthUser = () => useContext(AuthUserContext);

export default useAuthUser;
