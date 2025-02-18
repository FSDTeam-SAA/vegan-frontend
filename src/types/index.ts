export interface DropDownItem {
  id: number;
  name: string;
  value: string;
}

export type MetaPagination = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};
