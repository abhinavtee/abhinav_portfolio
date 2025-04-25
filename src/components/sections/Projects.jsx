import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Employee Management 📝",
                desc: "A responsive User Management web application built with React JS and Material UI. This CRUD-based app allows you to add, edit, view, and delete users with ease.",
                tech: ["React", "Material UI", "React Router DOM", "JSON", "Axios"],
                link: "https://github.com/abhinavtee/user-management-react"
              },
              {
                title: "Bank Management System 🏦",
                desc: "A Java-based Banking Management System. It offers features like user signup, login, cash withdrawal, fast cash etc. The system is designed to simulate basic banking operations.",
                tech: ["Java", "JDBC", "MySQL", "JFrame", "Hibernate"],
                link: "https://github.com/abhinavtee/BankManagementSystem"
              },
              {
                title: "Employee Time Tracker ⏱️",
                desc: "The Employee Time Tracker is a Spring MVC 5 application designed to provide information about check-in and check-out times. It facilitates the attendance and ensures accurate time tracking.",
                tech: ["Java", "Spring MVC", "Hibernate", "MySQL", "JFrame"],
                link: "https://github.com/abhinavtee/employee-timetracker"
              },
              {
                title: "Weather App 🌦️",
                desc: "A responsive and user-friendly weather application built with React JS and styled using Material UI (MUI). This app fetches real-time weather data from the OpenWeatherMap API based on city and country input.",
                tech: ["React", "Material UI", "OpenWeather API", "JSON", "Axios"],
                link: "https://github.com/abhinavtee/weather-app"
              },
            ].map((project, index) => (
              <div
                key={index}
                className="w-full p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors m-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project ➡️
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
