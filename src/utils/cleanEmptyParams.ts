export const cleanEmptyParams = <T extends Record<string, unknown>>(search: T) => {
  const newSearch = { ...search };

  Object.keys(newSearch).forEach((key) => {
    const value = newSearch[key];
    if (value === undefined || value === '' || (typeof value === 'number' && isNaN(value))) {
      delete newSearch[key];
    }
  });

  const DEFAULT_PAGE_INDEX = 0;
  const DEFAULT_PAGE_SIZE = 50;

  // Coerce to number before comparison
  const pageIndex = Number(newSearch.pageIndex);
  const pageSize = Number(newSearch.pageSize);

  if (!isNaN(pageIndex) && pageIndex === DEFAULT_PAGE_INDEX) {
    delete newSearch.pageIndex;
  }
  if (!isNaN(pageSize) && pageSize === DEFAULT_PAGE_SIZE) {
    delete newSearch.pageSize;
  }

  return newSearch;
};
