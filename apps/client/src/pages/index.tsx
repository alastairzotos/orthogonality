import { useBusinesses } from "@/hooks/businesses";

export default function Home() {
  const { isLoadingBusinesses, businesses, errorLoadingBusinesses } = useBusinesses();

  return (
    <p>Hello world</p>
  );
}
