import React, { useEffect, useContext } from 'react';
import RDataGrid, {
  RDataGridColumn,
  RDataGridColumnGroup,
} from '@tatareact/core/RDataGrid';
import { DataGridContext } from '../../contexts/DataGridContext';
import { DataGridData } from '../../data/DataGridData';
import {
  fetchData,
  setPageNumber,
  setSelectedRow,
  setPageSize,
  setData,
  sortColumn,
  setTotal,
} from '../../actions/DataGridActions';

const RsuiteDataGrid = () => {
  console.log(DataGridContext);
  const [state, dispatch] = useContext(DataGridContext);
  useEffect(() => {
    setTimeout(() => dispatch(fetchData()), 1000);
    dispatch(fetchData());
    loadData(undefined, undefined, state.currentPage, state.pageSize);
  }, []);
  const handlePageChange = pageNumber => {
    dispatch(setPageNumber(pageNumber));
    setTimeout(() => dispatch(fetchData()), 1000);
    dispatch(fetchData());
    loadData(undefined, undefined, pageNumber - 1, state.pageSize);
  };
  const handleSingleSelectionChange = selection => {
    dispatch(setSelectedRow(selection));
  };
  const handleChangePageSize = (newPageSize, newPageNumber) => {
    dispatch(setPageSize(newPageSize));
    dispatch(setPageNumber(newPageNumber));
    setTimeout(() => dispatch(fetchData()), 1000);
    dispatch(setPageNumber(0));
    dispatch(fetchData());
    loadData(undefined, undefined, 0, newPageSize);
  };
  const handleSortColumn = (sortColumnName, sortType) => {
    dispatch(sortColumn(sortColumnName, sortType));
    setTimeout(() => dispatch(fetchData()), 1000);
    dispatch(fetchData());
    loadData(sortColumnName, sortType);
  };
  const loadData = (sortColumnName, sortType, newPageNumber, newPageSize) => {
    const data = DataGridData(
      sortColumnName,
      sortType,
      newPageSize,
      newPageNumber,
    );
    if (data) {
      setTimeout(() => dispatch(setData(data.resultList)), 1000);
      dispatch(setTotal(data.total));
    }
  };
  return (
    <div>
      <RDataGrid
        selectionMode="multiple"
        data={state.data}
        pageRangeDisplayed={3}
        total={5}
        total={state.total}
        onChangePage={handlePageChange}
        onChangePageSize={handleChangePageSize}
        pageNumber={state.currentPage}
        loading={state.loading}
        onSortColumn={handleSortColumn}
        selection
        selectionColor="#CCC"
        showRowNumberColumn
        onRowSingleSelection={handleSingleSelectionChange}
        headerHeight={80}
        height={420}
      >
        <RDataGridColumnGroup
          header="id"
          colSpan={2}
          align="center"
          verticalAlign="middle"
        >
          <RDataGridColumn headerName="id" field="id" resizable sortable />
          <RDataGridColumn
            headerName="userId"
            field="userId"
            resizable
            sortable
          />
        </RDataGridColumnGroup>
        <RDataGridColumn
          headerName="title"
          field="title"
          resizable
          sortable
          renderCellChildren={rowData => <p>{rowData.title}</p>}
          renderHeaderCellChildren={headerName => <div>{headerName}</div>}
        />
      </RDataGrid>
    </div>
  );
};
export default RsuiteDataGrid;
