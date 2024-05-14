import { httpClient } from "@/clients/http-client";
import { useQuery } from "@tanstack/react-query";

export const useBusinesses = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['businesses'],
    queryFn: () => httpClient.get('/businesses').then(res => res.data)
  });

  return {
    isLoadingBusinesses: isFetching,
    errorLoadingBusinesses: error,
    businesses: data,
  }
};
