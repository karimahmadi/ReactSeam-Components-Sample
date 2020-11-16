import React, { useContext, useEffect } from 'react';
import Tree from '@tatareact/core/Tree';
import { TreeContext } from '../../contexts/TreeContext';
import { TreeData, PartioalLoadData } from '../../data/TreeData';
import {
  fetchData,
  setData,
  expandData,
  setExpandedData,
} from '../../actions/TreeActions';
const TreeView = () => {
  const [state, dispatch] = useContext(TreeContext);
  useEffect(() => {
    dispatch(fetchData());
    setTimeout(() => {
      dispatch(setData(TreeData()));
    }, 1000);
  }, []);
  const handleNodeExpand = (node, isOpen /* , parents */) => {
    if (isOpen) {
      dispatch(expandData());
      setTimeout(() => {
        dispatch(setExpandedData(PartioalLoadData(node.value)));
      }, 1000);
    }
  };
  return (
    <Tree
      data={state.data}
      partialLoadData={state.expandedData}
      selectionMode="single"
      rowKeyColumn="value"
      onNodeExpand={handleNodeExpand}
      isChildLoading={state.childLoading}
      // onRowSingleSelection={selectedRow => {}}
      // unknownParents
      // expandToggleIcon={<i className="icon-file-minus" />}
      // collapseToggleIcon={<i className="icon-file-plus" />}
      // parentIcon={<i className="icon-folder3" />}
      // childIcon={<i className="icon-file" />}
    />
  );
};
export default TreeView;
