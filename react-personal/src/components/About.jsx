import { Link } from "react-router-dom";

// const About = () => {

//     return (

//         <div className="text-4xl bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen flex items-center justify-center">
//             <h1 className="text-4xl animate-bounce">Coming Soon</h1>
//         </div>
//     )
// }

const About = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white min-h-screen">
      <Link
        to="/"
        className="text-2xl absolute rotate-180 rounded-full p-8 top-0 left-0 animate-pulse hover:scale-110 transition-transform"
      >
        →
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="profile-card flex flex-col justify-center items-center text-center py-10 space-y-6">
          <h1 className="text-5xl font-bold animate-fade-in">About Me</h1>
          <div className="image-holder rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/400"
              alt="Profile"
              className="w-48 h-48 object-cover"
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed">
              Grad @ University of Missouri-Kansas City | Looking for SWE or
              DevOps Role | AI Enthusiast | Interested in scalable systems and
              their solutions
            </p>
          </div>
        </div>

        <div className="tech-stack mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
              },
              {
                name: "Ruby on Rails",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
              },
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
              },
              {
                name: "Tailwind",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
              },
              {
                name: "Blender",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg",
              },
              {
                name: "Django",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center flex-col rounded-lg shadow-lg p-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                />
                <p className="mt-2 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <img
                  src="https://www.cboe.com/favicon.ico"
                  alt="Cboe"
                  className="w-12 h-12 rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">
                    Cboe Global Markets
                  </h3>
                  <h4 className="text-xl font-light mb-4">
                    Site Reliability Engineer Intern - June 2023 - August 2023
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Monitored and troubleshooted U.S. production and
                        certification environments for technical issues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Analyzed and optimized performance of the financial
                        exchanges
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Won a presentation competition among all 64 interns
                        related to improving the associate experience
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/n00b110"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://linkedin.com/in/immanuelolaoye"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
