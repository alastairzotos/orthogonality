import { BusinessForm } from "@/components/business-form";
import { useCreateBusiness } from "@/hooks/businesses";
import { NextPage } from "next";
import { useRouter } from "next/router";

const BusinessCreatePage: NextPage = () => {
  const router = useRouter();

  const { createBusiness, createBusinessStatus, createBusinessError } = useCreateBusiness({
    onSuccess: () => router.back(),
  });

  return (
    <BusinessForm
      submitTitle="Create"

      business={{
        name: 'New business',
        location: '123 Fake Street',
        type: 'restaurant'
      }}

      onChange={createBusiness}
      disabled={createBusinessStatus === 'pending'}
      error={createBusinessError}
    />
  )
}

export default BusinessCreatePage;
