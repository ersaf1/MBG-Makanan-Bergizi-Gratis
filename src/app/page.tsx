import { NavbarPremium } from "@/components/NavbarPremium";
import { HeroPremium } from "@/components/HeroPremium";
import { AboutPremium } from "@/components/AboutPremium";
import { ProgramPremium } from "@/components/ProgramPremium";
import { ProcessPremium } from "@/components/ProcessPremium";
import { GalleryPremium } from "@/components/GalleryPremium";
import { NewsPremium } from "@/components/NewsPremium";
import { ImpactPremium } from "@/components/ImpactPremium";
import { FooterPremium } from "@/components/FooterPremium";

export default function Home() {
  return (
    <>
      <NavbarPremium />
      <main id="main-content">
        <HeroPremium />
        <AboutPremium />
        <ProgramPremium />
        <ProcessPremium />
        <GalleryPremium />
        <NewsPremium />
        <ImpactPremium />
      </main>
      <FooterPremium />
    </>
  );
}
