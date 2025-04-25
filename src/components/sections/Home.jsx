import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10 p-4 flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 leading-tight bg-clip-text text-transparent">
            Hi, I am Abhinav Tripathi
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg">
            I'm a full-stack developer who loves building smooth web applications to robust desktop apps. My goal is to create reliable, user-focused solutions that work seamlessly across platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] w-full sm:w-auto text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1hgRa44NZZlaXf1BVR4aE8TiP7NWUZK2z"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Download CV
            </a>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
