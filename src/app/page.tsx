import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
