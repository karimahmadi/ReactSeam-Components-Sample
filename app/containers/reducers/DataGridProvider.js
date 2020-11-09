import React, { useReducer } from 'react';
import DataGridReducers from './DataGridReducers';
import { DataGridContext } from '../contexts/DataGridContext';
export const initalState = {
  data: [],
  currentPage: 0,
  pageSize: 10,
  loading: false,
  userId: '',
  selectedRows: [],
  selectedRow: '',
};
const DataGridProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataGridReducers, initalState);
  return (
    <DataGridContext.Provider value={[state, dispatch]}>
      {children}
    </DataGridContext.Provider>
  );
};
export default DataGridProvider;
