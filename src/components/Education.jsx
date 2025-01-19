/* eslint-disable no-unused-vars */

import { motion } from "framer-motion"; // Fixed import
import { EDUCATION } from "./data/Config";

const SectionItem = ({ id, degree, institution, title, subtitle, details, year, icon }) => (
  <motion.article
    className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-[yellow] before:to-[pink] before:z-[-10] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[pink] after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
  >
    <section className="bg-black z-20 text-white rounded-xl">
      <section className="border border-yellow-500 bg-purple-900 rounded-xl p-3 flex items-center">
        <img src={icon} alt="icon" width={64} height={64} />
        <div className="ml-10">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
          <p className="text-sm italic">{year}</p>
          {details && <p className="mt-2">{details}</p>}
        </div>
      </section>
    </section>
  </motion.article>
);

export default function Education() {
  return (
    <section className="relative container mx-auto px-4 py-6 lg:p-2" id="experience">
      <div className="text-blue-500 text-center text-6xl font-bold mt-10">
        Education & Experience
        </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {EDUCATION.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}
      </section>
    </section>
  );
}

