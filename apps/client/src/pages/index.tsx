import { BusinessTable } from "@/components/business-table";
import { useBusinesses } from "@/hooks/businesses";
import { urls } from "@/utils/urls";
import { Alert, Box, Button, LinearProgress } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const { loadBusinessesStatus, loadBusinessesError, businesses } = useBusinesses();

  if (loadBusinessesStatus === 'pending') {
    return <LinearProgress />;
  }

  if (loadBusinessesError) {
    return (
      <Alert severity="error">
        There was an error loading the businesses
      </Alert>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <BusinessTable businesses={businesses!} />

      <Link href={urls.businessCreate()}>
        <Button variant="contained">
          Create Business
        </Button>
      </Link>
    </Box>
  );
}
