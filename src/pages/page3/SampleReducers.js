export default (state, action) => {
    switch (action.type) {
      case "SET_DATA":
        return { ...state, data: action.data, loading:false, error:false };
      case "FETCH_DATA":
        return {...state, loading:true, error:false};
      case "SET_PAGE_NUMBER":
        return {...state, currentPage: action.currentPage};
      case "SET_SELECTED_ROWS":
        return { ...state, selectedRows: action.selectedRows };
      case "SET_PAGE_SIZE":
        return { ...state, pageSize: action.pageSize };
      default:
        return state;
    }
  };
