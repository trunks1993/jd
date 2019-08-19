/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable complexity */
import React, { useEffect, useReducer } from 'react';
import { Table } from 'antd';

const paginationInitial = {
  current: 1,
  pageSize: 10
};

const initState = {
  loading: false,
  query: null,
  pagination: paginationInitial,
  dataSource: []
};

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return { ...state, loading: !state.loading };
    case 'SET_QUERY':
      return { ...state,query: payload.params,pagination: paginationInitial };
    case 'SET_PAGINATION':
      return { ...state, pagination: payload.pagination };
    case 'SET_DATA_SOURCE':
      return { ...state, dataSource: payload.dataSource };
    default:
      return state;
  }
};

function useAsyncTable(columns, queryAction, params, listName) {

  const [state, dispatch] = useReducer(reducer, initState);

  function handleTableChange(event) {
    if (event) {
      const { current } = event;
      dispatch({
        type: 'SET_PAGINATION',
        payload: {
          pagination: {
            ...state.pagination,
            current
          }
        }
      });
    }
  }

  function doQuery() {
    dispatch({
      type: 'TOGGLE_LOADING'
    });
    const { current, pageSize } = state.pagination;
    const pagination = { current, pageSize };
    queryAction({ ...state.query, ...pagination })
      .catch(_err => {
        dispatch({ type: 'TOGGLE_LOADING' });
        return {};
      })
      .then((payload) => {
        dispatch({ type: 'TOGGLE_LOADING' });
        if (payload.pagination && payload.data) {
          const { pagination: { total } } = payload;
          if (!state.pagination.total) {
            dispatch({
              type: 'SET_PAGINATION',
              payload: {
                pagination: { ...state.pagination, total }
              }
            });
          }
          dispatch({
            type: 'SET_DATA_SOURCE',
            payload: {
              dataSource: payload[listName]
            }
          });
        }
      });
  }
  // cDM cDU
  useEffect(
    () => {
      if (params && JSON.stringify(params) !== JSON.stringify(state.query)) {
        dispatch({
          type: 'SET_QUERY',
          payload: {
            params
          }
        });
      } else {
        doQuery();
      }
    }, [params, state.pagination.current, state.query]);

  return (
    <Table
      bordered
      columns={columns}
      rowKey={record => record.id}
      pagination={state.pagination}
      dataSource={state.dataSource}
      loading={state.loading}
      onChange={handleTableChange}
      rowClassName={() => 'rowClass'}
    />
  );
}
export default useAsyncTable;
