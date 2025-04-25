import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiSpringboot, SiPostman, SiMongodb, SiMysql } from 'react-icons/si';


export const About = () => {

    const frontendSkills = [
        { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
    ];

    const backendSkills = [
        { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-2xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
        { name: "REST APIs", icon: <FaNodeJs className="text-green-400 text-2xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400 text-2xl" /> },
    ];
    return (

        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">

                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 ">
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6  hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech.icon} {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6  hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech.icon} {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>

                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> 🎓 Education </h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>
                                    <strong> Bachelor of Science in Mathematics </strong> - Chhatrapati Shahu Ji Maharaj University, Kanpur (2018-2021)
                                </li>
                                <li>
                                    Relevant Coursework: Web Development, Java full-stack course...
                                </li>
                            </ul>
                        </div>

                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4'> 💼 Work Experience </h3>
                            <div className='space-y-4 text-gray-300'>
                                <div>
                                    <h4 className='font-extrabold'>Trainee at Cetpa Infotech (2023-2024)</h4>
                                    <p>Trained in full stack web development at CETPA with skills in HTML, CSS, React JS, MySQL, and backend technologies like Java, Spring Boot, and Hibernate through guided training sessions.</p>
                                </div>

                                <div>
                                    <h4 className='font-extrabold'> Technical Recruiter at Vbeyond Corporation (2022-2023)</h4>
                                    <p>Worked as a Technical Recruiter, managing end-to-end IT hiring for UK/Europe clients—sourcing, screening, and coordinating interviews across various tech roles and domains.</p>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
                </RevealOnScroll>
        </section>
    
    );
};