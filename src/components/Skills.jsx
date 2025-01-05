//  /* eslint-disable react/prop-types */

// import { motion } from "framer-motion";
// import { SKILLS } from "./data/Config";

// function Skills() {
//   const SkillCircle = ({ skill, icon }) => {
//     const radius = 50;
//     const circumference = 2 * Math.PI * radius;
//     //const strokeDashoffset = circumference - (percentage / 100) * circumference;

//     return (
//       <motion.article
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.1 }}
//         transition={{ duration: 1 }}
//         className="relative flex flex-col items-center"
//       >
//         <svg width={120} height={120} className="rotate-[-90deg]">
//           {/* Static background circle */}
//           <circle
//             cx={60}
//             cy={60}
//             r={50}
//             fill="transparent"
//             stroke="#ffffff29"
//             strokeWidth={10}
//           />
//           {/* Animated yellow border circle */}
//           <motion.circle
//             cx={60}
//             cy={60}
//             r={50}
//             fill="transparent"
//             stroke="#FFC107"
//             strokeWidth={10}
//             strokeDasharray={circumference}
//             initial={{ strokeDashoffset: circumference }}
//             animate={{
//               strokeDashoffset: [circumference, 0], // Animate from full circle to empty
//             }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity, // Loop infinitely
//               repeatType: "reverse", // Reverse the animation
//             }}
//           />
//         </svg>
//         <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img src={icon} alt={skill} className="w-10 h-10 mb-1" />
//           <p className="text-sm">{skill}</p>
//         </div>
//       </motion.article>
//     );
//   };

//   return (
//     <>
//       <section className="relative" id="skills">
//         <header className="absolute w-1/2 aspect-[16/3] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
//         <header className="absolute w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
//         <div className="text-blue-500 text-center text-6xl font-bold mt-20">
//           My Skills
//         </div>
//         <section className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-2">
//           {SKILLS.map((item, index) => (
//             <motion.article
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: index * 0.5,
//               }}
//               viewport={{ once: true, amount: 0.5 }}
//             >
//               <SkillCircle
//                 skill={item.skill}
//                 //percentage={item.percentage}
//                 icon={item.icon}
//               />
//             </motion.article>
//           ))}
//         </section>
//       </section>
//     </>
//   );
// }

// export default Skills;




/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { SKILLS } from "./data/Config";

function Skills() {
  const SkillCircle = ({ skill, icon }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    return (
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center"
      >
        <svg width={120} height={120} className="rotate-[-90deg]">
          {/* Static background circle */}
          <circle
            cx={60}
            cy={60}
            r={50}
            fill="transparent"
            stroke="#ffffff29"
            strokeWidth={10}
          />
          {/* Animated yellow border circle */}
          <motion.circle
            cx={60}
            cy={60}
            r={50}
            fill="transparent"
            stroke="#FFC107"
            strokeWidth={10}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: 0, // Animate from full to empty circle
            }}
            transition={{
              duration: 2, // Animation duration
              ease: "easeInOut", // Smooth easing
            }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={icon} alt={skill} className="w-10 h-10 mb-1" />
          <p className="text-sm">{skill}</p>
        </div>
      </motion.article>
    );
  };

  return (
    <>
      <section className="relative" id="skills">
        <header className="absolute w-1/2 aspect-[16/3] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
        <div className="text-blue-500 text-center text-6xl font-bold mt-20">
          My Skills
        </div>
        <section className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-2">
          {SKILLS.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.5,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <SkillCircle skill={item.skill} icon={item.icon} />
            </motion.article>
          ))}
        </section>
      </section>
    </>
  );
}

export default Skills;
