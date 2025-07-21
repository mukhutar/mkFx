import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { brokers } from "../constants";

const FeedbackCard = ({ index, name, description, referral_link, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='flex flex-col items-center text-center'>
      <img src={image} alt={name} className='w-16 h-16 rounded-full object-cover mb-4' />
      <p className='text-white font-bold text-[20px]'>{name}</p>
      <p className='text-secondary text-[16px] mt-2'>{description}</p>
      <a
        href={referral_link}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-4 text-blue-300 font-semibold relative inline-block 
             transition-transform transform hover:scale-105 
             after:content-[""] after:absolute after:left-0 after:bottom-0 
             after:w-full after:h-[2px] after:bg-blue-300 
             after:scale-x-0 after:transition-transform after:duration-300 
             hover:after:scale-x-100 hover:text-blue-400 '

      >
        Sign Up Here 
      </a>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Brokers</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {brokers.map((broker, index) => (
          <FeedbackCard key={broker.name} index={index} {...broker} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
