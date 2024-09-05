import { Header, Footer } from "@/components";
import { wait } from "@/helpers";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await wait(500);
  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
