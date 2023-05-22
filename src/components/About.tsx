import { FC } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constans";
import { IServices } from "../models/constans";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  service: IServices;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({
  service,
  index,
}: ServiceCardProps) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            style={{
              // maxWidth: "45px",
              transform: "scale(1)",
              transition: "all 450ms ease-in-out",
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 object-contain "
            />
            <h3 className="text-white text-center text-[20px] font-bold">
              {service.title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About: FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software engineer with experience in TypeScript, React,
        ReactNative and Swift. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dignissimos vel tenetur, culpa aspernatur quas omnis
        explicabo quo ratione suscipit labore doloremque, optio quisquam
        laudantium reiciendis nihil animi, reprehenderit asperiores error!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default function SectionWrappers() {
  return <SectionWrapper Component={About} idName="about" />;
}
