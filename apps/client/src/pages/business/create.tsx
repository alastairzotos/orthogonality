import { BusinessForm } from "@/components/business-form";
import { useCreateBusiness } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BusinessCreatePage: NextPage = () => {
  const router = useRouter();

  const { createBusiness, createBusinessStatus, createBusinessError } = useCreateBusiness();

  useEffect(() => {
    if (createBusinessStatus === 'success') {
      router.push(urls.home());
    }
  }, [createBusinessStatus]);

  return (
    <BusinessForm
      submitTitle="Create"

      business={{
        name: 'New business',
        location: '123 Fake Street',
        type: 'restaurant'
      }}

      onCancel={() => router.push(urls.home())}
      onChange={business => createBusiness(business)}

      disabled={createBusinessStatus === 'pending'}
      error={createBusinessError}
    />
  )
}

export default BusinessCreatePage;
