import Button from 'lib/Button';
import {ButtonLoading} from 'lib/Button/ButtonLoading';
import ImageEditor from 'lib/Image/ImageEditor';
import TextEditor from 'lib/TextEditor';
import {layoutSelector} from 'modules/layout/selectors';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {changeProp} from 'utils/changeProp';

import {updateProfile} from './creators';
import {authDirectSelector} from './selectors';

export function profileSelector() {
  return createSelector(
    [authDirectSelector, layoutSelector],
    ({id, displayName, photoUR}, {loading}) => {
      return {
        id, displayName, photoUR, loading
      };
    }
  );
}

function ProfileEdit({id, displayName, photoURL, dispatch, loading}) {
  const [data, setData] = useState({
    isChange: false
  });
  const onChange = (name, value) => {
    setData(d => changeProp(d, name, value));
  };
  const onUpdate = () => {
    dispatch(updateProfile(id, data.displayName || displayName, data.photoURL || photoURL));
  };
  return (
    <div className='profile-edit'>
      <div className='top-bar'>
        <h3 className='title'>Cập nhật hồ sơ</h3>
        <Button text='Cập nhật thay đổi' />
      </div>
      <ImageEditor value={data.photoURL || photoURL} onChange={onChange} name='photoURL' />
      <TextEditor
        label='Họ tên'
        name='displayName'
        value={data.displayName || displayName}
        onChange={onChange}
      />
      <ButtonLoading text="Cập nhật thông tin người dùng" hidden={!data.isChange} loading={loading} onClick={onUpdate} />

    </div>
  );
}

export default connect(profileSelector)(ProfileEdit);
