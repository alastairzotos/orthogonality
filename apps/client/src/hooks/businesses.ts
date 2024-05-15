import { httpClient } from "@/clients/http-client";
import { CreateBusinessDto, GetBusinessDto, UpdateBusinessDto } from "@repo/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type HookOptions, useHookOptions } from './hook-options';

export const useBusinesses = (hookOptions: HookOptions = {}) => {
  const { error, data, status } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => httpClient.get('/businesses').then(res => res.data as GetBusinessDto[]),
  });

  useHookOptions(status, hookOptions)

  return {
    businesses: data,
    loadBusinessesStatus: status,
    loadBusinessesError: error?.response?.data.message,
  }
}

export const useCreateBusiness = (hookOptions: HookOptions = {}) => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (business: CreateBusinessDto) => httpClient.post<void>('/businesses', business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses'] }),
  })

  useHookOptions(create.status, hookOptions)

  return {
    createBusiness: create.mutate,
    createBusinessStatus: create.status,
    createBusinessError: create.error?.response?.data.message,
  }
}

export const useBusiness = (id: string, hookOptions: HookOptions = {}) => {
  const { error, data, status } = useQuery({
    queryKey: ['businesses', id],
    queryFn: () => httpClient.get(`/businesses/${id}`).then(res => res.data as GetBusinessDto),
  });

  useHookOptions(status, hookOptions)

  return {
    business: data,
    loadBusinessStatus: status,
    loadBusinessError: error?.response?.data.message,
  }
}

export const useUpdateBusiness = (id: string, hookOptions: HookOptions = {}) => {
  const queryClient = useQueryClient();

  const update = useMutation({
    mutationFn: ({ id, business }: { id: string, business: UpdateBusinessDto }) => httpClient.put<void>(`/businesses/${id}`, business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses', id] }),
  })

  useHookOptions(update.status, hookOptions)

  return {
    updateBusiness: update.mutate,
    updateBusinessStatus: update.status,
    updateBusinessError: update.error?.response?.data.message,
  }
}
