import { PaginationPerPage } from '@constants/PaginationPerPage';
import { PaginationParams } from '@models/common/PaginationParamsType';

export function sortAndPaginate<T>(
  data: T[],
  sort: string | null,
  sortFieldMap: Record<string, keyof T>,
  pagination: PaginationParams,
): T[] {
  const sortedField = sort && sortFieldMap[sort];

  const sorted = [...data];

  if (sortedField) {
    sorted.sort((a, b) => {
      const valueA = a[sortedField];
      const valueB = b[sortedField];

      if (valueA === undefined || valueB === undefined) {
        return 0;
      }

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB);
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }

      return 0;
    });
  }

  if (pagination.perPage === PaginationPerPage.All) {
    return sorted;
  }

  const start = (pagination.page - 1) * +pagination.perPage;
  const end = start + +pagination.perPage;

  return sorted.slice(start, end);
}
