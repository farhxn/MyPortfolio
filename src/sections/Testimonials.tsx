import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Syed Arsalan Ahmed",
    position: "CEO @ New TechEra",
    text: "Your commitment, dedication, and positive attitude have made a significant impact on our team and the success of our projects. Your strong work ethic and attention to detail are truly commendable.",
    avatar: memojiAvatar1,
  },
  {
    name: "Kamran",
  position: "CTO @ HealthCare DME",
    text: "I worked closely with Farhan on a healthcare DME project, and I was extremely impressed with his Laravel skills. He delivered a high-quality solution on time and within budget. His attention to detail, problem-solving, and communication skills were exceptional. I highly recommend him for any Laravel development project.",
    avatar: memojiAvatar5,
  },
  {
    name: "Awais",
    position: "Freelance Client",
    text: "I hired a Flutter developer for my mobile app project, and I'm extremely satisfied with the results. The developer did a perfect job in creating a high-quality Flutter application that met all of my requirements.",
    avatar: memojiAvatar3,
  },
  {
    name: "Mujtuba Baloch",
    position: "Faculty Member @ Aptech",
    text: "Farhan is an intelligent and versatile developer with extraordinary skills in ASP .NET MVC, PHP Laravel, Android development, and Flutter. He is a great learner and a true professional who is easy to work with.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Client Say about Me"
          description=" Don't just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-12 lg:mt-22 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8  animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]" >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))} 
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
