import { BusinessForm } from "@/components/business-form";
import { useBusiness, useUpdateBusiness } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { Alert, LinearProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

const EditBusinessPage: NextPage = () => {
  const router = useRouter();
  const businessId = router.query.id as string;

  const { loadBusinessStatus, loadBusinessError, business } = useBusiness(businessId);
  const { updateBusiness, updateBusinessStatus, updateBusinessError } = useUpdateBusiness(businessId, {
    onSuccess: () => router.push(urls.home())
  });

  if (loadBusinessStatus === 'pending') {
    return <LinearProgress />;
  }

  if (loadBusinessError) {
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
      onChange={business => updateBusiness({ id: businessId, business })}

      disabled={updateBusinessStatus === 'pending'}
      error={updateBusinessError}
    />
  )
}

export default EditBusinessPage;
