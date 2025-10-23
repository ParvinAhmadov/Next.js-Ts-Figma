import CountryDashboard from "@/components/CountryDashboard";
import InfoSearch from "@/components/InfoSearch";
import SectorGrid from "@/components/SectorsCard";

export default function Home() {
  return (
    < >
     <InfoSearch/>
      <SectorGrid />
      <CountryDashboard />
    </>
  );
}
