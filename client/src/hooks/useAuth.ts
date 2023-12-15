import { useAppSelector } from '@redux/store';

export const useAuth = ():boolean => {
  	const isAuth = useAppSelector((state)=> state.user.isAuth)

  	return isAuth;
}
