import { Link } from "react-router-dom";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "success", "error", or ""

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    // For now, we'll just simulate a successful subscription
    setStatus("success");
    setEmail("");
    // Reset status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-6">
          Subscribe to my newsletter for the latest articles, tech insights, and
          updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 max-w-md px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-white/50 text-white placeholder-white/70"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-cyan-700 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-300 animate-fade-in">
            Thanks for subscribing! 🎉
          </p>
        )}

        <p className="mt-4 text-sm text-white/70">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white min-h-screen">
      <Link
        to="/"
        className="text-2xl absolute rotate-180 rounded-full p-8 top-0 left-0 animate-pulse hover:scale-110 transition-transform"
      >
        →
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Blog</h1>

        {/* Coming Soon Message */}
        <div className="text-center">
          <h2 className="text-4xl animate-bounce mb-8">Coming Soon</h2>
          <p className="text-xl mb-8">
            I'm working on some exciting content. Stay tuned!
          </p>
        </div>

        {/* Newsletter Component */}
        <Newsletter />
      </div>
    </div>
  );
};

export default Blog;
