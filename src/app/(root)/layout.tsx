import {
  MainBanner,
  Header,
  About,
  Skills,
  Background,
  Testimonials,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Header />
        <MainBanner />
        <About />
        <Skills />
        <Background />
        <Testimonials />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
