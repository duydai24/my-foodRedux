import {ModalCustom} from 'lib/Containers/Modal';
import {connect} from 'react-redux';

import {loginComponentSelector} from './loginComponentSelector';
import {LoginSocial} from './LoginSocial';

const LoginControl = ({userId, showLogin}) => {

  const showDialog = (!userId) && showLogin;
  if (!showDialog) return null;
  return (
    <>

      <ModalCustom visible={showDialog}>
        <span className='text-center text-blue-900 font-bold text-2xl uppercase block mb-6'>Đăng nhập</span>

        <LoginSocial />
      </ModalCustom>
    </>
  );
};
export default connect(loginComponentSelector)(LoginControl);
