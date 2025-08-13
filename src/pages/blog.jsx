import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "./layout";
import { Card, CardBody, CardHeader } from "@heroui/react";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Dev Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughts on software engineering, web development, and technology
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card 
              key={post.id} 
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CardBody className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-blue-400 font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <time className="text-gray-400 text-sm font-mono">
                        {post.frontmatter.date}
                      </time>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.frontmatter.slug}`}
                      className="group"
                    >
                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                        {post.frontmatter.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
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
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-white mb-2">No posts yet</h2>
            <p className="text-gray-400">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          tags
        }
      }
    }
  }
`;

export const Head = () => <title>Blog - Anish's Portfolio</title>;
