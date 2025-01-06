import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";



const Navbar = () => {
    const [menu, setmenu] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 43px 43px)",
            transition: { type: "spring", duration: 0.8 },
        },
        closed: {
            clipPath: "circle(30px at 43px 43px)",
            transition: { type: "spring", duration: 0.8 },
        },
    };

    const items = [
        { id: 1, text: "About" },
        { id: 2, text: "Projects" },
        { id: 3, text: "Skills" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <div className=" top-0 left-0 w-full bg-black text-white z-50 lg:flex justify-between ">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto hidden md:flex justify-between items-center py-4 px-6"
            >
                <div className="text-2xl font-bold flex items-center gap-1">
                    <span className="text-white">Port</span>
                    <span className="text-purple-500">folio</span>
                </div>
                <div className="flex items-center space-x-6 text-lg">
                    {items.map((item) => (
                        <a key={item.id}
                        href={`#${item.text.toLowerCase()}`}
                        className="hover:text-purple-500 cursor-pointer">
                            {item.text}
                        </a>
                    ))}
                </div>
                <a
                    href="https://docs.google.com/document/d/1nUqcfsOMmYIbqJSXOygvKtoSVqWpJfUf/edit?usp=sharing&ouid=115142436485296858419&rtpof=true&sd=true" target="_blank"
                    className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
                >
                    Download CV
                </a>
            </motion.div>

            <div className="flex md:hidden justify-between">
                <motion.div animate={menu ? "open" : "closed"}>
                    <motion.div
                        variants={variants}
                        onClick={() => setmenu((prev) => !prev)}
                        className="bg-white sm:w-1/3 h-screen text-black fixed z-10"
                    >
                        <div className="px-7 py-6">
                            {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
                        </div>
                        {menu && (
                            <div className="flex flex-col items-center justify-center">
                                <ul className="space-y-6 text-black text-lg">
                                    {items.map((item) => (
                                        <li
                                            className="hover:text-purple-500 duration-200 cursor-pointer"
                                            key={item.id}
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                                <a className="text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full">
                                    Download CV
                                </a>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="text-xl font-bold items-center gap-2 py-6 px-4"
                    initial={{ opacity: 0, x: 100, y: -100 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-white">iron</span>
                    <span className="text-purple-500">coding</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;

