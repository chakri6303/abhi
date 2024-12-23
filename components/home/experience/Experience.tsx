import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "BAtalks Pvt Ltd",
    position: "Fullstack Developer",
    time: "October 2024 - December 2024",
    location: "Hyderabad,Telangana",
    description:
      "I developed the Voice Memorize project for CA students, handling both frontend and backend development. I focused on creating a responsive design and efficient user management, utilizing technologies like HTML, CSS, and JavaScript. The project received positive feedback for its effectiveness.",
    tech: [
      "Flask",
      "CSS",
      "HTML",
      "Javascript",
      "Python",
      "Git",
      "Github",
    ],
  },
  // {
  //   title: "Simple Cloudology",
  //   position: "React Developer",
  //   time: "Jan 2020 - April 2021",
  //   location: "Sheridan, Wyoming",
  //   description:
  //     "Worked as a developer and created dynamic reusable components, integrate calendly, messaging functionality and project management features.",
  //   tech: [
  //     "React",
  //     "Nextjs",
  //     "Sytled Components",
  //     "Firebase Auth",
  //     "Websockets",
  //     "Calendly",
  //     "Git",
  //     "Github",
  //   ],
  // },
  // {
  //   title: "IFormat Logic",
  //   position: "Fullstack Developer",
  //   time: "Aug 2020 - Dec 2020",
  //   location: "Palanginan, Zambales",
  //   description:
  //     "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
  //   tech: ["Vuejs", "Laravel", "Tailwind", "Git", "Github"],
  // },
];
