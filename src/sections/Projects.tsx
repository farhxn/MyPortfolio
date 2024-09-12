import pos from "@/assets/images/pos.png";
import plantApp from "@/assets/images/plant.jpeg";
import event from "@/assets/images/event.jpeg";
import restuarant from "@/assets/images/restuarant.png";
import realEstae from "@/assets/images/realEstate.png";
import jobPortal from "@/assets/images/jobPortal.png";
import shoes from "@/assets/images/shoes.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "New TechEra Software House",
    year: "2022",
    title: "Point of Sale (POS)",
    results: [
      { title: "Enhanced Order Management" },
      { title: "Real-Time Inventory Tracking & Alerts" },
      { title: "Seamless Payment Processing" },
    ],
    link: "https://newtechera.com",
    image: pos,
  },
  {
    company: "DSA Project",
    year: "2024",
    title: "Real Estate | Laravel",
    results: [
      { title: "AI recommendations for your dream property." },
      { title: "Buy, rent, or sell - all in one app." },
      { title: "Reviews & integrated Google Maps." },
    ],
    link: "https://github.com/farhxn/Real-Estate-Web-Aplication.git",
    image: realEstae,
  },
  {
    company: "Exhibition Project",
    year: "2022",
    title: "Job Portal | ASP .Net MVC",
    results: [
      { title: "Find full-time jobs and freelance projects." },
      { title: "Companies post jobs & find skilled freelancers." },
      { title: "Streamlined workflow for both employers & job seekers." },
    ],
    link: "https://github.com/farhxn/JobSeeker-.Net-MVC-Project.git",
    image: jobPortal,
  },
  {
    company: "Semester Project",
    year: "2023",
    title: "Shoes Web App | ASP .Net MVC",
    results: [
      { title: "Effortless shoe shopping with advanced registration." },
      { title: "Track your orders in real-time for peace of mind." },
      { title: "Stay informed with email confirmations at every step." },
    ],
    link: "https://github.com/farhxn/Ecommerce-Shoes-website-ASP-.NET-MVC",
    image: shoes,
  },
  {
    company: "Global Competition",
    year: "2023",
    title: "Plant App | Android Java",
    results: [
      { title: "AI guidance for happy plants." },
      { title: "Shop plants & accessories in-app." },
      { title: "20% sales increase (2023)." },
    ],
    link: "https://www.mediafire.com/file/v1aqcb2z7y3z96p/base.apk/file",
    image: plantApp,
  },
  {
    company: "FreeLance Client",
    year: "2023",
    title: "Events and Society App | Flutter",
    results: [
      { title: "Effortless event signup & tracking." },
      { title: "Share event stories like Instagram." },
      { title: "Connect & engage with your community." },
    ],
    link: "https://www.mediafire.com/file/v1aqcb2z7y3z96p/base.apk/file",
    image: event,
  },
  {
    company: "Semester Projects",
    year: "2023",
    title: "Restuarant Landing Page",
    results: [
      { "title": "Boosted Conversions by 25%" },  // Specific, measurable result
      { "title": "Streamlined User Flow (20% Faster)" }, // User-centric benefit
      { "title": "Fully Responsive with CSS Grid" }, // Technical detail
  
    ],
    link: "https://farhanatiffoodwebsite.netlify.app/",
    image: restuarant,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 " id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          description="See how I transform concepts into engaging digital experience."
          title="Featured Projects"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-slate-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6  rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
