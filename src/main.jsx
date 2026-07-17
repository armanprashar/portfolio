import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Server,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'Banking Management System',
    type: 'Desktop banking app',
    tools: ['Java', 'Java Swing', 'MySQL', 'JDBC', 'OOP'],
    metric: '90% fewer invalid transaction errors',
    repo: 'https://github.com/armanprashar/Banking-management-system',
    summary:
      'A role-aware banking desktop application for account creation, transfers, balance checks, and transaction history across 10+ core workflows.',
    accent: 'mint',
  },
  {
    title: 'City Bus Tracking System',
    type: 'Responsive frontend',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility'],
    metric: '40% fewer clicks to find route data',
    repo: 'https://github.com/armanprashar/CityBus-Live',
    summary:
      'A mobile-responsive transit interface for browsing routes, schedules, stops, and route search across 15+ city bus routes.',
    accent: 'amber',
  },
  {
    title: 'Java OOP Mini Projects',
    type: 'Internship builds',
    tools: ['Java', 'Collections', 'Exception Handling', 'OOP'],
    metric: '4-week CodSoft milestone delivery',
    repo: 'https://github.com/armanprashar',
    summary:
      'A focused set of console and OOP-based Java exercises built during virtual training, strengthening inheritance and collections fundamentals.',
    accent: 'blue',
  },
  {
    title: 'SQL Practice Lab',
    type: 'Database fundamentals',
    tools: ['SQL', 'MySQL', 'Query Design', 'DBMS'],
    metric: 'Oracle SQL certified foundation',
    repo: 'https://github.com/armanprashar',
    summary:
      'Database coursework and SQL practice covering relational modeling, CRUD operations, and query optimization fundamentals.',
    accent: 'rose',
  },
];

const skills = [
  'Java',
  'OOP',
  'JDBC',
  'MySQL',
  'SQL',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Java Swing',
  'Git',
  'GitHub',
  'REST APIs',
  'AWS Basics',
  'DBMS',
  'Responsive UI',
];

const timeline = [
  {
    period: '2022 - 2026',
    title: 'B.Tech, Computer Science & Engineering',
    detail: 'Galgotias University, Greater Noida - CGPA 7.35',
  },
  {
    period: 'Apr 2026 - May 2026',
    title: 'Java Programming Virtual Internship',
    detail: 'CodSoft - Java console and OOP mini-projects with milestone delivery.',
  },
  {
    period: 'Jul 2024 - Sep 2024',
    title: 'Cloud Internship',
    detail: 'AWS Academy / EduSkills - core AWS services, deployment models, and cloud fundamentals.',
  },
  {
    period: '2023 - 2024',
    title: 'Oracle Academy Certifications',
    detail: 'Java Fundamentals and Database Programming with SQL.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const navItems = ['Projects', 'Case Study', 'About', 'Contact'];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Arman Prashar home">
          <span>AP</span>
          Arman Prashar
        </a>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <button className="icon-button menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <Sparkles size={16} />
              Computer Science Portfolio
            </p>
            <h1>Java-focused CS engineer building reliable apps with clean interfaces and database-backed logic.</h1>
            <p className="hero-subtitle">
              Final-year B.Tech CSE student in Greater Noida, India (IST), focused on backend development, Java, MySQL,
              JDBC, and responsive web experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Contact Me <Mail size={18} />
              </a>
              <a className="button ghost" href="/resume.pdf" download>
                Resume <Download size={18} />
              </a>
            </div>
          </div>

          <aside className="profile-panel reveal" aria-label="Profile snapshot">
            <div className="headshot-placeholder">
              <img src="/arman-headshot.jpeg" alt="Arman Prashar professional headshot" />
            </div>
            <div>
              <h2>Available for entry-level software roles</h2>
              <p>
                Hands-on with Java desktop apps, CRUD workflows, SQL-backed systems, and frontend interfaces designed
                for quick task completion.
              </p>
            </div>
            <div className="quick-stats">
              <div>
                <strong>10+</strong>
                <span>Banking workflows</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Bus routes modeled</span>
              </div>
              <div>
                <strong>7.35</strong>
                <span>CSE CGPA</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section logo-strip" aria-label="Core positioning">
          <span>Backend-ready</span>
          <span>Database-minded</span>
          <span>Responsive UI</span>
          <span>Cloud foundations</span>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <Code2 size={16} />
              Featured Projects
            </p>
            <h2>Built for fast scanning and clear proof of skill.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card reveal ${project.accent}`} key={project.title}>
                <div className="project-thumb" aria-hidden="true">
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="thumb-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="thumb-widget">
                    <strong>{project.metric.split(' ')[0]}</strong>
                    <small>{project.type}</small>
                  </div>
                </div>
                <div className="project-body">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span className="impact">{project.metric}</span>
                  <p>{project.summary}</p>
                  <div className="tags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
                    Case Study <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section case-study" id="case-study">
          <div className="case-intro reveal">
            <p className="eyebrow">
              <BriefcaseBusiness size={16} />
              Case Study Highlight
            </p>
            <h2>Banking Management System</h2>
            <p>
              A Java Swing and MySQL application that turns common banking operations into a structured desktop workflow.
            </p>
          </div>
          <div className="case-grid">
            {[
              ['Problem', 'Banking tasks like account creation, transfers, balance checks, and history lookup needed a cleaner workflow with fewer invalid transactions.'],
              ['Approach', 'Designed a Java Swing interface around role-based menus, then connected CRUD operations to MySQL through JDBC with validation and exception handling.'],
              ['Solution', 'Built 10+ core banking operations with OOP principles including encapsulation, inheritance, and polymorphism to keep the codebase organized.'],
              ['Results', 'Reduced invalid transaction errors by over 90%, cut duplicated GUI code by around 30%, and improved common task completion time by 25%.'],
            ].map(([title, body]) => (
              <div className="case-step reveal" key={title}>
                <CheckCircle2 size={20} />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-copy reveal">
            <p className="eyebrow">
              <GraduationCap size={16} />
              About
            </p>
            <h2>Curious, practical, and strongest where code meets real workflows.</h2>
            <p>
              I am a final-year Computer Science Engineering student at Galgotias University, building a foundation in
              Java, OOP, database design, and responsive web interfaces. My work is project-led: I like translating
              everyday systems into structured software with clear navigation, validated inputs, and dependable data
              handling.
            </p>
            <p>
              I am currently looking for entry-level software engineering, Java developer, backend trainee, and
              full-stack fresher opportunities where I can grow through production code, mentorship, and measurable
              ownership.
            </p>
          </div>
          <div className="portrait-card reveal">
            <div className="portrait">
              <img src="/arman-headshot.jpeg" alt="Arman Prashar" />
            </div>
            <div className="contact-mini">
              <span>
                <MapPin size={16} /> Greater Noida, India
              </span>
              <span>
                <Mail size={16} /> armanprasharoffice@gmail.com
              </span>
              <span>
                <Phone size={16} /> +91 9939232978
              </span>
            </div>
          </div>
        </section>

        <div className="marquee" aria-label="Key skills and tools">
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}</span>
            ))}
          </div>
        </div>

        <section className="section timeline-section">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <Server size={16} />
              Experience Timeline
            </p>
            <h2>Education, training, and technical growth.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item reveal" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials">
          <div className="credential reveal">
            <Database size={24} />
            <h3>Database Programming with SQL</h3>
            <p>Oracle Academy - Dec 2023</p>
          </div>
          <div className="credential reveal">
            <Code2 size={24} />
            <h3>Java Fundamentals</h3>
            <p>Oracle Academy - Jan 2024</p>
          </div>
          <div className="credential reveal">
            <Server size={24} />
            <h3>AWS Cloud Internship</h3>
            <p>AWS Academy / AICTE / EduSkills - 2024</p>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">
              <Send size={16} />
              Contact
            </p>
            <h2>Have a role, internship, or project where Java and databases matter?</h2>
            <p>
              Send a note and I will respond with availability, project details, or a walkthrough of the case study.
            </p>
            <div className="social-links">
              <a href="https://github.com/armanprashar" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/arman-prashar-64a052287/" target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> LinkedIn
              </a>
              <a href="mailto:armanprasharoffice@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
          <form className="contact-form reveal" action="mailto:armanprasharoffice@gmail.com" method="post" encType="text/plain">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about the opportunity" required />
            </label>
            <button className="button primary" type="submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
