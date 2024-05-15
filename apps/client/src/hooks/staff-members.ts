import { httpClient } from "@/clients/http-client"
import { HookOptions, useHookOptions } from "@/hooks/hook-options"
import { CreateStaffMemberDto, GetStaffMemberDto, UpdateStaffMemberDto } from "@repo/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useCreateStaffMember = (businessId: string, hookOptions: HookOptions = {}) => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (staffMember: CreateStaffMemberDto) => httpClient.post<void>('/staff-members', staffMember),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['staff-members', businessId] }),
  })

  useHookOptions(create.status, hookOptions)

  return {
    createStaffMember: create.mutate,
    createStaffMemberStatus: create.status,
    createStaffMemberError: create.error?.response?.data.message,
  }
}

export const useStaffMember = (id: string, options: HookOptions = {}) => {
  const { error, data, status } = useQuery({
    queryKey: ['staff-member', id],
    queryFn: () => httpClient.get(`/staff-members/${id}`).then(res => res.data as GetStaffMemberDto),
  })

  useHookOptions(status, options);

  return {
    staffMember: data,
    loadStaffMemberStatus: status,
    loadStaffMemberError: error?.response?.data.message,
  }
}

export const useUpdateStaffMember = (businessId: string, id: string, hookOptions: HookOptions = {}) => {
  const queryClient = useQueryClient();

  const update = useMutation({
    mutationFn: ({ id, staffMember }: { id: string, staffMember: UpdateStaffMemberDto }) => httpClient.put<void>(`/staff-members/${id}`, staffMember),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['staff-members', businessId] }),
  })

  useHookOptions(update.status, hookOptions)

  return {
    updateStaffMember: update.mutate,
    updateStaffMemberStatus: update.status,
    updateStaffMemberError: update.error?.response?.data.message,
  }
}
