/*
 *
 * TreeView actions
 *
 */

export function fetchData() {
  return {
    type: 'FETCH_DATA',
  };
}
export function setData(data) {
  return {
    type: 'SET_DATA',
    data,
  };
}

export function setExpandedData(expandedData) {
  return {
    type: 'SET_EXPANDED_DATA',
    expandedData,
  };
}

export function expandData() {
  return {
    type: 'EXPAND_DATA',
  };
}
