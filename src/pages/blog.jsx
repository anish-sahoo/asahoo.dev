import * as React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import PageHero from "../components/PageHero";
import BlogPostCard from "../components/BlogPostCard";
import EmptyState from "../components/EmptyState";
import AnimatedGradientBackground from "../components/AnimatedGradientBackground";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <AnimatedGradientBackground />
      <div className="max-w-5xl mx-auto px-1 relative z-10">
        <PageHero subtitle="Thoughts on software engineering, web development, and technology" />

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {posts.length === 0 && (
          <EmptyState
            icon="📝"
            title="No posts yet"
            subtitle="Check back soon for new content!"
          />
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
