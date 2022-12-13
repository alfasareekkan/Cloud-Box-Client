import React from 'react';
import { motion } from 'framer-motion';
import logoText from '../../assets/logoText.png';
import './PreLoader.css';

const imageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

function PreLoader() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="blink">
        <motion.img variants={imageVariants} initial="hidden" animate="visible" src={logoText} className="" alt="" />
      </div>
    </div>
  );
}

export default PreLoader;
