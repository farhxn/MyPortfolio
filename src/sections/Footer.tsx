import ArrowRightIconUp from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/farhan.atif.5036?mibextid=ZbWKwL",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/farhan._atif?igsh=Nzd2MjlpenN1cnJi",
  },
  {
    title: "Github",
    href: "https://github.com/farhxn",
  },
  {
    title: "Linkedin",
    href: "https://pk.linkedin.com/in/farhanatif",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background element */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
      
      <div className="container relative z-10"> {/* Ensuring container is above the background */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All Rights Reserved.</div>
          
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((Footer) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={Footer.href}
                key={Footer.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{Footer.title}</span>
                <ArrowRightIconUp className="w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
