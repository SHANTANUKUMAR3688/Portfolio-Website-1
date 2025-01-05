

import { motion } from 'framer-motion';

export default function Footer() {
    const sentence = "Made by SHANTANU";
    const letter = sentence.split("");



    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <footer className="relative z-10 text-white border-t-2 border-t-white mt-8">
                <div className="container p-8 flex justify-between">
                    <nav className="flex ml-2">
                        {letter.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={variants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                className={`inline-block ${
                                    letter === " " ? "mr-4" : "mr-1"
                                }`}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </nav>
                    <nav className="flex mr-0">
                        {letter.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={variants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                className={`inline-block ${
                                    letter === " " ? "mr-4" : "mr-1"
                                }`}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </nav>
                </div>
            </footer>
        </>
    );
}
