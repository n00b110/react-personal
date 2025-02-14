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
      <div className="profile-card flex flex-col justify-center items-center text-center pt-10">
        <h1 className="text-4xl font-bold">About</h1>
        <p>
          Grad @ University of Missouri-Kansas City |<br /> Looking for SWE or
          DevOps Role | AI Enthusiast |<br />| Interested in scalable systems
          and their solutions
        </p>
      </div>
      <div className="tech-stack">
        <h2 className="text-2xl text-center"></h2>
        <div className="flex mx-auto">
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img
              className="w-20 h-20 px-5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
            <p className="mt-1">Python</p>
          </div>
          <div className="flex items-center flex-col rounded-lg shadow-lg p-5">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt="" className="w-20 h-20 px-5" />
            <p className="mt-1">Ruby</p>
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
            />
            <p className="mt-1">Blender</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
