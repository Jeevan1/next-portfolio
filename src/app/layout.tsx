import type { Metadata } from "next";
import "./globals.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: {
    default: "Jeevan Shrestha | Frontend Developer",
    template: "%s - Jeevan Shrestha | Frontend Developer",
  },

  description: "Hi I'm Jeevan Shrestha, a software developer ",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script async src="https://kit.fontawesome.com/d95f511298.js"></script>
      </body>
    </html>
  );
}
