import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Menu, X, Code, User, Phone, Briefcase, ExternalLink } from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "DocSpot – Doctor Management System",
      description:
        "Built a MERN-based doctor management system with role-based access control to securely manage and access records efficiently.",
      tech: ["MERN Stack", "RBAC", "MongoDB"],
      github: "https://github.com/SURYA5733/DocSpot",
      live: "https://doc-spot-frontend-one.vercel.app",
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Tamil Text to Speech (Deep Learning)",
      description:
        "Built a Tamil Text-to-Speech system using CNN + RNN to generate realistic voice output for accessibility and education tools.",
      tech: ["Python", "Deep Learning", "CNN", "RNN"],
      github: "https://github.com/SURYA5733/Tamil-Text-to-Speech",
      live: "#",
      image: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
      title: "Crop Yield Prediction System",
      description:
        "Developed a machine learning system in Python to analyze climate data and predict crop yields for smarter agriculture.",
      tech: ["Python", "Machine Learning", "Pandas", "Matplotlib"],
      github: "https://github.com/SURYA5733/crop-yield-prediction",
      live: "#",
      image: "bg-gradient-to-br from-green-400 to-blue-500",
    },
    {
      title: "Gas & Smoke Detector (IoT)",
      description:
        "IoT-based system to monitor gas/smoke levels in real-time, providing alerts for safety in homes and industries.",
      tech: ["IoT", "Sensors", "Embedded Systems", "NodeMCU"],
      github: "https://github.com/SURYA5733/gas-and-smoke-detector-with-LPG-gas-level-monitoring-system",
      live: "#",
      image: "bg-gradient-to-br from-blue-400 to-cyan-400",
    },
    {
      title: "Stock Management System (PHP)",
      description:
        "Web application for managing stock levels with authentication, reducing stockouts by 20% during testing.",
      tech: ["PHP", "MySQL"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      title: "Sudoku Web Application",
      description:
        "Built a responsive Sudoku web app with real-time validation, hints, and undo/redo functionality.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "#",
      live: "#",
      image: "bg-gradient-to-br from-pink-300 to-purple-400",
    },

  ];

  // const skills = [
  //   { name: "HTML", level: 80 },
  //   { name: "CSS", level: 80 },
  //   { name: "JavaScript", level: 80 },
  //   { name: "React.js", level: 80 },
  //   { name: "Java", level: 70 },
  //   { name: "Python", level: 70 },
  //   { name: "MySQL", level: 70 },
  //   { name: "MongoDB", level: 70 },
  // ];

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    backend: ["Node.js", "Express.js", "Java"],
    database: ["MySQL", "MongoDB"],
    others: ["Python", "Git", "VS Code"],
  };

  const certificates = [
    {
      title: "The Joy Of Computing Using Python",
      issuer: "Nptel",
      file: "/certificates/The Joy Of Computing Using Python.pdf",
      thumbnail: "/certificates/The Joy Of Computing Using Python.jpg",
    },
    {
      title: "Cyber Defence Engineering Using Python",
      issuer: "Cybervidyapeeth Foundation",
      file: "/certificates/FINAL CERT PYTHON_Part521.pdf",
      thumbnail: "/certificates/FINAL CERT PYTHON_Part521.jpg",
    },
    {
      title: "MERN 2025 Edition - MongoDB, Express, React and NodeJS",
      issuer: "Udemy",
      file: "/certificates/mernstack.pdf",
      thumbnail: "/certificates/mernstack.jpg",
    },
  ];

  const experiences = [
    {
      role: "Artificial Intelligence Intern",
      company: "Skill Vertex",
      duration: "2023",
      description: [
        "Completed a comprehensive AI course covering Machine Learning, NLP, Computer Vision, and Robotics.",
        "Applied AI concepts through real-world projects and assignments.",
        "Actively engaged in lectures, discussions, and collaborative activities.",
      ],
    },
    {
      role: "Web Application Intern",
      company: "Awerum",
      duration: "2023",
      description: [
        "Completed a two-week internship focused on web application development.",
        "Performed tasks related to frontend and backend development effectively.",
        "Showed dedication and capability in completing assigned tasks.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "projects", "internship", "certificates", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${activeSection === item
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${isVisible.home ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SURYA S K
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              B.E. Computer Science & Engineering | 2025 Graduate Fresher
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Recent Computer Science graduate with strong skills in web
              development, eager to apply knowledge and contribute to real-world
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${isVisible.about ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User size={120} className="text-white" />
                </div>
              </div>

              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I am a 2025 graduate in Computer Science and Engineering with
                  hands-on experience in academic projects involving Deep
                  Learning, IoT, Web Development, and Databases.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  I am looking for entry-level opportunities to apply my skills,
                  gain industry exposure, and contribute to building impactful
                  software solutions.
                </p>

                <div className="space-y-4">
                  {/* {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{
                            width: isVisible.about ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))} */}

                  <h3 className="text-2xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technical Skills</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
                    <li><b className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Frontend :</b> {skills.frontend.join(", ")}</li>
                    <li><b className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Backend :</b> {skills.backend.join(", ")}</li>
                    <li><b className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Database :</b> {skills.database.join(", ")}</li>
                    <li><b className="text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Others :</b> {skills.others.join(", ")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${isVisible.projects ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div
                    className={`h-48 ${project.image} flex items-center justify-center`}
                  >
                    <Code size={48} className="text-white opacity-80" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                          Code
                        </a>
                      )}


                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink size={18} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="py-20 px-4 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <Briefcase className="inline-block w-8 h-8 mr-2 text-purple-400" />
          Internship Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 px-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-2xl p-6 border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Issued by {cert.issuer}
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 transform ${isVisible.contact ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="text-center mb-12">
              <p className="text-lg text-gray-300 mb-8">
                I am actively seeking entry-level opportunities in web
                development, front-end development and software engineering.
                Feel free to reach out!
              </p>

              <div className="flex justify-center gap-8 mb-12 flex-wrap">
                <a
                  href="mailto:suryasenthilkumar638@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Mail size={24} />
                  <span>suryasenthilkumar638@gmail.com</span>
                </a>
                <a
                  href="tel:+916380866385"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Phone size={24} />
                  <span>+91 6380866385</span>
                </a>
                <a
                  href="https://github.com/SURYA5733"
                  className="flex items
-center gap-3 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/surya-s-k-26872a270"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 SURYA S K | Recent Graduate Portfolio | Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
