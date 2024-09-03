import type { Metadata } from "next";
import "./globals.css";
import {Inter,Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:['latin'], variable:'--font-sans'});
const calistoga = Calistoga({subsets:['latin'], variable:'--font-serif', weight:['400']});


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Explore the portfolio of a passionate Full Stack Developer specializing in .NET MVC/Core, Laravel, and mobile development using Java and Flutter. Winner of a prestigious global mobile competition.",
  keywords: [
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
      name: "Your Name", // Replace with your name
      url: "https://yourportfolio.com" // Replace with your portfolio URL
    }
  ],
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle" // Replace with your Twitter handle
  },
  openGraph: {
    title: "My Portfolio",
    description: "Discover my work as a Full Stack Developer with expertise in .NET, Laravel, and mobile technologies. Proud winner of a global mobile competition.",
    images: "https://yourportfolio.com/profile-image.jpg", // Replace with a link to your profile image
    type: "website"
  }
};



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

