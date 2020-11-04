import React from 'react';
import DataGridProvider from '../../reducers/DataGridProvider';
import RsuiteDataGrid from './RsuiteDataGrid';
const Index = () => {

    return(
    <DataGridProvider>
        <RsuiteDataGrid />
    </DataGridProvider>
    )
}
export default Index;