export const setData = data => ({
  type: 'SET_DATA',
  data,
});

export const fetchData = () => ({
  type: 'FETCH_DATA',
});

export const setSelectedRows = selectedRows => ({
  type: 'SET_SELECTED_ROWS',
  selectedRows,
});

export const setSelectedRow = selectedRow => ({
  type: 'SET_SELECTED_ROW',
  selectedRow,
});

export const setPageSize = pageSize => ({
  type: 'SET_PAGE_SIZE',
  pageSize,
});

export const setPageNumber = currentPage => ({
  type: 'SET_PAGE_NUMBER',
  currentPage,
});

export const setTotal = total => ({
  type: 'SET_TOTAL',
  total,
});

export const sortColumn = (sortColumnName, sortType) => ({
  type: 'SORT_COLUMN',
  sortColumnName,
  sortType,
});
