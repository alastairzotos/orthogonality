import { httpClient } from "@/clients/http-client";
import { CreateBusinessDto, GetBusinessDto, UpdateBusinessDto } from "@repo/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBusinesses = () => {
  const { error, data, status } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => httpClient.get('/businesses').then(res => res.data as GetBusinessDto[]),
  });

  return {
    businesses: data,
    loadBusinessesStatus: status,
    loadBusinessesError: error?.response?.data.message,
  }
}

export const useCreateBusiness = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: (business: CreateBusinessDto) => httpClient.post<void>('/businesses', business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses'] }),
  })

  return {
    createBusiness: create.mutate,
    createBusinessStatus: create.status,
    createBusinessError: create.error?.response?.data.message,
  }
}

export const useBusiness = (id: string) => {
  const { error, data, status } = useQuery({
    queryKey: ['businesses', id],
    queryFn: () => httpClient.get(`/businesses/${id}`).then(res => res.data as GetBusinessDto),
  });

  return {
    business: data,
    loadBusinessStatus: status,
    loadBusinessError: error?.response?.data.message,
  }
}

export const useUpdateBusiness = (id: string) => {
  const queryClient = useQueryClient();

  const update = useMutation({
    mutationFn: ({ id, business }: { id: string, business: UpdateBusinessDto }) => httpClient.put<void>(`/businesses/${id}`, business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses', id] }),
  })

  return {
    updateBusiness: update.mutate,
    updateBusinessStatus: update.status,
    updateBusinessError: update.error?.response?.data.message,
  }
}
