import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import React from 'react';

const ResearchPapers: React.FC = () => {
  const researchPapers = [
    {
      title: "Deep Learning Approaches for Natural Language Processing in Healthcare",
      authors: "Charite Uwatwembi, Dr. Sarah Johnson, Prof. Michael Chen",
      journal: "Journal of Medical AI",
      year: "2024",
      doi: "10.1000/182",
      abstract: "This paper presents novel deep learning architectures for processing medical text data, achieving 94% accuracy in clinical decision support systems.",
      tags: ["Deep Learning", "NLP", "Healthcare", "AI"],
      link: "#"
    },
    {
      title: "Optimizing Neural Network Architectures for Edge Computing",
      authors: "Charite Uwatwembi, Dr. Alex Rodriguez",
      journal: "IEEE Transactions on Neural Networks",
      year: "2023",
      doi: "10.1109/TNN.2023.1234567",
      abstract: "We propose a new framework for designing lightweight neural networks optimized for deployment on edge devices with limited computational resources.",
      tags: ["Neural Networks", "Edge Computing", "Optimization"],
      link: "#"
    },
    {
      title: "Machine Learning for Predictive Analytics in Financial Markets",
      authors: "Charite Uwatwembi, Dr. Emily Watson, Dr. James Liu",
      journal: "Computational Finance Quarterly",
      year: "2023",
      doi: "10.1016/j.cfq.2023.789",
      abstract: "This research explores the application of ensemble learning methods for predicting stock market trends with improved accuracy over traditional models.",
      tags: ["Machine Learning", "Finance", "Predictive Analytics"],
      link: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable AI Systems: Lessons from Production",
      excerpt: "Key insights from deploying machine learning models at scale, covering infrastructure, monitoring, and performance optimization strategies.",
      category: "AI/ML",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      link: "https://medium.com/@c.uwatwembi/building-scalable-ai-systems-lessons-from-production-c79755319314"
    },
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Exploring emerging technologies and frameworks that are shaping the future of web development, from AI integration to performance optimization.",
      category: "Web Development",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      link: "#"
    },
    {
      title: "Data Science Best Practices: From Research to Production",
      excerpt: "A comprehensive guide to transitioning data science projects from experimental notebooks to production-ready systems.",
      category: "Data Science",
      readTime: "12 min read",
      date: "Dec 5, 2024",
      link: "#"
    },
    {
      title: "Understanding Neural Network Interpretability",
      excerpt: "Deep dive into techniques for making neural networks more interpretable and explainable, with practical examples and code.",
      category: "AI/ML",
      readTime: "10 min read",
      date: "Nov 28, 2024",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className=" mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">Research & Insights</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800">
          Exploring the intersection of technology and innovation
          </h2>
          <p className="text-lg text-neutral-600 ">
            Through research papers and thought leadership
          </p>
        </div>

        {/* Research Papers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Research Publications</h3>
            <div className="w-20 h-0.5 bg-neutral-300"></div>
          </div>

          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                      {paper.title}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{paper.year}</span>
                      </div>
                      <span className="text-neutral-400">•</span>
                      <span className="font-medium">{paper.journal}</span>
                      <span className="text-neutral-400">•</span>
                      <span>DOI: {paper.doi}</span>
                    </div>

                    <p className="text-neutral-700 mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-200 text-neutral-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-neutral-600 italic">
                      Authors: {paper.authors}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <motion.a
                      href={paper.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">Read Paper</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Latest Blog Posts</h3>
            <div className="w-20 h-0.5 bg-neutral-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{post.date}</span>
                    <motion.a
                      href={post.link}
                      className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span>Read more</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-neutral-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Stay Updated with My Latest Work
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Follow my research journey and read insights on AI, machine learning, and software development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Publications</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Read Blog</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPapers;
