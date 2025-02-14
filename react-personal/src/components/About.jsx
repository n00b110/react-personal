// const About = () => {

//     return (

//         <div className="text-4xl bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen flex items-center justify-center">
//             <h1 className="text-4xl animate-bounce">Coming Soon</h1>
//         </div>
//     )
// }

const About = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen">
      <div className="profile-card flex flex-col justify-center items-center text-center py-10">
        <h1 className="text-4xl font-bold ">About</h1>
        <hr />
        <div className="image-holder rounded-full">
          <img
            src="https://placehold.co/96"
            alt=""
            className="w-24 h-24 p-3 m-5 animate-spin rounded-full bg-white"
          />
        </div>
        <p>
          Grad @ University of Missouri-Kansas City |<br /> Looking for SWE or
          DevOps Role | AI Enthusiast |<br />| Interested in scalable systems
          and their solutions
        </p>
      </div>
      <div className="tech-stack m-auto">
        <h2 className="text-2xl text-center">Tech Stack</h2>
        <div className="flex px-20">
          <div className="flex items-center flex-col rounded-lg shadow p-5 justify-center">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
            <p className="mt-1">Python</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg"
              alt=""
              className="w-20 h-20 px-5"
            />
            <p className="mt-1">Ruby on Rails</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5 ">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <p className="mt-1">React</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <p className="mt-1">Tailwind</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
            />
            <p className="mt-1">Blender</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            />
            <p className="mt-1">Django</p>
          </div>
        </div>
      </div>
      <div className="experience-section">
        <h2 className="text-2xl text-center mt-10">Experience</h2>
        <div className="flex card-content shadow-md px-6">
          <div className="flex experience-card items-center gap-4">
            <img src="https://www.cboe.com/favicon.ico" alt="" />
            <div className="flex flex-col text-elements ">
              <h3 className="text-2xl font-medium">Cboe Global Markets</h3>
              <h4 className="subtitle text-xl text-center font-light">
                Site Reliability Engineer Intern - June 2023 - August 2023
                <ul className="job-description"></ul>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
