
import {gateAPI} from 'core/gateAPI';
import ImageViewer from 'lib/Image/ImageViewer';
import NavLink from 'lib/NavLink';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {ROUTES} from 'routers/routes';

import {authenSelector} from './authenSelector';
import {authDirectSelector} from './selectors';

function UserBaseRemote({
  userId,
  className,
  detailMode,
  isContent,
  nullText = 'Chưa có thông tin'
}) {
  const [data, setData] = useState({});
  const _path = useRouter().asPath;
  const {isAccount, isMoney, isDriverM} = useSelector(authDirectSelector);
  useEffect(() => {
    const loadData = async () => {
      if (!isContent) return;
      const data = await gateAPI('um/userbase', {id: userId});
      setData(data);
    };
    loadData();
  }, [isContent, userId]);
  const canGotoDetail =
    (isAccount || isMoney || isDriverM) && !_path.includes('/tai-khoan');

  if (!data)
    return <span>{nullText}</span>;

  const {
    photoURL,
    displayName,
    email,
    id,
  } = data;
  return (
    <div className={'m-2 p-2 grid  gap-2 justify-center w-auto user-base' + (!detailMode ? ' action-hover ' : ' ') + className}>
      <ImageViewer
        src={photoURL}
        className={'rounded w-24 h-24'}
        width={100}
        height={100}
      />
      <div className={'w-full'}>
        <p className={'line-clamp-1'} >
          <span> {displayName || 'Chưa nhập tên'}</span>
        </p>
        <p className={'line-clamp-1'}>
          {email || 'Chưa có'}
        </p>

        {canGotoDetail ? (
          <NavLink
            title='Thông tin chi tiết'
            to={ROUTES.AccountDetailLink(id)}
          >
            <p className={'line-clamp-1'}>
              Thông tin chi tiết
            </p>
          </NavLink>
        ) : null}
      </div>

    </div>
  );
}

export default connect(authenSelector)(UserBaseRemote);
