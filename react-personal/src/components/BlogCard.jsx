import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
      {/* Tags and Date */}
      <div className="flex items-center gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-cyan-500/30 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
        <span className="text-white/60 text-sm">{post.formattedDate}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">{post.title}</h3>

      {/* Excerpt */}
      <p className="text-white/80 mb-4 line-clamp-3">{post.excerpt}</p>

      {/* Author and Read More */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-sm font-bold">
            {post.author.charAt(0)}
          </div>
          <span className="text-sm text-white/70">{post.author}</span>
          <span className="text-sm text-white/50">• {post.readTime}</span>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
