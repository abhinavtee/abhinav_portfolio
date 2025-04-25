import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return (

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Employee Management 📝</h3>
                            <p className="text-gray-400 mb-4">A responsive User Management web application built with React JS and Material UI. This CRUD-based app allows you to add, edit, view, and delete users with ease.</p>

                            <div>
                                {["React", "Material UI", "React Router DOM", "JSON", "Axios"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/abhinavtee/user-management-react" className="text-blue-400 hover:text-blue-300 transition-colors m-4">View Project ➡️ </a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Bank Management System 🏦</h3>
                            <p className="text-gray-400 mb-4">A Java-based Banking Management System. It offers features like user signup, login, cash withdrawal, fast cash etc. The system is designed to simulate basic banking operations.</p>

                            <div>
                                {["Java", "JDBC", "MySQL", "JFrame", "Hibernate"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/abhinavtee/BankManagementSystem" className="text-blue-400 hover:text-blue-300 transition-colors m-4">View Project ➡️ </a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Employee Time Tracker ⏱️</h3>
                            <p className="text-gray-400 mb-4">The Employee Time Tracker is a Spring MVC 5 application designed to provide information about check-in and check-out times. It facilitates the attendance and ensures accurate time tracking.</p>

                            <div>
                                {["Java", "Spring MVC", "Hibernate", "MySQL", "JFrame"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/abhinavtee/employee-timetracker" className="text-blue-400 hover:text-blue-300 transition-colors m-4">View Project ➡️ </a>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Weather App 🌦️</h3>
                            <p className="text-gray-400 mb-4">A responsive and user-friendly weather application built with React JS and styled using Material UI (MUI). This app fetches real-time weather data from the OpenWeatherMap API based on city and country input.</p>

                            <div>
                                {["React", "Material UI", "OpenWeather API", "JSON", "Axios"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/abhinavtee/weather-app" className="text-blue-400 hover:text-blue-300 transition-colors m-4">View Project ➡️ </a>
                            </div>

                        </div>

                    </div>



                </div>
            </RevealOnScroll>
        </section>
    )

}