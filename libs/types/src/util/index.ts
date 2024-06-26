export type AsTable<T extends Object> = T & {
  id: string;
  createdOn: Date;
  updatedOn: Date;
};
