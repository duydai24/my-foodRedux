import {useDispatch, useSelector} from 'react-redux';

import {loginWithFacebook} from './creators';
import {loginSelector} from './selectors';

export function LoginFacebook() {
  const dispatch = useDispatch();
  const {phoneNumber, processing, confirmResult} = useSelector(loginSelector);
  const onLogin = () => {
    dispatch(loginWithFacebook());
  };
  if (processing || confirmResult || phoneNumber) return null;

  return (
    <button
      title='Đăng nhập bằng tài khoản Facebook'
      className='bg-blue-900 rounded-full p-2 pl-10 pr-10 uppercase text-gray-50'
      onClick={onLogin}
    >
      <span>FACEBOOK</span>
    </button>
  );
}
