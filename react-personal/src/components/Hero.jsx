import { Link } from "react-router-dom";


export default function Hero() {
    return (
    <>
        <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white min-h-screen flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Immanuel.</h1>
            <p className="mt-4 bord er-spacing-1 text-lg sm:text-xl">I build cool projects and stuff.</p>
            <button className="mt-4 px-3 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-indigo-100" >
                <Link to="/projects">
                    View My Work
                </Link>
            </button>
            </div>
        </div>  
    </>    
    );
  }