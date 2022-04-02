
import {gateAPI} from 'core/gateAPI';
import {ButtonLoading} from 'lib/Button/ButtonLoading';
import RoleEditor from 'lib/RoleEditor';
import ToastRoot from 'lib/ToastRoot';
import {_layLoad, _layResfresh} from 'modules/layout/actions';
import AdminHeader from 'modules/layout/AdminHeader';
import LayoutAdmin from 'modules/layout/LayoutAdmin';
import {layoutSelector} from 'modules/layout/selectors';
import UserBase from 'modules/user/UserBase';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {authDirectSelector} from './selectors';

function authenSelector() {
  return createSelector(
    [authDirectSelector, layoutSelector],
    ({isAdmin, isSa, isContent}, {refresh, loading}) => {
      return {
        isAdmin, isSa, isContent, refresh, loading
      };
    }
  );
}

function UserDetail({isAdmin, isSa, refresh, loading, dispatch}) {
  const hasPerm = isAdmin || isSa;
  const router = useRouter();
  const {userId} = router.query;

  const [data, setData] = useState(null);

  const onChangeRoles = (name, value) => {

    setData((d) => ({
      ...d,
      [name]: value,

      isChange: true
    }));
  };
  const onRefresh = () => {
    dispatch(_layResfresh());
  };
  const onSaveRole = async () => {
    const {isContent, isAdmin, isSA, id} = data;
    dispatch(_layLoad(true));
    const serverData = await gateAPI('auth/updaterole', {
      userId: id,
      isContent,
      isAdmin,
      isSA
    });

    if (serverData) {
      ToastRoot.show('Đã sửa tài khoản');
      onRefresh();
    }
    else {
      dispatch(_layLoad(false));
    }
  };

  const onIndex = async () => {
    dispatch(_layLoad(true));
    const serverData = await gateAPI('auth/reindex', {id: userId});
    if (serverData) {
      onRefresh();
    }
    else {
      dispatch(_layLoad(false));
    }

  };

  const onBlock = async () => {
    dispatch(_layLoad(true));
    const {id, block} = data;
    if (!block) {
      const serverData = await gateAPI('auth/block', {id});
      if (serverData) {
        ToastRoot.show('Đã khóa tài khoản');
        onRefresh();
      }
      else {
        dispatch(_layLoad(false));
      }
    } else {
      const serverData = await gateAPI('auth/unblock', {id});
      if (serverData) {
        ToastRoot.show('Đã mở khóa tài khoản');
        onRefresh();
      }
      else {
        dispatch(_layLoad(false));
      }
    }
  };

  const onChangeName = async (id, displayName) => {
    dispatch(_layLoad(true));
    const serverData = await gateAPI('auth/managerChangeName', {
      id,
      displayName,
    });
    if (serverData) {
      ToastRoot.show('Đã sửa tài khoản');
      onRefresh();
    }
    else {
      dispatch(_layLoad(false));
    }
  };

  useEffect(() => {
    let _mounted = true;
    const loadData = async () => {
      if (!userId || !hasPerm) {
        return;
      }
      dispatch(_layLoad(true));

      const serverData = await gateAPI('auth/detail', {id: userId});
      if (serverData) {
        if (_mounted) {
          setData({
            ...serverData,
            isChange: false,

          });
        }

      }
      dispatch(_layLoad(false));

    };
    loadData();
    return () => {
      _mounted = false;
    };
  }, [userId, hasPerm, refresh]);

  if (!data) return null;
  const {
    id,
    fName,
    isChange,
    block,
    ...other
  } = data;

  return (

    <LayoutAdmin title={'Phân quyền'}>
      <AdminHeader text={(fName || id || userId || '')}>
      <div className='flex bg-white pl-2 gap-2'>
      <ButtonLoading
          className=" bg-gray-400 hover:bg-yellow-400"
          title={'Đồng bộ dữ liệu"'}
          disabled={!isChange}
          onClick={onIndex}
          hideIcon
          loading={loading}
          text="Đồng bộ dữ liệu"
        />
        <ButtonLoading
          className=" bg-gray-400 btn-hover"
          title={'Cập nhật quyền hạn'}
          disabled={!isChange}
          onClick={onSaveRole}
          hidden={!isAdmin}
          loading={loading}

          hideIcon
          text="Lưu quyền hạn"
        />
      </div>
       
      </AdminHeader>
      <UserBase
        data={data}
        onBlock={onBlock}
        onChangeName={onChangeName}
        detailMode
      />

      <RoleEditor

        onChange={onChangeRoles}
        values={other}
        block={block}
        id={userId}
        onUpdateComplete={onRefresh}
      />

    </LayoutAdmin >

  );
}
export default connect(authenSelector)(UserDetail);

