import React, {useEffect, useContext} from 'react';
import SampleContext from './SampleContext';
import RDataGrid, {DataGridColumn, DataGridColumnGroup} from '@tatareact/core/RDataGrid';
import {SampleData} from './sampleData';
import {fetchData, setPageNumber, setSelectedRow, setPageSize, setData, sortColumn} from './SampleActions';
const RsuiteDataGrid = () => {
    console.log(SampleContext);
    const [state, dispatch] = useContext(SampleContext);
    useEffect(() => {
        setTimeout(()=>dispatch(fetchData()), 1000);
        console.log(SampleData());
        dispatch(setData(SampleData()));
    }, []);
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
        <DataGridColumnGroup
        header="id"
        colSpan={2}
        align="center"
        verticalAlign="middle"
        >
        <DataGridColumn headerName="id" field="id" resizable sortable />
        <DataGridColumn
            headerName="userId"
            field="userId"
            resizable
            sortable
        />
        </DataGridColumnGroup>
        <DataGridColumn
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
}
export default RsuiteDataGrid;