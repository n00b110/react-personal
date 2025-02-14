import webScreenshot from "../assets/web-screenshot.png"
import { Link } from "react-router-dom";


const Projects = () => {
    return (
    <div class="bg-gradient-to-l from-cyan-700 to-slate-500 py-16 h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-800 text-center">Projects</h2>
            <p class="text-white text-center mt-2">Here are some of the projects I’ve worked on recently.</p>

            <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2">
                <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 pt-1 pb-1">Finance Web App</h3>
                <img src={webScreenshot} alt="" className="rounded"/>
                <p class="mt-2 text-gray-800">
                    Built using Python and Bootstrap.
                </p>
                <div class="mt-4 flex space-x-4">
                    <Link to="https://n00b110.pythonanywhere.com/" class="text-indigo-500 hover:underline">Live Demo</Link>
                    <Link to="https://github.com/n00b110/bank-project" class="text-indigo-500 hover:underline">GitHub</Link>
                </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Finance Web App</h3>
                <p class="mt-2 text-gray-800">
                    Built using Python and Bootstrap.
                </p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-indigo-500 hover:underline">Live Demo</a>
                    <a href="#" class="text-indigo-500 hover:underline">GitHub</a>
                </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">Finance Web App</h3>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Default</span>
                <p class="mt-2 text-gray-800">
                    Built using Python and Bootstrap.
                </p>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-indigo-500 hover:underline">Live Demo</a>
                    <a href="#" class="text-indigo-500 hover:underline">GitHub</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    );
}

export default Projects;