// const About = () => {

//     return (

//         <div className="text-4xl bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen flex items-center justify-center">
//             <h1 className="text-4xl animate-bounce">Coming Soon</h1>
//         </div>
//     )
// }

const About = () => {

    return (
        <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen px-8">
            <div className="profile-card flex flex-col justify-center items-center text-center ">
                <h1 className="text-4xl font-bold">About</h1>
                <p>Grad @ University of Missouri-Kansas City |<br/> Looking for SWE or DevOps Role | 
                AI Enthusiast |<br/>| Interested in scalable systems and their solutions</p>
            </div>
            <div className="tech-stack">
                <h2 className="text-2xl">Tech Stack</h2>
                <div className="flex flex-row items-center">
                <img className="w-12 h-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  />
                    <p className="mt-1">Python</p>
                </div>
            </div>
        </div>
    )
}


export default About;


