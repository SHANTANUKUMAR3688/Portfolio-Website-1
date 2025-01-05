
import SocialButton from "./SocialButton";
import { motion } from "framer-motion";
import Animation from "./Animation";

const Hero = () => {
  return (
    <>
      <section className="relative w-full">
        <header className=" w-1/2 aspect-[16/2] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
        <header className=" w-1/2 aspect-[16/1] -skew-x-12 rounded-full bg-gradient-to-r from-[blue] via-[purple] to-[yellow] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
        <section className="w-full px-5 sm:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
          <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-1 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
            <section className="lg:py-0 flex justify-between">
              <section className="ml-2 md:ml-12">
                <header className="text-center lg:text-left">
                  <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                    Hi, I’m{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-500">
                      SHANTANU
                    </span>
                  </h1>
                </header>

                <Animation className="pt-5 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl"
                    codeblock={`Passionate and motivated Full-Stack Developer specializing in the MERN Stack, with a solid foundation in software development principles.`}
                    codeColor={"text-white"} />
                    <br/>
                <SocialButton/>
              </section>
            </section>

            <figure className="lg:h-full md:flex md:justify-end mt-20 md:mt-0">
              <motion.div
                className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex justify-center items-center p-3 rounded-full overflow-hidden relative"
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
    </>
  );
};

export default Hero;

