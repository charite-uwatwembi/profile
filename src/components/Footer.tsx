import { ArrowUp, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <h2 className="footer-name">CHARITE</h2>
        <p className="footer-description">
          I build web products and machine learning systems with curiosity and
          care. My work connects software engineering, data, and practical ideas
          that make a difference.
        </p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <nav className="footer-socials" aria-label="Social links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={23} />
          </a>
          <a
            href={profile.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <span className="medium-mark" aria-hidden="true">
              M
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={23} />
          </a>
        </nav>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Charite Uwatwembi</p>
          <a className="text-link" href="#home">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
          <span>
            All Rights Reserved <ArrowUpRight size={12} aria-hidden="true" />
          </span>
        </div>
      </div>
    </footer>
  );
}
