
export const urls = {
  home: () => '/',
  businessCreate: () => '/business/create',
  businessEdit: (id: string) => `/business/edit/${id}`,
  businessManage: (id: string) => `/business/manage/${id}`,
}
