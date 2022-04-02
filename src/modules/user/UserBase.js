
import {ButtonCircle} from 'lib/Button';
import {ModalCustom} from 'lib/Containers/Modal';
import ImageViewer from 'lib/Image/ImageViewer';
import NavLink from 'lib/NavLink';
import TextEditor from 'lib/TextEditor';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {MdClose, MdSave} from 'react-icons/md';
import {connect} from 'react-redux';
import {ROUTES} from 'routers/routes';
import {copyToClipboard} from 'utils/clipboard';

import {authenSelector} from './authenSelector';

function UserBase({
  isAdmin,
  data,
  style,
  onBlock,
  onChangeName,
  detailMode,
}) {
  const [newVal, setVal] = useState('');
  const [_modal, setModal] = useState(null);
  const _path = useRouter().asPath;

  const canGotoDetail = (isAdmin) && !_path.includes('/tai-khoan');

  const onConfirm = () => {
    // copyToClipboard();

    const displayName = newVal;
    if (onChangeName) onChangeName(data.id, displayName);

  };
  const openModal = (_modal) => {

    if (onChangeName) {
      if (data?.displayName) {
        copyToClipboard(data.displayName);
      }
      setModal(_modal);
    }
    // copyToClipboard();
  };

  if (!data)
    return <span>Không có thông tin</span>;

  const {
    photoURL,
    displayName,
    email,
    block,
    id,
  } = data;
  return (
    <div className={'m-2 p-2 grid  gap-2 justify-center w-auto user-base' + (!detailMode ? ' action-hover ' : ' ') + style}>
      <ImageViewer
        src={photoURL}
        className={'rounded w-24 h-24'}
        width={100}
        height={100}
      />
      <div className={'w-full'}>
        <p className={'line-clamp-1'} onClick={() => openModal('displayName')}>
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
      <div className={!detailMode ? 'hover' : ''}>

        <div className="w-44 flex flex-col gap-1">
          {(isAdmin) && (
            <ButtonCircle
              disabled={!onBlock}
              onClick={onBlock}
              title={`${block ? 'Click để mở khóa' : 'Click để khóa'}`}
            >
              <span>{`${block ? 'Click để mở khóa' : 'Click để khóa'}`}</span>
            </ButtonCircle>
          )}

        </div>

      </div>
      <ModalCustom visible={!!_modal}  >
        <TextEditor
          name='newVal'
          value={newVal}
          onChange={(n, e) => setVal(e)}
          label={_modal === 'displayName' ? 'Nhập tên' : 'Nhập số điện thoại'}
        />
        <div className="flex mt-4 justify-end">
          <button title='Lưu dữ liệu' disabled={!newVal} onClick={onConfirm}>
            <MdSave />
          </button>
          <button title='Đóng' onClick={() => setModal(null)}>
            <MdClose />
          </button>
        </div>
      </ModalCustom>
    </div>
  );
}

export default connect(authenSelector)(UserBase);
