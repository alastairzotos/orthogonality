import { httpClient } from "@/clients/http-client";
import { CreateBusinessDto, GetBusinessDto } from "@repo/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useBusinesses = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => httpClient.get('/businesses').then(res => res.data as GetBusinessDto[])
  });

  return {
    isLoadingBusinesses: isFetching,
    errorLoadingBusinesses: error,
    businesses: data,
  }
};

export const useCreateBusiness = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (business: CreateBusinessDto) => httpClient.post<void>('/businesses', business),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['businesses'] }),
  })
}
