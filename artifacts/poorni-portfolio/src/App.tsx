import { type FormEvent, useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sun,
  X,
} from 'lucide-react';

type SkillGroup = {
  title: string;
  items: string[];
};

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Java', 'Python', 'JWT'],
  },
  {
    title: 'Database',
    items: ['MongoDB Atlas', 'Mongoose', 'PostgreSQL', 'SQL Workbench'],
  },
  {
    title: 'How I work',
    items: ['Teamwork', 'Communication', 'Problem-Solving', 'Active Listening'],
  },
];

const projects = [
  {
    number: '01',
    title: 'RemitPulse',
    description:
      'A full-stack financial and remittance app built for clear, useful decisions. The React, Vite and Tailwind interface meets a Node and Express backend, with MongoDB Atlas and Mongoose powering document management and querying through Atlas Vector Search.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'NVIDIA API'],
  },
  {
    number: '02',
    title: 'Efficient Empty Returns',
    description:
      'An on-demand booking system for underutilized empty-return vehicles. It connects logistics needs with available capacity to reduce waste, lower operational costs and support a more sustainable way to move goods.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

const experiences = [
  {
    date: 'JAN 2026 — MAR 2026',
    role: 'Software Testing Intern',
    company: 'Aatral Technologies India Pvt Ltd · Bangalore',
    description:
      'Performed manual functional testing on an enterprise procurement platform, documented test cases, tracked bugs and reported issues clearly to the development team. Researched AI features across modules to understand product behavior and quality risks.',
  },
  {
    date: 'JUN 2025 — JUL 2025',
    role: 'Backend Developer Intern',
    company: 'Sisesoft IT Solutions · Hosur',
    description:
      'Designed and implemented secure server-side logic and database operations. Built and integrated REST APIs that enabled reliable data exchange across web applications.',
  },
];

const certifications = [
  { title: 'Complete Java Programming Bootcamp', provider: 'Udemy' },
  { title: 'Design for Delight: Mastering Figma & Adobe XD', provider: 'Make Labs' },
  { title: 'Dynamic Web Design, Development & Hosting', provider: 'Infochord Technology Pvt. Ltd.' },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem('poorni-theme');
      setIsDark(savedTheme === 'dark');
    } catch {
      // React state remains the source of truth when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      window.localStorage.setItem('poorni-theme', isDark ? 'dark' : 'light');
    } catch {
      // Theme switching still works when storage is blocked or unavailable.
    }
  }, [isDark]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="portfolio-shell min-h-[100dvh]">
      <div className="ambient-grid" aria-hidden="true" />

      <header className="topbar">
        <div className="section-wrap nav-inner">
          <a className="brand-mark" href="#top" data-testid="link-brand">
            <span className="brand-symbol" aria-hidden="true">P</span>
            <span className="mono text-[0.7rem] font-medium tracking-[0.12em]">POORNI T C</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </a>
            ))}
            <button
              className="theme-toggle"
              type="button"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={() => setIsDark((dark) => !dark)}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div className="reveal">
              <div className="eyebrow hero-kicker">Available for thoughtful opportunities</div>
              <h1 className="display-title hero-title" id="hero-title">
                Hello, I&apos;m <em>Poorni.</em>
              </h1>
              <p className="hero-copy">
                Software developer with hands-on internship experience in full-stack development and QA,
                strong CS foundation, and a track record of building responsive web apps.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects" data-testid="link-hero-projects">
                  Explore my work <ArrowUpRight size={16} />
                </a>
                <a className="button button-quiet" href="#contact" data-testid="link-hero-contact">
                  Let&apos;s connect
                </a>
              </div>
            </div>

            <aside className="hero-aside reveal reveal-delay-2" aria-label="Introduction note">
              <p className="hero-aside-label">A developer&apos;s note / 001</p>
              <p>
                I like understanding how things work — then making sure they work well.
              </p>
              <div className="hero-location">
                <MapPin size={15} aria-hidden="true" /> Hosur, India
              </div>
            </aside>
          </div>
          <a className="scroll-cue" href="#about" data-testid="link-scroll-about">
            <span aria-hidden="true" /> Scroll to explore <ArrowDown size={13} />
          </a>
        </section>

        <section className="section section-tint" id="about" aria-labelledby="about-title">
          <div className="section-wrap">
            <div className="section-intro">
              <span className="eyebrow">01 / The foundation</span>
              <div>
                <h2 className="display-title section-heading" id="about-title">Curious by default.</h2>
                <p className="lead">
                  I&apos;m building my career at the intersection of making and checking: writing useful software,
                  asking better questions, and noticing the details that make a product feel trustworthy.
                </p>
              </div>
            </div>

            <div className="about-grid">
              <article className="card about-story reveal">
                <p>
                  My hands-on work spans full-stack development and software testing. That range helps me move
                  comfortably from a database schema or REST API to the interface a person actually uses.
                </p>
                <p>
                  I bring a strong Computer Science foundation, a practical learning mindset, and an instinct to
                  make complex things clearer for the next person on the team.
                </p>
                <div className="about-quote">“Build with intent. Test with empathy.”</div>
                <div className="language-row" aria-label="Languages">
                  <span className="language-chip">English <small>Professional</small></span>
                  <span className="language-chip">Tamil <small>Bilingual</small></span>
                  <span className="language-chip">Sourashtra <small>Native</small></span>
                </div>
              </article>

              <article className="card education-card reveal reveal-delay-1" data-testid="card-education">
                <div>
                  <div className="card-topline">
                    <span>Education</span>
                    <span>2022 — 2026</span>
                  </div>
                  <h3>Computer Science &amp; Engineering</h3>
                  <p>Adhiyamaan College of Engineering<br />Hosur, Tamil Nadu</p>
                </div>
                <div className="cgpa">
                  <strong>8.11</strong>
                  <span>/ 10 CGPA</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap">
            <div className="section-intro">
              <span className="eyebrow">02 / The toolkit</span>
              <div>
                <h2 className="display-title section-heading" id="skills-title">Many layers,<br /><em>one mindset.</em></h2>
                <p className="lead">
                  Tools change. The fundamentals stay: understand the problem, keep the system legible, and leave
                  it better than you found it.
                </p>
              </div>
            </div>
            <div className="skills-layout">
              <div>
                <Code2 size={34} strokeWidth={1.3} color="hsl(var(--primary))" aria-hidden="true" />
                <p className="skills-note">
                  From component composition to secure server-side logic, I enjoy the handoff between layers.
                </p>
              </div>
              <div className="skills-list">
                {skillGroups.map((group, index) => (
                  <article className="skill-group" key={group.title} data-testid={`group-skills-${index}`}>
                    <h3>{group.title}</h3>
                    <div className="skill-chips">
                      {group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="projects" aria-labelledby="projects-title">
          <div className="section-wrap">
            <div className="section-intro">
              <span className="eyebrow">03 / Selected work</span>
              <div>
                <h2 className="display-title section-heading" id="projects-title">Problems worth<br /><em>solving.</em></h2>
                <p className="lead">A small selection of projects where product thinking meets practical engineering.</p>
              </div>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="card project-card" key={project.number} data-testid={`card-project-${project.number}`}>
                  <span className="project-number">{project.number}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack" aria-label={`${project.title} technology stack`}>
                      {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                  </div>
                  <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap">
            <div className="section-intro">
              <span className="eyebrow">04 / In practice</span>
              <div>
                <h2 className="display-title section-heading" id="experience-title">Learning by<br /><em>doing.</em></h2>
                <p className="lead">Every role has added a different lens: how to build, how to verify, and how to collaborate.</p>
              </div>
            </div>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.role} data-testid={`experience-${index}`}>
                  <div className="timeline-date">{experience.date}</div>
                  <div className="timeline-content">
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="certifications" aria-labelledby="certifications-title">
          <div className="section-wrap">
            <div className="section-intro">
              <span className="eyebrow">05 / Still learning</span>
              <div>
                <h2 className="display-title section-heading" id="certifications-title">Proof of<br /><em>practice.</em></h2>
                <p className="lead">Curiosity has a calendar. These are a few of the places I&apos;ve put in the work.</p>
              </div>
            </div>
            <div className="cert-grid">
              {certifications.map((certification, index) => (
                <article className="card cert-card" key={certification.title} data-testid={`card-certification-${index}`}>
                  <span className="cert-index">CERT / 0{index + 1}</span>
                  <h3>{certification.title}</h3>
                  <span className="cert-provider">{certification.provider}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-grid">
            <div>
              <span className="eyebrow">06 / Start a conversation</span>
              <h2 className="display-title contact-title" id="contact-title">
                Let&apos;s make<br /><em>something useful.</em>
              </h2>
              <div className="contact-details">
                <a className="contact-detail" href="mailto:poornitc2003@gmail.com" data-testid="link-email">
                  <Mail size={16} aria-hidden="true" /> poornitc2003@gmail.com
                </a>
                <a className="contact-detail" href="tel:+919626297180" data-testid="link-phone">
                  <Phone size={16} aria-hidden="true" /> +91 9626297180
                </a>
                <a className="contact-detail" href="https://www.linkedin.com/in/poornitc" target="_blank" rel="noreferrer" data-testid="link-linkedin">
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn
                </a>
                <a className="contact-detail" href="https://github.com/poornitc" target="_blank" rel="noreferrer" data-testid="link-github">
                  <Github size={16} aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>

            <form className="card contact-form" onSubmit={handleSubmit} data-testid="form-contact">
              {submitted ? (
                <div className="form-success" role="status" data-testid="status-form-success">
                  <strong><Check size={16} aria-hidden="true" /> Message noted.</strong>
                  Thanks for reaching out — this static form is ready to connect with a real inbox when needed.
                </div>
              ) : (
                <>
                  <div className="form-field">
                    <label htmlFor="contact-name">Your name</label>
                    <input id="contact-name" name="name" type="text" required placeholder="How should I call you?" data-testid="input-contact-name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email address</label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@company.com" data-testid="input-contact-email" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" required placeholder="Tell me a little about what you're building." data-testid="input-contact-message" />
                  </div>
                  <button className="button button-primary" type="submit" data-testid="button-submit-contact">
                    Send a note <Send size={15} />
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <p>© 2026 Poorni T C · Built with curiosity in Hosur.</p>
          <a href="#top" data-testid="link-back-to-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;