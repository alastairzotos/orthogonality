export type AsTable<T extends Object> = T & {
  id: string;
  createdOn: string;
  updatedOn: string;
};
