import Layout from "../layout/Layout";
import AboutPreview from "./AboutPreview";
import EngineeringApproach from "./EngineeringApproach";
import EngineeringPrinciples from "./EngineeringPrinciples";
import EngineeringSignal from "./EngineeringSignal";
import ExperiencePreview from "./ExperiencePreview";
import Hero from "./Hero";
import SelectedWork from "./SelectedWork";
import TechnicalCapabilities from "./TechnicalCapabilities";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <EngineeringSignal />
        <SelectedWork />
        <EngineeringApproach />
        <EngineeringPrinciples />
        <TechnicalCapabilities />
        <ExperiencePreview />
        <AboutPreview />
      </main>
    </Layout>
  );
}
