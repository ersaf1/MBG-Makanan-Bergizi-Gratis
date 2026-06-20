import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { ProgramFlow } from "@/components/ProgramFlow";
import { FoodMenu } from "@/components/FoodMenu";
import { NutritionAnalytics } from "@/components/NutritionAnalytics";
import { ImpactStats } from "@/components/ImpactStats";
import { Gallery } from "@/components/Gallery";
import { Education } from "@/components/Education";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <ProgramFlow />
        <FoodMenu />
        <NutritionAnalytics />
        <ImpactStats />
        <Gallery />
        <Education />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
