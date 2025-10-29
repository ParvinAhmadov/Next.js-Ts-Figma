import AboutComparisonBlock from "@/components/AboutComparisonBlock";
import DataJourneySection from "@/components/DataJourneySection/DataJourneySection";
import GetAboutHero from "@/components/GetAboutHero/GetAboutHero";
import MissionSection from "@/components/MissionSection";
import WhyChooseSearchart from "@/components/WhyChooseSearchart";

export default function AboutPage() {
  return (
    <>
      <MissionSection />
      <AboutComparisonBlock />
      <WhyChooseSearchart />
      <DataJourneySection />
      <GetAboutHero />
    </>
  );
}
