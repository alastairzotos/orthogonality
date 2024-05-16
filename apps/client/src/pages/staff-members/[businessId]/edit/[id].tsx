import { StaffMemberForm } from "@/components/staff-member-form";
import { useStaffMember, useUpdateStaffMember } from "@/hooks/staff-members";
import { Alert, LinearProgress } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

const StaffMemberEditPage: NextPage = () => {
  const router = useRouter();

  const { businessId, id } = router.query as Record<string, string>;

  const { loadStaffMemberStatus, loadStaffMemberError, staffMember } = useStaffMember(id);

  const { updateStaffMemberStatus, updateStaffMemberError, updateStaffMember } = useUpdateStaffMember(businessId, {
    onSuccess: () => router.back(),
  })

  if (loadStaffMemberStatus === 'pending') {
    return <LinearProgress />;
  }

  if (loadStaffMemberError) {
    return (
      <Alert severity="error">
        There was an error loading the staff member
      </Alert>
    )
  }

  return (
    <StaffMemberForm
      submitTitle="Update"
      staffMember={staffMember!}

      onChange={(member) => updateStaffMember({ id, staffMember: member })}
      disabled={updateStaffMemberStatus === 'pending'}
      error={updateStaffMemberError}
    />
  )
}

export default StaffMemberEditPage;
