
import {gateAPI} from 'core/gateAPI';
import Button from 'lib/Button';
import {ButtonLoading} from 'lib/Button/ButtonLoading';
import {LoadingCircle} from 'lib/Loader/LoadingCircle';
import {_layResfresh} from 'modules/layout/actions';
import LayoutAdmin from 'modules/layout/LayoutAdmin';
import {layoutSelector} from 'modules/layout/selectors';
import {authDirectSelector} from 'modules/user/selectors';
import React, {useEffect, useState} from 'react';
import {MdRefresh, MdTimer} from 'react-icons/md';
import {connect} from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import {Waypoint} from 'react-waypoint';
import {FixedSizeList as List} from 'react-window';
import {createSelector} from 'reselect';
import {concatArray} from 'utils/concatArray';

import ManView from './ManView';

const componentSelector = () => createSelector(
  [authDirectSelector, layoutSelector],
  ({isAdmin}, {search, refresh, loading}) => {
    return {
      search,
      isAdmin,
      loading,
      refresh
    };
  }
);
const UserList = ({dispatch, isAdmin, search, loading, refresh}) => {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const [paging, setPage] = useState({
    page: 1,
    hasMore: true,
    total: 0
  });

  const onRefresh = () => {
    setPage({page: 1, pages: 1});
    dispatch(_layResfresh());

  };
  const loadMore = () => {
    if (paging?.hasMore && !loading && paging?.pages > paging?.page) {
      setPage(p => ({...p, page: p.page + 1}));
    }
  };
  const onIndexing = async () => {
    await gateAPI('auth/indexing');
  };

  function RenderItem({index, style}) {
    if (!(list?.length > index)) {
      return <div style={style}>
        <ButtonLoading loading />
        {!!paging.hasMore && !loading && list?.length === index &&
          <Waypoint onEnter={loadMore} bottomOffset='-200px' >
            <LoadingCircle />
          </Waypoint>}
      </div>;
    }
    const item = list[index];
    if (!item) {
      return <div style={style}>
        Đang nạp dữ liệu
      </div>;
    }
    return <ManView data={item} style={style} />;

  }

  useEffect(() => {
    const loadData = async () => {
      if (!isAdmin || error) {
        return;
      }
      const serverData = await gateAPI('auth/list', {
        page: paging.page,
        pageSize: 10,
        search
      });
      if (serverData?.ex) {
        setError(serverData?.ex);
        return;
      }
      if (serverData) {
        const {list, hasMore, total} = serverData;
        setPage(p => ({...p, hasMore, total}));
        setList(l => concatArray(l, list));
      }

    };
    loadData();

  }, [paging.page, refresh, search, isAdmin, error]);
  return (

    <LayoutAdmin title="Phân quyền">
      <div className={'flex-1 flex flex-col overflow-hidden'}>
        <div className={'flex justify-end gap-1 my-2'}>
          <Button
            onClick={onIndexing}
            title='Đồng bộ dữ liệu'
          >
            <MdTimer />
          </Button>
          <Button
            onClick={onRefresh} title='Nạp lại'>
            <MdRefresh />
          </Button>
        </div>
        <div className={'flex-1 overflow-hidden'}>
          <AutoSizer>
            {({
              height,
              width
            }) => {
              return <List
                data={list}
                itemCount={paging.total || 0}
                itemSize={100}
                height={height} width={width}>
                {RenderItem}
              </List>;

            }}
          </AutoSizer>
        </div>

      </div>
    </LayoutAdmin>

  );
};
export default connect(componentSelector)(UserList);
