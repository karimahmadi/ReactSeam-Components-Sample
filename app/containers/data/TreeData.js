const TreeData = () => [
  { value: 1, title: 'a', children: [] },
  { value: 2, title: 'b', children: [] },
  { value: 3, title: 'c', children: [] },
  { value: 4, title: 'd' },
];
const PartioalLoadData = value => {
  if ([1, 2, 3].indexOf(value) !== -1) {
    switch (value) {
      case 1:
        return [{ value: 11, title: 'aa' }];
      case 2:
        return [{ value: 22, title: 'bb1' }, { value: 23, title: 'bb2' }];
      case 3:
        return [
          { value: 33, title: 'cc1' },
          { value: 34, title: 'cc2' },
          { value: 35, title: 'cc3' },
        ];
      default:
        return {};
    }
  }
  return {};
};
export { TreeData, PartioalLoadData };
