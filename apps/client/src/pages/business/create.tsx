import { BusinessForm } from "@/components/business-form";
import { useCreateBusiness } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BusinessCreatePage: NextPage = () => {
  const router = useRouter();

  const create = useCreateBusiness();

  useEffect(() => {
    if (create.status === 'success') {
      router.push(urls.home());
    }
  }, [create.status]);

  return (
    <BusinessForm
      submitTitle="Create"
      
      business={{
        name: 'New business',
        location: '123 Fake Street',
        type: 'Restaurant'
      }}

      onCancel={() => router.push(urls.home())}
      onChange={business => create.mutate(business)}

      disabled={create.isPending}
      error={create.error?.response?.data['message']}
    />
  )
}

export default BusinessCreatePage;
