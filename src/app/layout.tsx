import type { Metadata } from "next";
import "./globals.css";
import {Inter,Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:['latin'], variable:'--font-sans'});
const calistoga = Calistoga({subsets:['latin'], variable:'--font-serif', weight:['400']});


export const metadata: Metadata = {
  title: "Muhammad Farhan Atif - Full Stack Developer",
  description: "Explore the portfolio of Muhammad Farhan Atif, a passionate Full Stack Developer specializing in .NET MVC/Core, Laravel, and mobile development using Java and Flutter. Winner of a prestigious global mobile competition.",
  keywords: [
    "Muhammad Farhan Atif",
    "Full Stack Developer",
    ".NET MVC",
    ".NET Core",
    "Laravel Developer",
    "Mobile Developer",
    "Java Developer",
    "Flutter Developer",
    "Mobile Competition Winner",
    "Web Development",
    "Software Engineering"
  ],
  authors: [
    {
      name: "Muhammad Farhan Atif",
      url: "https://farhanincode.netlify.app/"
    }
  ],
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle" // Replace with your Twitter handle
  },
  openGraph: {
    title: "Muhammad Farhan Atif - Full Stack Developer",
    description: "Discover my work as a Full Stack Developer with expertise in .NET, Laravel, and mobile technologies. Proud winner of a global mobile competition.",
    images: ["https://farhanincode.netlify.app/profile-image.jpg"], // Replace with a link to your profile image
    type: "website",
    url: "https://farhanincode.netlify.app/"
  },
  robots: {
    index: true,
    follow: true
  },
  viewport: "width=device-width, initial-scale=1.0"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}

