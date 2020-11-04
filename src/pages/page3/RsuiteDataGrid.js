import React, {useEffect, useContext} from 'react';
import { DataGridContext } from './SampleContext';
import {RDataGrid, RDataGridColumn, RDataGridColumnGroup} from '@tatareact/core/RDataGrid';
import {SampleData} from './sampleData';
import {fetchData, setPageNumber, setSelectedRow, setPageSize, setData, sortColumn} from './SampleActions';

const RsuiteDataGrid = () => {
    console.log(DataGridContext);
    const [state, dispatch] = useContext(DataGridContext);
    useEffect(() => {
        setTimeout(()=>dispatch(fetchData()), 1000);
        console.log(SampleData());
        dispatch(setData(SampleData()));
    }, [dispatch]);
    const handlePageChange = pageNumber => {
        dispatch(setPageNumber(pageNumber))
        setTimeout(()=>dispatch(fetchData()), 1000);
        const data = SampleData(undefined, undefined ,pageNumber);
        dispatch(setData(data))
    }
    const handleSingleSelectionChange = (selection) => {
        dispatch(setSelectedRow(selection))
    }
    const handleChangePageSize = (newPageSize, newPageNumber) => {
        dispatch(setPageSize(newPageSize));
        dispatch(setPageNumber(newPageNumber))
        setTimeout(()=>dispatch(fetchData()), 1000);
        const data = SampleData(undefined, undefined ,newPageNumber, newPageSize);
        dispatch(setData(data))
    };
    const handleSortColumn = (sortColumnName, sortType) => {
        dispatch(sortColumn(sortColumnName, sortType));
        setTimeout(()=>dispatch(fetchData()), 1000);
        const data = SampleData(sortColumnName, sortType);
        dispatch(setData(data))
    };
    return (
    <div>
    <RDataGrid
        selectionMode="multiple"
        data={state.data}
        pageRangeDisplayed={3}
        total={5}
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
    )
};
export default RsuiteDataGrid;