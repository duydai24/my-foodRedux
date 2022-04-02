import {useDispatch, useSelector} from 'react-redux';

import {loginWithGoogle} from './creators';
import {loginSelector} from './selectors';

export function LoginGoogle() {
  const dispatch = useDispatch();
  const {phoneNumber, processing, confirmResult} = useSelector(loginSelector);
  const onLogin = () => {
    dispatch(loginWithGoogle());
  };
  if (processing || confirmResult || phoneNumber) return null;
  return (
    <button
      className='bg-red-500 rounded-full p-2 pl-10 pr-10 uppercase text-gray-50'
      title='Đăng nhập bằng tài khoản Google'
      onClick={onLogin}
    >
      <span>GOOGLE</span>
    </button>
  );
}
