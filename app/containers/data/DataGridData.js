function DataGridData(sortColumnName, sortType, limit = 0, offset = 10) {
  const data = [
    { id: 1, title: 'a' },
    { id: 2, title: 'b' },
    { id: 3, title: 'c' },
    { id: 4, title: 'd' },
    { id: 5, title: 'e' },
    { id: 6, title: 'e' },
    { id: 7, title: 'f' },
    { id: 8, title: 'g' },
    { id: 9, title: 'h' },
    { id: 10, title: 'i' },
    { id: 11, title: 'j' },
    { id: 12, title: 'k' },
    { id: 13, title: 'l' },
    { id: 14, title: 'm' },
    { id: 15, title: 'n' },
    { id: 16, title: 'o' },
    { id: 17, title: 'p' },
    { id: 18, title: 'q' },
    { id: 19, title: 'r' },
    { id: 20, title: 's' },
    { id: 21, title: 't' },
    { id: 22, title: 'v' },
    { id: 23, title: 'w' },
    { id: 24, title: 'x' },
    { id: 25, title: 'y' },
    { id: 26, title: 'z' },
  ];
  const result = data;
  const total = result.length;
  let resultList = [];
  if (sortColumnName && sortType) {
    result.sort((a, b) => {
      let x = a[sortColumnName];
      let y = b[sortColumnName];
      if (typeof a[sortColumnName] === 'string')
        x = a[sortColumnName].charCodeAt();
      if (typeof b[sortColumnName] === 'string')
        y = b[sortColumnName].charCodeAt();
      if (sortType === 'asc') return x - y;

      return y - x;
    });
  }
  console.log('offset', offset);
  console.log('limit', limit);
  // pagination//
  if (offset !== undefined && limit !== 0) {
    resultList = [];
    for (
      let i = limit * offset;
      i < (offset + 1) * limit && i < result.length;
      i++
    ) {
      resultList.push(result[i]);
    }
  } else {
    resultList = result;
  }
  console.log('resultList', resultList);
  return { resultList, total };
}
export { DataGridData };
