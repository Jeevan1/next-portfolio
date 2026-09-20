import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://sthajeevan.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Jeevan Shrestha | Frontend Developer",
    template: "%s | Jeevan Shrestha",
  },

  description:
    "I'm Jeevan Shrestha, a Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio of projects, skills, and experience.",

  keywords: [
    "Jeevan Shrestha",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Nepal",
    "JavaScript Developer",
    "Portfolio",
    "UI/UX",
    "Kathmandu",
    "Django Developer"
  ],

  authors: [{ name: "Jeevan Shrestha", url: BASE_URL }],
  creator: "Jeevan Shrestha",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Jeevan Shrestha | Portfolio",
    title: "Jeevan Shrestha | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js. Building fast, accessible, and beautiful web experiences.",
    images: [
      {
        url: "/assets/images/banner/banner-right-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeevan Shrestha - Frontend Developer",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jeevan Shrestha | Frontend Developer",
    description:
      "Frontend Developer specializing in React and Next.js. Building fast, accessible, and beautiful web experiences.",
    images: ["/assets/images/banner/banner-right-image.jpg"],
    creator: "@sthajeevan",
  },

  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
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
        <script
          async
          src="https://kit.fontawesome.com/d95f511298.js"
        ></script>
      </body>
    </html>
  );
}
