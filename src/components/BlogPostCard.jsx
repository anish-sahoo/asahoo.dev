import React from "react";
import { Link } from "gatsby";
import { Card, CardBody } from "@heroui/react";

const BlogPostCard = ({ post, index }) => {
  return (
    <Card className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <CardBody className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-blue-400 font-mono text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <time className="text-gray-400 text-sm font-mono">
                {post.frontmatter.date}
              </time>
            </div>

            <Link to={`/blog/${post.frontmatter.slug}`} className="group">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {post.frontmatter.title}
              </h2>
            </Link>

            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              {post.excerpt}
            </p>

            {post.frontmatter.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <Link
              to={`/blog/${post.frontmatter.slug}`}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm"
            >
              Read more
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogPostCard;
