import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../pages/layout";
import { Card, CardBody } from "@heroui/react";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  React.useEffect(() => {
    // Add copy buttons to code blocks
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
      
      codeBlocks.forEach((block) => {
        // Skip if button already exists
        if (block.querySelector('.code-copy-button')) return;
        
        const button = document.createElement('button');
        button.className = 'code-copy-button';
        button.setAttribute('title', 'Copy code');
        button.innerHTML = `
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        `;
        
        button.addEventListener('click', async () => {
          const code = block.querySelector('code');
          const text = code.textContent || code.innerText;
          
          try {
            await navigator.clipboard.writeText(text);
            button.innerHTML = `
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            `;
            button.classList.add('copied');
            button.setAttribute('title', 'Copied!');
            
            setTimeout(() => {
              button.innerHTML = `
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              `;
              button.classList.remove('copied');
              button.setAttribute('title', 'Copy code');
            }, 2000);
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        });
        
        block.appendChild(button);
      });
    };

    // Add buttons after content is rendered
    const timer = setTimeout(addCopyButtons, 100);
    
    return () => clearTimeout(timer);
  }, [post.html]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to blog link */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <time className="font-mono text-sm">
              {post.frontmatter.date}
            </time>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span className="font-mono text-sm">
              {post.timeToRead} min read
            </span>
          </div>
          
          {post.frontmatter.tags && (
            <div className="flex flex-wrap gap-2">
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
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-8"></div>
        </header>

        {/* Article Content */}
        <Card className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <CardBody className="p-8 md:p-12">
            <article
              className="prose prose-lg prose-invert max-w-none
                         prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                         prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:border-b prose-h1:border-gray-700 prose-h1:pb-4
                         prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-blue-300
                         prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-blue-400
                         prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                         prose-strong:text-white prose-strong:font-semibold
                         prose-em:text-blue-200
                         prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-800/50 prose-blockquote:p-4 prose-blockquote:rounded-r prose-blockquote:text-gray-300 prose-blockquote:not-italic
                         prose-a:text-blue-400 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:underline prose-a:transition-colors
                         prose-ul:text-gray-300 prose-ol:text-gray-300 prose-ul:space-y-2 prose-ol:space-y-2
                         prose-li:text-gray-300 prose-li:marker:text-blue-400
                         prose-table:text-gray-300 prose-thead:border-gray-600 prose-th:text-white prose-th:font-semibold prose-th:bg-slate-800
                         prose-td:border-gray-700 prose-tr:border-gray-700
                         prose-hr:border-gray-600 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </CardBody>
        </Card>

        {/* Footer */}
        <footer className="mt-16 mb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
          <div className="text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title} - Anish's Portfolio</title>;
