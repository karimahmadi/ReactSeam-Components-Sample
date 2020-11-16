export default (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: true, childLoading: false, error: false };
    case 'SET_DATA':
      return {
        ...state,
        data: action.data,
        loading: false,
        childLoading: false,
        error: false,
      };
    case 'SET_EXPANDED_DATA':
      return {
        ...state,
        expandedData: action.expandedData,
        loading: false,
        childLoading: false,
        error: false,
      };
    case 'EXPAND_DATA':
      return {
        ...state,
        loading: false,
        childLoading: true,
        error: false,
      };
    default:
      return state;
  }
};
