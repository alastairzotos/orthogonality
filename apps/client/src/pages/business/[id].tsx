import { BusinessForm } from "@/components/business-form";
import { useBusiness, useUpdateBusiness } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { Alert, LinearProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const EditBusinessPage: NextPage = () => {
  const router = useRouter();
  const businessId = router.query.id as string;

  const { isLoadingBusiness, business, errorLoadingBusiness } = useBusiness(businessId);
  const update = useUpdateBusiness(businessId);

  useEffect(() => {
    if (update.status === 'success') {
      router.push(urls.home());
    }
  }, [update.status]);

  if (isLoadingBusiness) {
    return <LinearProgress />;
  }

  if (errorLoadingBusiness) {
    return (
      <Alert severity="error">
        There was an error loading the business
      </Alert>
    )
  }

  return (
    <BusinessForm
      submitTitle="Update"
      business={business!}

      onCancel={() => router.push(urls.home())}
      onChange={business => update.mutate({ id: businessId, business })}

      disabled={update.isPending}
      error={update.error?.response?.data.message}
    />
  )
}

export default EditBusinessPage;
