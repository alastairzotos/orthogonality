
export const urls = {
  home: () => '/',
  businessCreate: () => '/business/create',
  businessEdit: (id: string) => `/business/edit/${id}`,
  businessManage: (id: string) => `/business/manage/${id}`,
  staffMemberCreate: (businessId: string) => `/staff-members/${businessId}/create`,
  staffMemberEdit: (businessId: string, id: string) => `/staff-members/${businessId}/edit/${id}`,
}
