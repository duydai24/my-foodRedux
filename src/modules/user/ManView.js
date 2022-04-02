
import ImageViewer from 'lib/Image/ImageViewer';
import NavLink from 'lib/NavLink';
import {TimeAgo} from 'lib/TimeAgo';
import React from 'react';
import {ROUTES} from 'routers/routes';
import {getDate} from 'utils/isDate';

const ManView = ({data, style}) => {
  if (!data) return <span style={style}>Để tải dữ liệu đã</span>;
  const {
    id,
    photoURL,
    displayName,
    email,
    fName,
    block,
  } = data;
  const _block = getDate(block, 1) > Date.now();
  return (
    <div style={style} className={' users bb'} title={fName}>
      <ImageViewer
        src={photoURL}
        width={80}
        height={80}
        referrerPolicy="no-referrer"
        className={'rounded self-center w-20 h-20'}
      />

      <div className={'flex items-center justify-between lg:grid grid-cols-5 gap-2 text-gray-400'}>
        <span>
          {displayName || 'Tên ?'}
        </span>
        <span className="hidden lg:block">
          {email || 'Email ?'}
        </span>

        <h4 className={'hidden lg:block' + (_block ? 'text-red-300' : 'text-green-400')}>
          {_block ? <TimeAgo date={new Date(block + 'Z')} /> : 'Đang hoạt động'}
        </h4>

        <div />

        <NavLink
          className="btn line-clamp-1 text-center"
          text='Thông tin chi tiết' to={ROUTES.AccountDetailLink(id)} />
      </div>
    </div >
  );
};
export default ManView;
