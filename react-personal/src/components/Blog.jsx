import { Link } from "react-router-dom";
import { useState } from "react";
import BlogCard from "./BlogCard";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Load all posts and tags
  const allPosts = getAllPosts();
  const allTags = ["All", ...getAllTags()];

  // Filter posts based on search and tag selection
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

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

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-white/50 text-white placeholder-white/70"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedTag === tag
                      ? "bg-cyan-500 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/70">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-white/70">
              Try adjusting your search terms or tag filter.
            </p>
          </div>
        )}

        {/* Newsletter Component */}
        <Newsletter />
      </div>
    </div>
  );
};

export default Blog;
