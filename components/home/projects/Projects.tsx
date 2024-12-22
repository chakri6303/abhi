import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Enabling Efficient Secure and Privacy preserving Mobile Cloud Storage",
    imgSrc: "/project-imgs/cloud.jpg",
    code: "https://github.com/chakri6303/Blood_Bank",
    projectLink: "#",
    tech: ["Python", "Mysql", "HTML", "CSS","Javascript"],
    description: "Mobile cloud storage provides users with the ability to store and access data via mobile devices and cloud services.",
    modalContent: (
      <>
        <p>
        Efficient, secure, and privacy-preserving mobile cloud storage is crucial as more users rely on cloud services. The main challenges involve protecting sensitive data and ensuring privacy, especially with the limited resources of mobile devices.
        </p>
        <p>
        Encryption techniques, such as homomorphic encryption, help secure data while allowing computations on it. Access control mechanisms ensure only authorized users can retrieve sensitive information.
        </p>
        <p>
        Methods like Proof of Retrievability (PoR) verify data integrity without downloading the entire dataset. Privacy-preserving techniques, like data anonymization, protect user identities.
        </p>
        <p>
        Emerging technologies like hybrid cryptosystems and blockchain aim to further enhance security and efficiency in mobile cloud storage.
        </p>
      </>
    ),
  },
]
