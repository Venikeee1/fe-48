const fakeList = [
  {
    id: 1,
    name: 'Javascript',
    salary: 100000,
  },
  {
    id: 2,
    name: 'Javascript',
    salary: 10000,
  },
  {
    id: 3,
    name: 'Java',
    salary: 10000,
  },
];

export const getFilteredItems = (params) => {
  return Promise.resolve(fakeList);
};
