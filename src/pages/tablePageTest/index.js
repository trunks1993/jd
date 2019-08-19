/* eslint-disable complexity */
import React, { useState } from 'react';
import { getTableList } from '@/api/index';
import renderAsyncTable from '@/utils/customzieHooks';
import { tableTestColums } from '@/utils/antdUtils';

export default () => {
  const [query] = useState();
  const asyncTable = renderAsyncTable(tableTestColums, getTableList, query, 'data');
  return (
    <div>
      {asyncTable}
    </div>
  );
};
