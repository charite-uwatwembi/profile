import { useState } from "react";
import { ArrowUpRight, Calendar, Clock, ExternalLink } from "lucide-react";
import { articles, profile, publication } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const articleDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function ResearchPapers() {
  const [showAll, setShowAll] = useState(false);
  const visibleArticles = showAll ? articles : articles.slice(0, 4);
  return (
    <section id="writing" className="section writing-section">
      <div className="container">
        <SectionHeading label="Research & Insights">
          Exploring technology, one idea at a time
        </SectionHeading>
        <article
          id="research-publication"
          className="publication reveal"
          aria-labelledby="publication-title"
        >
          <div className="publication-copy">
            <h3 id="publication-title">{publication.title}</h3>
            <div className="publication-meta">
              <span>
                <Calendar size={16} aria-hidden="true" />
                {publication.year}
              </span>
              <i aria-hidden="true">•</i>
              <span>{publication.repository}</span>
            </div>
            <p className="publication-doi">
              DOI:{" "}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.doi}
              </a>
            </p>
            <p className="publication-description">{publication.description}</p>
            <ul className="publication-tags" aria-label="Research topics">
              {publication.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="publication-authors">
              Author: {publication.authors.join(", ")}
            </p>
          </div>
          <a
            className="button button-primary paper-button"
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
        <div className="blog-heading">
          <h3>From the blog</h3>
          <a
            className="text-link"
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            All writing on Medium <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div id="blog-articles" className="article-grid">
          {visibleArticles.map((article) => (
            <TiltCard className="article-card" key={article.url}>
              <div className="article-meta">
                <span className="article-category">{article.category}</span>
                <span className="article-reading-time">
                  <Clock size={16} aria-hidden="true" />
                  {article.readMinutes} min read
                </span>
              </div>
              <h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
              <p className="article-description">{article.description}</p>
              <div className="article-bottom">
                <time dateTime={article.dateTime}>
                  {articleDate.format(new Date(article.dateTime))}
                </time>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read more <ExternalLink size={17} aria-hidden="true" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
        <button
          type="button"
          className="show-articles"
          aria-expanded={showAll}
          aria-controls="blog-articles"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show fewer articles"
            : `Explore all ${articles.length} articles`}
          <span aria-hidden="true">{showAll ? "−" : "+"}</span>
        </button>
      </div>
    </section>
  );
}
