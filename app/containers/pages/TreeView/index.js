import React from 'react';
import TreeProvider from '../../reducers/TreeProvider';
import RSuiteTree from './RSuiteTree';
const TreeView = () => (
  <TreeProvider>
    <RSuiteTree />
  </TreeProvider>
);
export default TreeView;
