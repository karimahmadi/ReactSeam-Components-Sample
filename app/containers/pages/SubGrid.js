import React from 'react';
import { DataGrid, GridColumn } from 'rc-easyui';
import 'rc-easyui/dist/themes/default/easyui.css';
import 'rc-easyui/dist/themes/react.css';

const SubGrid = () => {
  const useData = () => [
    {
      id: 1,
      date: '1398/10/18',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
      subData: [{ code: 1, title: 'one' }, { code: 2, title: 'two' }],
    },
    {
      id: 2,
      date: '1398/10/25',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
      subData: [{ code: 1, title: 'one' }, { code: 2, title: 'two' }],
    },
    {
      id: 3,
      date: '1398/11/02',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
    {
      id: 4,
      date: '1398/11/09',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
      subData: [{ code: 1, title: 'one' }, { code: 2, title: 'two' }],
    },
    {
      id: 5,
      date: '1398/11/16',
      dayofweek: 'جمعه',
      holidaytype: 'تعطیلات هفتگی',
      desc: '',
    },
  ];

  const rows = useData();

  const renderSubGrid = ({ row }) =>
    row.subData && (
      <div style={{ marginRight: 30 }}>
        <DataGrid data={row.subData}>
          <GridColumn field="code" title="کد" align="right" />
          <GridColumn field="title" title="عنوان" align="right" />
        </DataGrid>
      </div>
    );

  return (
    <DataGrid data={rows} style={{ height: 500 }} renderDetail={renderSubGrid}>
      <GridColumn key="e453" field="e3434" expander width={30} />
      <GridColumn field="date" title="تاریخ" align="right" />
      <GridColumn field="dayofweek" title="روز هفته" align="right" />
      <GridColumn field="holidaytype" title="تعطیلات هفتگی" align="right" />
      <GridColumn field="desc" title="توضیحات" align="right" />
    </DataGrid>
  );
};

export default SubGrid;
