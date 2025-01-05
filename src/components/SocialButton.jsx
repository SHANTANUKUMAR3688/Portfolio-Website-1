import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function SocialButton() {
  const animationDuration = 2;
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.5,
      transition: {
        duration: 0.3,
      },
    },
  };

  //     const animationDuration=2;
  //     const variants={
  //         initial:{pathLength:0,strokeOpacity:0, fillOpacity:0},
  //         animate:{
  //             pathLength:1,
  //             strokeOpacity:0,
  //             fillOpacity:1,
  //             transition:{
  //                 duration:animationDuration,
  //                 ease:"easeInOut",
  //                 strokeOpacity:{
  //                     delay:animationDuration
  //                 },
  //                 fillOpacity:{
  //                     delay:animationDuration
  //             }
  //         },
  //         hover:{
  //             scale:1.1,
  //             transition:{
  //                 duration:0.3
  //             },
  //         },
  //     },
  // }

  return (
    <div className="flex space-x-4">
      {/* email Icon */}
      <motion.button
        className="text-red-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <SiGmail />
      </motion.button>

      {/* Github Icon */}
      <motion.button
        className="text-yellow-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaGithub />
      </motion.button>

      {/* LinkedIn Icon */}
      <motion.button
        className="text-blue-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaLinkedinIn />
      </motion.button>

      {/* Twitter Icon */}
      <motion.button
        className="text-blue-400 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaTwitter />
      </motion.button>
    </div>
  );
}
