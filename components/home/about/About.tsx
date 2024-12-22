import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            I am Abhipriya Pedasingu, a B.Tech student in Computer Science Engineering with a strong focus on programming and cloud technologies. I have earned certifications in Cloud Fundamentals and Data Analytics, which highlight my dedication to continuous learning.</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            During my internship at BAtalks Pvt Ltd., I developed the "Voice Memorize" application, where I managed both frontend and backend tasks using HTML, CSS, JavaScript, and backend frameworks. I also worked on a mobile cloud storage project designed to ensure security, efficiency, and privacy with advanced features like encryption and access control.</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy digital painting. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
