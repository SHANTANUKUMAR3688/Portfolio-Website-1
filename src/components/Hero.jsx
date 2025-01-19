
import SocialButton from "./SocialButton";
import { motion } from "framer-motion";
import Animation from "./Animation";
import { RiTelegram2Line } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="relative w-full" id="about">
      {/* Background Gradients */}
      <header className="w-1/2 aspect-[16/2] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>

      {/* Main Content */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-1 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          {/* Text Section */}
          <section className="lg:py-0 lg:ml-20 flex flex-col justify-center items-center lg:items-start">
            <header className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-500">
                  SHANTANU
                </span>
              </h1>
              <p className="text-white font-bold text-xl sm:text-2xl mt-2">
                Web Developer
              </p>
            </header>

            {/* Animation Section */}
            <Animation
              className="pt-5 text-center lg:text-left mx-auto max-w-[280px] sm:max-w-[370px] md:max-w-xl"
              codeblock={`Passionate and motivated Full-Stack Developer specializing in the MERN Stack, with a solid foundation in software development principles.`}
              codeColor={"text-white"}
            />

            {/* Social Button */}
            <div className="flex justify-center lg:justify-start mt-4">
              <SocialButton />
            </div>

            {/* Connect Button */}
            <div className="flex justify-center lg:justify-start mt-4">
              <button className="text-white flex items-center justify-center space=-x-2 bg-yellow-500 rounded-lg h-10 px-6 sm:w-44 font-bold">
                Let’s Connect
                <RiTelegram2Line className="text-2xl" />
              </button>
            </div>
          </section>

          {/* Image Section */}
          <figure className="flex justify-center lg:justify-end mt-10 md:mt-0 lg:mr-10">
            <motion.div
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
              animate={{
                backgroundColor: ["#FFC107", "#FF7556", "#ff6667"],
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
                alt="Hero Pic"
                className="absolute inset-0 w-full h-full object-cover z-10 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-500 ease-in-out"
              />
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
};

export default Hero;

