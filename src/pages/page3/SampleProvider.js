import React, {useReducer} from 'react';
import SampleReducer from './SampleReducers';
import {DataGridContext} from './SampleContext';
export const initalState = {
    data: [],
    currentPage: 1,
    pageSize: 10,
    loading: true,
    userId: '',
    selectedRows: [],
    selectedRow: '',
};
const SampleProvider= ({children}) => {
    const [state, dispatch] = useReducer(SampleReducer, initalState)
    console.log("state", state)
    return (
        <DataGridContext.Provider value={[state, dispatch]}>
            {children}
        </DataGridContext.Provider>
    )
}
export default SampleProvider;