import { httpClient } from "@/clients/http-client";
import { CreateBusinessDto, GetBusinessDto, UpdateBusinessDto } from "@repo/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBusinesses = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => httpClient.get('/businesses').then(res => res.data as GetBusinessDto[]),
  });

  return {
    isLoadingBusinesses: isFetching,
    errorLoadingBusinesses: error,
    businesses: data,
  }
}

export const useCreateBusiness = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (business: CreateBusinessDto) => httpClient.post<void>('/businesses', business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses'] }),
  })
}

export const useBusiness = (id: string) => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['businesses', id],
    queryFn: () => httpClient.get(`/businesses/${id}`).then(res => res.data as GetBusinessDto),
  });

  return {
    isLoadingBusiness: isFetching,
    errorLoadingBusiness: error,
    business: data,
  }
}

export const useUpdateBusiness = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, business }: { id: string, business: UpdateBusinessDto }) => httpClient.put<void>(`/businesses/${id}`, business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses', id] }),
  })
}
