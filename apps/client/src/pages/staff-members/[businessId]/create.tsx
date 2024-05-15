import { StaffMemberForm } from "@/components/staff-member-form";
import { useCreateStaffMember } from "@/hooks/staff-members";
import { NextPage } from "next";
import { useRouter } from "next/router";

const StaffMemberCreatePage: NextPage = () => {
  const router = useRouter();
  const businessId = router.query.businessId as string;
  
  const { createStaffMember, createStaffMemberError, createStaffMemberStatus } = useCreateStaffMember(businessId, {
    onSuccess: () => router.back(),
  })

  return (
    <StaffMemberForm
      submitTitle="Create"

      staffMember={{
        businessId,
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        position: 'kitchen',
      }}

      onChange={createStaffMember}
      disabled={createStaffMemberStatus === 'pending'}
      error={createStaffMemberError}
    />
  )
}

export default StaffMemberCreatePage;
