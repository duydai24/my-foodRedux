
import ImageViewer from 'lib/Image/ImageViewer';
import {useRouter} from 'next/router';
import React from 'react';
import {ROUTES} from 'routers/routes';

function UserSimple({
  data,
  className,
  nullText = 'Chưa có người gửi'
}) {

  const router = useRouter();
  if (!data)
    return < span > {nullText}</span >;

  const {
    id,
    photoURL,
    displayName,
    email,
    phoneNumber,
  } = data;
  const fName = displayName || phoneNumber || email || 'Chưa nhập';
  return (
    <div className={'flex p-2 gap-4 ' + (className || '')} onClick={() => router.push(ROUTES.SupporterCompleteWithSupporter(id))}>
      <ImageViewer
        src={photoURL}
        className={'rounded w-12 h-12'}
        width={50}
        height={50}
      />
      <div>
        <p className={'line-clamp-1'}  >
          <span> {fName}</span>
        </p>
        <p className={'line-clamp-1'}  >
          <span> {phoneNumber || 'Chưa nhập ĐT'}</span>
        </p>
      </div>

    </div>
  );
}

export default UserSimple;
