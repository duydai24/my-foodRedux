import {useSelector} from 'react-redux';

import {LoginFacebook} from './LoginFacebook';
import {LoginGoogle} from './LoginGoogle';
import {loginSelector} from './selectors';

export function LoginSocial() {
  const {phoneNumber, processing, confirmResult} = useSelector(loginSelector);
  if (processing || confirmResult || phoneNumber) return null;

  return (
    <div className="login-social">
      <hr className='text-gray-900' />
      <div className='mt-4'>
        <p className='font-semibold text-gray-900 text-xl text-center mb-5'>Sử dụng tài khoản MXH</p>
        <div className='flex justify-between mb-6'>
          <LoginGoogle />
          <LoginFacebook />
        </div>
      </div>
    </div>
  );
}
