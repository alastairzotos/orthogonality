import { StaffMemberTable } from "@/components/staff-members-table";
import { useBusiness } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { Alert, Box, Button, LinearProgress, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const ManageBusinessPage: NextPage = () => {
  const router = useRouter();
  const businessId = router.query.id as string;

  const { loadBusinessStatus, loadBusinessError, business } = useBusiness(businessId);


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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography variant="h4">Manage {business?.name}</Typography>
        <Button component={Link} href={urls.businessEdit(business?.id!)}>
          Edit business details
        </Button>
      </Box>

      <Typography variant="h6">Staff</Typography>
      <StaffMemberTable business={business!} />

      <Link href={urls.staffMemberCreate(businessId)}>
        <Button variant="contained">
          Add staff member
        </Button>
      </Link>
    </Box>
  )
}

export default ManageBusinessPage;
