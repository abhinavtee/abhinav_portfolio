import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full sm:w-[600px]">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      {/* Reach Me Section */}
      <div className="text-center mt-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg max-w-4xl mx-auto px-4 sm:px-20 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
        <h3 className="text-2xl font-semibold text-white mb-6">How to Reach Me</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:abhi9651.at@outlook.com"
            className="text-white hover:text-blue-200 flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg font-medium">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhinavte"
            className="text-white hover:text-blue-200 flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-2xl" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/abhinavtee"
            className="text-white hover:text-blue-200 flex items-center space-x-3 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-2xl" />
            <span className="text-lg font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
