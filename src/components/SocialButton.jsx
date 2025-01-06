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
      <motion.a
        className="text-red-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw"
        target="_blank"
      >
        <SiGmail />
      </motion.a>

      {/* Github Icon */}
      <motion.a
        className="text-yellow-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        href="https://github.com/SHANTANUKUMAR3688"
        target="_blank"
      >
        <FaGithub />
      </motion.a>

      {/* LinkedIn Icon */}
      <motion.a
        className="text-blue-500 text-4xl"
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        href="https://www.linkedin.com/in/shantanukumar3688/"
        target="_blank"
      >
        <FaLinkedinIn />
      </motion.a>

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
