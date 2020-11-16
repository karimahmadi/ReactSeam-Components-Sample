import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TreeReducers from './TreeReducers';
import { TreeContext } from '../contexts/TreeContext';
export const initalState = {};
const TreeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TreeReducers, initalState);
  return (
    <TreeContext.Provider value={[state, dispatch]}>
      {children}
    </TreeContext.Provider>
  );
};
TreeProvider.propTypes = {
  children: PropTypes.node,
};
export default TreeProvider;
