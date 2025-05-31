import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Form from "./components/Form";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Form />} />
      </Routes>
      <Analytics />
    </>
  );
}
