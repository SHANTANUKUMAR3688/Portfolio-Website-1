
import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "./data/Config";

function Projects() {
  return (
    <>
      <section className="pt-20 ml-7 mr-7" id="projects">
        <h2 className="mb-16 relative text-center text-6xl font-bold text-blue-500">PROJECTS</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Updated styling and fixed class names */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 md:group-hover:opacity-100">
                <h3 className="mb-2 text-xl">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-500"
                >
                  <div className="flex items-center">
                    <span>See Live Preview</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
