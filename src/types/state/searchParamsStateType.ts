import { PaginationParams } from '@models/common/PaginationParamsType';

export interface SearchParamsStateType {
  query: string | null;
  sort: string | null;
  pagination: PaginationParams | null;
}
