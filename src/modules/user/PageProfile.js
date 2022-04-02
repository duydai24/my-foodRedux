import {ClickConfirm} from 'lib/Button/ClickConfirm';
import ImageViewer from 'lib/Image/ImageViewer';
import {TextPrice} from 'lib/TextPrice';
import {useRouter} from 'next/router';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from 'routers/routes';

import {processLogout} from './creators';
import {authDirectSelector} from './selectors';

function Profile() {
  const {
    displayName,
    id,
    phoneNumber,
    photoURL,
    email,
    refUser,
    money,
    myAddress,
  } = useSelector(authDirectSelector);
  const router = useRouter();
  const dispatch = useDispatch();

  const openAddress = () => {
    router.push(ROUTES.USER_ADDRESS);
  };

  const openPhoneEdit = () => {
    if (id && !phoneNumber) router.push(ROUTES.OVERLAY_PHONENUMBER);
  };
  const gotoHistory = () => {
    router.push(ROUTES.InvoiceHistory);
  };

  const gotoEdit = () => {
    router.push(ROUTES.PROFILEEDIT);
  };
  const doLogout = () => {
    dispatch(processLogout());
  };

  const onLogout = () => {
    if (!id) {
      router.push(ROUTES.LANDING);
      return;
    }
    doLogout();

  };
  return (
    <div className={'flex flex-col'}>
      <button className={'flex p-3 items-center justify-between'} onClick={gotoEdit}>
        <div className={'w-12 h-12 flex items-center justify-center ring-2'}>
          <ImageViewer
            className={'w-11 h-11'}
            src={photoURL}
            resizeMode="cover"
          />

        </div>
        <div className={'mr-auto'}>
          <span className={'text-lg font-bold pt-2'}> {displayName} </span>
          <span>Chỉnh sửa tài khoản </span>
        </div>
      </button>
      <button className={'flex items-center justify-between'} onClick={gotoHistory}>
        <div className={'flex items-center'}>
          <span>Điểm thành viên</span>
        </div>
        <TextPrice suffix=" điểm" value={money} />
      </button>
      <h4 className={'text-black font-bold text-base'}>Thông tin cá nhân</h4>
      <button className={'flex items-center justify-between bg-white bb border-b'} onClick={openPhoneEdit}>
        <div className={'flex items-center'}>

          <span>{phoneNumber}</span>
        </div>

      </button>
      <div className={'flex items-center justify-between bg-white bb border-b'}>
        <div className={'flex items-center'}>

          <span>{email || 'Chưa liên kết email'}</span>
        </div>
      </div>
      <button className={'flex items-center justify-between bg-white bb border-b'} onClick={openAddress}>
        <div className={'flex items-center'}>

          <span>
            {myAddress && myAddress.length
              ? 'Bạn đã cài đặt ' + myAddress.length + ' địa chỉ'
              : 'Chưa cài đặt địa chỉ'}
          </span>
        </div>

      </button>
      <button className={'flex items-center justify-between bg-white bb border-b'} onClick={gotoEdit}>
        <div className={'flex items-center'}>

          <span>{refUser || 'Chưa xác nhận người giới thiệu'}</span>
        </div>

      </button>
      <ClickConfirm
        className="flex items-center justify-between bg-white bb border-b text-red-400"
        text="Đăng xuất tài khoản"
        question={'Đăng xuất tài khoản'}
        onConfirm={onLogout} />

    </div>
  );
}

export default Profile;
