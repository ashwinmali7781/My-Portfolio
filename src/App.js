import { useRef, useState, useEffect } from "react";

const RESUME = "https://drive.google.com/file/d/12tsF3x4N8agrkJCEtYXvXIp83zNIugk3/view?usp=drive_link";

const DATA = {
  name: "Ashwin Mali",
  title: "Software Developer",
  location: "Kolhapur, Maharashtra",
  phone: "+91 7058731964",
  email: "ashwinmali72@gmail.com",
  github: "https://github.com/ashwinmali7781",
  linkedin: "https://www.linkedin.com/in/ashwin-mali-697348286/",
  leetcode: "https://leetcode.com/u/AshwinMali/",
  bio: "Computer Science undergraduate specialising in AI-ML. I build scalable full-stack applications with React, Django, and modern backend technologies — and train deep learning models that run in production.",
  education: [
    { degree: "B.Tech — Computer Science (AI-ML)", school: "D.Y. Patil College of Engineering & Technology", year: "2024–2027", score: "CGPA: 7.91/10" },
    { degree: "Diploma — Automation & Robotics", school: "Sharad Institute of Technology, Polytechnic", year: "2021–2024", score: "80.91%" },
  ],
  skills: [
    { name: "JavaScript", pct: 88 },
    { name: "Python", pct: 82 },
    { name: "React.js", pct: 85 },
    { name: "Django", pct: 78 },
    { name: "Node.js & Express", pct: 72 },
    { name: "MySQL / SQL", pct: 78 },
    { name: "MongoDB", pct: 70 },
    { name: "TensorFlow / Keras", pct: 68 },
  ],
  tools: ["Git", "GitHub", "VS Code", "Vite", "Tailwind CSS", "Supabase", "REST APIs", "JWT", "Postman", "Jupyter Notebook"],
  projects: [
    {
      title: "GetHired — AI Interview Platform",
      category: "Full-Stack · AI",
      year: "2026",
      desc: "Scalable AI-powered coding interview prep platform with automated code evaluation, algorithmic complexity analysis, leaderboards, and Supabase auth. Reduced page load by 35% and manual evaluation time by 70%.",
      tech: ["React.js", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/ashwinmali7781/GetHired.git",
      live: "https://gethired-ashwinmali72-gmailcoms-projects.vercel.app/",
    },
    {
      title: "PropertyPro — Real Estate Platform",
      category: "Full-Stack",
      year: "2025",
      desc: "Full-stack MERN platform for listing, browsing, and managing properties. JWT-based auth with RBAC cut onboarding friction by 40%. Supports image uploads, advanced filtering, and multi-user concurrency.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/ashwinmali7781/PropertyPro.git",
      live: null,
    },
    {
      title: "Movie Sentiment Analyzer",
      category: "AI / ML",
      year: "2025",
      desc: "RNN-based deep learning model trained on the IMDB dataset for binary sentiment classification. Full NLP pipeline — tokenization, integer encoding, and sequence padding — deployed as a real-time Flask web app with sub-second inference.",
      tech: ["Python", "TensorFlow", "Keras", "RNN", "NLP", "Flask"],
      github: "https://github.com/ashwinmali7781/Movie-Sentiment-Analyzer.git",
      live: null,
    },
    {
      title: "LogiCart — E-Commerce Platform",
      category: "Full-Stack",
      year: "2025",
      desc: "Django + React e-commerce system with inventory management, custom admin dashboard (30+ products across 7 categories), AJAX coupon validation, cart and order tracking, and fault-tolerant client-side state.",
      tech: ["Django", "React.js", "SQLite", "JWT", "REST APIs"],
      github: "https://github.com/ashwinmali7781/LogiCart.git",
      live: null,
    },
  ],
  achievements: [
    { num: "250+", text: "Algorithmic problems solved on LeetCode, GeeksforGeeks & HackerRank." },
    { num: "Top 15K", text: "Google Big Code 2026 — ranked top 15,000 out of 100,000+ participants nationwide." },
    { num: "Pres.", text: "Elected President of the Automation & Robotics Department." },
    { num: "2nd", text: "State-Level Project Competition — 2nd place for an Intelligent Combat Robot." },
  ],
  certs: [
    { name: "Google AI Essentials", issuer: "Google", date: "July 2025", desc: "Generative AI, prompt engineering, and responsible AI use.", verify: "https://coursera.org/verify/L1RPLKLS6JT1" },
    { name: "Python Essentials", issuer: "Cisco Networking Academy", date: "July 2025", desc: "Data types, control flow, functions, and basic OOP.", verify: "https://www.credly.com/badges/2e11521f-8efc-4fba-82fe-c1cbb37d156a" },
  ],
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap');

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --bg: #06060a; --bg2: #0d0d14; --bg3: #13131e;
  --accent: #c8f53c; --white: #f6f5f0;
  --muted: #7a7a8a; --faint: rgba(255,255,255,0.07);
  --serif: 'Instrument Serif', Georgia, serif;
  --sans: 'Syne', sans-serif;
  --mono: 'JetBrains Mono', monospace;
}
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--white); font-family: var(--sans); overflow-x: hidden; }

.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.2rem 3.5rem;
  background: rgba(6,6,10,0.88); backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--faint);
}
.nav-logo { font-family: var(--sans); font-size: .85rem; font-weight: 800; letter-spacing: .1em; color: var(--white); }
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 2.5rem; list-style: none; align-items: center; }
.nav-links a { font-size: .6rem; letter-spacing: .2em; text-transform: uppercase; font-weight: 600; color: var(--muted); text-decoration: none; cursor: pointer; transition: color .2s; }
.nav-links a:hover { color: var(--accent); }
.nav-resume {
  font-family: var(--mono); font-size: .55rem; font-weight: 500;
  letter-spacing: .15em; text-transform: uppercase;
  color: var(--accent); text-decoration: none;
  border: 1px solid rgba(200,245,60,.3); padding: .4rem 1rem;
  transition: all .2s;
}
.nav-resume:hover { background: rgba(200,245,60,.08); border-color: var(--accent); }
.nav-status { display: flex; align-items: center; gap: .5rem; font-size: .55rem; letter-spacing: .15em; text-transform: uppercase; color: var(--muted); }
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: blink 2s ease-in-out infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

.hero {
  min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 3.5rem 5rem; position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 50% at 75% 30%, rgba(200,245,60,.07) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 70%, rgba(200,245,60,.04) 0%, transparent 60%);
}
.hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}
.hero-tag { font-family: var(--mono); font-size: .6rem; letter-spacing: .18em; text-transform: uppercase; color: var(--accent); margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem; }
.hero-tag::before { content: ''; width: 40px; height: 1px; background: var(--accent); }
.hero-name { font-family: var(--serif); font-size: clamp(4rem,11vw,9rem); font-weight: 400; line-height: .88; letter-spacing: -3px; color: var(--white); margin-bottom: 1rem; }
.hero-name em { font-style: italic; color: var(--accent); }
.hero-role { font-family: var(--mono); font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--muted); margin-bottom: 3rem; }
.hero-foot { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
.hero-bio { font-family: var(--mono); font-size: .82rem; line-height: 1.9; color: rgba(245,245,240,.55); max-width: 440px; }
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-p { font-family: var(--sans); font-size: .65rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; background: var(--accent); color: #06060a; padding: .85rem 2.2rem; border: none; cursor: pointer; transition: all .2s; clip-path: polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px)); text-decoration: none; display: inline-flex; align-items: center; }
.btn-p:hover { background: #a8d422; transform: translateY(-2px); }
.btn-g { font-family: var(--sans); font-size: .65rem; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; background: transparent; color: var(--muted); padding: .85rem 2.2rem; border: 1px solid rgba(255,255,255,.1); cursor: pointer; transition: all .2s; }
.btn-g:hover { border-color: rgba(255,255,255,.3); color: var(--white); }
.btn-r { font-family: var(--sans); font-size: .65rem; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; background: transparent; color: var(--accent); padding: .85rem 2.2rem; border: 1px solid rgba(200,245,60,.3); cursor: pointer; transition: all .2s; text-decoration: none; display: inline-flex; align-items: center; gap: .5rem; }
.btn-r:hover { background: rgba(200,245,60,.08); border-color: var(--accent); transform: translateY(-2px); }

section { padding: 7rem 3.5rem; border-top: 1px solid rgba(255,255,255,.04); }
.inner { max-width: 1100px; margin: 0 auto; }
.s-head { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 4.5rem; }
.s-num { font-family: var(--mono); font-size: .55rem; letter-spacing: .2em; color: var(--accent); text-transform: uppercase; }
.s-title { font-family: var(--serif); font-size: clamp(2rem,5vw,3.8rem); font-weight: 400; letter-spacing: -1.5px; color: var(--white); }
.s-title em { font-style: italic; }
.s-line { flex: 1; height: 1px; background: rgba(255,255,255,.06); margin-bottom: .5rem; }

.about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 5rem; align-items: start; }
.copy p { font-family: var(--mono); font-size: .8rem; line-height: 2; color: rgba(245,245,240,.55); margin-bottom: 1.2rem; }
.copy strong { color: var(--white); font-weight: 500; }
.edu-block { background: var(--bg2); border: 1px solid rgba(255,255,255,.07); padding: 2rem; }
.edu-label { font-family: var(--mono); font-size: .52rem; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; }
.edu-item { padding: 1.2rem 0; border-bottom: 1px solid rgba(255,255,255,.05); }
.edu-item:last-child { border-bottom: none; padding-bottom: 0; }
.edu-deg { font-size: .8rem; font-weight: 600; color: var(--white); margin-bottom: .3rem; }
.edu-school { font-family: var(--mono); font-size: .62rem; color: var(--muted); margin-bottom: .3rem; }
.edu-meta { display: flex; justify-content: space-between; font-family: var(--mono); font-size: .55rem; color: rgba(122,122,138,.6); }
.edu-score { color: var(--accent); font-weight: 500; }
.stats-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,.05); margin-top: 1.5rem; }
.stat-box { background: var(--bg2); padding: 1.5rem; }
.stat-val { font-family: var(--serif); font-size: 2.2rem; font-weight: 400; color: var(--accent); letter-spacing: -1.5px; line-height: 1; }
.stat-lbl { font-family: var(--mono); font-size: .5rem; letter-spacing: .15em; text-transform: uppercase; color: var(--muted); margin-top: .3rem; }

.skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.05); }
.sk { padding: 1.3rem 1.75rem; background: var(--bg2); display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 1.5rem; transition: background .2s; }
.sk:hover { background: var(--bg3); }
.sk-left { display: flex; flex-direction: column; gap: .6rem; }
.sk-name { font-size: .75rem; font-weight: 600; color: var(--white); }
.sk-track { height: 1px; background: rgba(255,255,255,.07); position: relative; }
.sk-fill { position: absolute; top: -1px; left: 0; height: 3px; background: linear-gradient(to right, var(--accent), rgba(200,245,60,.3)); transition: width 1.4s cubic-bezier(.16,1,.3,1); }
.sk-pct { font-family: var(--mono); font-size: .58rem; color: var(--muted); min-width: 2.2rem; text-align: right; }
.tools-wrap { margin-top: 2.5rem; }
.tools-label { font-family: var(--mono); font-size: .55rem; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
.tools-row { display: flex; flex-wrap: wrap; gap: .5rem; }
.tool { font-family: var(--mono); font-size: .55rem; letter-spacing: .1em; padding: .28rem .75rem; border: 1px solid rgba(255,255,255,.08); color: var(--muted); transition: all .2s; cursor: default; }
.tool:hover { border-color: rgba(200,245,60,.4); color: var(--accent); }

.proj-list { display: flex; flex-direction: column; }
.proj-row { display: grid; grid-template-columns: 80px 1fr 1.5rem; align-items: start; gap: 2.5rem; padding: 2.5rem 0; border-bottom: 1px solid rgba(255,255,255,.04); }
.proj-row:first-child { border-top: 1px solid rgba(255,255,255,.04); }
.proj-row:hover .proj-t { color: var(--accent); }
.p-meta { display: flex; flex-direction: column; gap: .35rem; padding-top: .25rem; }
.p-yr { font-family: var(--mono); font-size: .58rem; color: var(--muted); }
.p-cat { font-family: var(--mono); font-size: .52rem; font-weight: 500; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,255,255,.2); }
.proj-t { font-family: var(--serif); font-size: 1.4rem; font-weight: 400; color: rgba(245,245,240,.75); letter-spacing: -.3px; transition: color .22s; margin-bottom: .6rem; }
.proj-d { font-family: var(--mono); font-size: .72rem; line-height: 1.85; color: var(--muted); max-width: 580px; margin-bottom: .9rem; }
.tags { display: flex; flex-wrap: wrap; gap: .4rem; }
.tag { font-family: var(--mono); font-size: .5rem; letter-spacing: .12em; text-transform: uppercase; padding: .22rem .65rem; background: rgba(200,245,60,.07); border: 1px solid rgba(200,245,60,.15); color: rgba(200,245,60,.7); }
.proj-actions { display: flex; gap: .6rem; margin-top: .9rem; }
.proj-btn { font-family: var(--mono); font-size: .52rem; letter-spacing: .12em; text-transform: uppercase; padding: .3rem .85rem; text-decoration: none; transition: all .2s; display: inline-flex; align-items: center; gap: .4rem; }
.proj-btn-gh { border: 1px solid rgba(255,255,255,.12); color: var(--muted); }
.proj-btn-gh:hover { border-color: rgba(255,255,255,.35); color: var(--white); }
.proj-btn-live { border: 1px solid rgba(200,245,60,.25); color: rgba(200,245,60,.8); background: rgba(200,245,60,.05); }
.proj-btn-live:hover { background: rgba(200,245,60,.12); border-color: var(--accent); color: var(--accent); }

.ach-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,.05); }
.ach-item { background: var(--bg2); padding: 2rem; position: relative; overflow: hidden; transition: background .2s; }
.ach-item:hover { background: var(--bg3); }
.ach-item::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, var(--accent), transparent); opacity: 0; transition: opacity .3s; }
.ach-item:hover::after { opacity: 1; }
.ach-val { font-family: var(--serif); font-size: 2rem; font-style: italic; color: var(--accent); opacity: .4; line-height: 1; margin-bottom: .75rem; }
.ach-text { font-family: var(--mono); font-size: .72rem; line-height: 1.8; color: var(--muted); }

.cert-list { display: flex; flex-direction: column; gap: 1px; background: rgba(255,255,255,.05); margin-top: 3rem; }
.cert-item { background: var(--bg2); padding: 1.75rem 2rem; display: flex; justify-content: space-between; align-items: center; gap: 2rem; transition: background .2s; }
.cert-item:hover { background: var(--bg3); }
.cert-name { font-size: .82rem; font-weight: 600; color: var(--white); margin-bottom: .3rem; }
.cert-desc { font-family: var(--mono); font-size: .62rem; color: var(--muted); line-height: 1.7; }
.cert-right { text-align: right; flex-shrink: 0; }
.cert-issuer { font-family: var(--mono); font-size: .55rem; letter-spacing: .15em; text-transform: uppercase; color: var(--accent); margin-bottom: .2rem; }
.cert-date { font-family: var(--mono); font-size: .5rem; color: rgba(122,122,138,.5); margin-bottom: .5rem; }
.cert-verify { font-family: var(--mono); font-size: .5rem; letter-spacing: .1em; text-transform: uppercase; color: rgba(200,245,60,.6); text-decoration: none; border: 1px solid rgba(200,245,60,.2); padding: .2rem .6rem; transition: all .2s; }
.cert-verify:hover { background: rgba(200,245,60,.08); color: var(--accent); border-color: var(--accent); }

.contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 5rem; align-items: start; }
.contact-big { font-family: var(--serif); font-size: clamp(2rem,5vw,3.8rem); font-weight: 400; letter-spacing: -1.5px; color: var(--white); line-height: 1.1; margin-bottom: 1.5rem; }
.contact-big em { font-style: italic; color: var(--accent); }
.contact-sub { font-family: var(--mono); font-size: .75rem; line-height: 1.9; color: var(--muted); margin-bottom: 2.5rem; }
.contact-email { display: inline-block; font-family: var(--mono); font-size: .72rem; letter-spacing: .12em; color: var(--accent); text-decoration: none; border-bottom: 1px solid rgba(200,245,60,.3); padding-bottom: .4rem; margin-bottom: 2.5rem; transition: border-color .2s; }
.contact-email:hover { border-color: var(--accent); }
.c-links { display: flex; flex-direction: column; gap: 1px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.05); }
.c-link { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem 1.75rem; text-decoration: none; color: var(--muted); transition: all .2s; }
.c-link:hover { background: var(--bg3); color: var(--white); }
.c-link-name { font-family: var(--sans); font-size: .75rem; font-weight: 600; }
.c-link-url { font-family: var(--mono); font-size: .52rem; color: rgba(122,122,138,.45); transition: color .2s; }
.c-link:hover .c-link-url { color: var(--accent); }
.c-arr { font-size: .8rem; transition: transform .2s; }
.c-link:hover .c-arr { transform: translate(3px,-3px); color: var(--accent); }

footer { padding: 2rem 3.5rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,.04); }
.fc { font-family: var(--mono); font-size: .55rem; letter-spacing: .1em; color: rgba(255,255,255,.2); }

@media(max-width:768px){
  .nav { padding: 1rem 1.5rem; }
  .nav-links, .nav-status { display: none; }
  .hero { padding: 0 1.5rem 4rem; }
  section { padding: 5rem 1.5rem; }
  .about-grid, .skills-grid, .ach-grid, .contact-grid { grid-template-columns: 1fr; }
  .proj-row { grid-template-columns: 1fr; gap: 1rem; }
  footer { flex-direction: column; gap: .5rem; text-align: center; }
}
`;

function SkillBars() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="skills-grid">
        {DATA.skills.map(s => (
          <div className="sk" key={s.name}>
            <div className="sk-left">
              <div className="sk-name">{s.name}</div>
              <div className="sk-track">
                <div className="sk-fill" style={{ width: visible ? `${s.pct}%` : "0%" }} />
              </div>
            </div>
            <div className="sk-pct">{s.pct}%</div>
          </div>
        ))}
      </div>
      <div className="tools-wrap">
        <div className="tools-label">Tools &amp; Platforms</div>
        <div className="tools-row">
          {DATA.tools.map(t => <span className="tool" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Ashwin<span>.</span></div>
        <ul className="nav-links">
          {["About","Skills","Projects","Achievements","Contact"].map(s => (
            <li key={s}><a onClick={() => go(s.toLowerCase())}>{s}</a></li>
          ))}
          <li>
            <a className="nav-resume" href={RESUME} target="_blank" rel="noreferrer">↓ Resume</a>
          </li>
        </ul>
        <div className="nav-status"><div className="dot" />Open to opportunities</div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-tag">CSE Undergrad · AIML · Full Stack</div>
        <h1 className="hero-name">Ashwin<br /><em>Mali</em></h1>
        <div className="hero-role">Software Developer</div>
        <div className="hero-foot">
          <p className="hero-bio">{DATA.bio}</p>
          <div className="hero-cta">
            <button className="btn-p" onClick={() => go("projects")}>View My Work</button>
            <a className="btn-r" href={RESUME} target="_blank" rel="noreferrer">↓ Resume</a>
            <button className="btn-g" onClick={() => go("contact")}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="inner">
          <div className="s-head">
            <div><div className="s-num">About</div><h2 className="s-title">Who I <em>Am</em></h2></div>
            <div className="s-line" />
          </div>
          <div className="about-grid">
            <div className="copy">
              <p>I'm <strong>Ashwin Mali</strong>, a B.Tech student specialising in <strong>Computer Science (AI-ML)</strong>. I blend strong algorithmic foundations with hands-on full-stack development and deep learning.</p>
              <p>I've solved <strong>250+ DSA problems</strong>, ranked <strong>top 15,000 in Google Big Code 2026</strong>, led teams as <strong>President of the Automation & Robotics Dept.</strong>, and shipped production projects used by real people.</p>
              <p>📍 {DATA.location} &nbsp;·&nbsp; 📞 <strong>{DATA.phone}</strong></p>
            </div>
            <div>
              <div className="edu-block">
                <div className="edu-label">Education</div>
                {DATA.education.map(e => (
                  <div className="edu-item" key={e.degree}>
                    <div className="edu-deg">{e.degree}</div>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-meta"><span>{e.year}</span><span className="edu-score">{e.score}</span></div>
                  </div>
                ))}
              </div>
              <div className="stats-row">
                {[["250+","Problems Solved"],["4","Projects Shipped"],["Top 15K","Google Big Code"],["AI-ML","Specialisation"]].map(([v,l]) => (
                  <div className="stat-box" key={l}>
                    <div className="stat-val">{v}</div>
                    <div className="stat-lbl">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="inner">
          <div className="s-head">
            <div><div className="s-num">Skills</div><h2 className="s-title">Technical <em>Stack</em></h2></div>
            <div className="s-line" />
          </div>
          <SkillBars />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="inner">
          <div className="s-head">
            <div><div className="s-num">Projects</div><h2 className="s-title">Selected <em>Work</em></h2></div>
            <div className="s-line" />
          </div>
          <div className="proj-list">
            {DATA.projects.map(p => (
              <div className="proj-row" key={p.title}>
                <div className="p-meta">
                  <div className="p-yr">{p.year}</div>
                  <div className="p-cat">{p.category}</div>
                </div>
                <div>
                  <div className="proj-t">{p.title}</div>
                  <div className="proj-d">{p.desc}</div>
                  <div className="tags">{p.tech.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                  <div className="proj-actions">
                    <a className="proj-btn proj-btn-gh" href={p.github} target="_blank" rel="noreferrer">⌥ GitHub</a>
                    {p.live && <a className="proj-btn proj-btn-live" href={p.live} target="_blank" rel="noreferrer">↗ Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <div className="inner">
          <div className="s-head">
            <div><div className="s-num">Achievements</div><h2 className="s-title">Beyond the <em>Code</em></h2></div>
            <div className="s-line" />
          </div>
          <div className="ach-grid">
            {DATA.achievements.map(a => (
              <div className="ach-item" key={a.num}>
                <div className="ach-val">{a.num}</div>
                <div className="ach-text">{a.text}</div>
              </div>
            ))}
          </div>
          <div className="cert-list">
            {DATA.certs.map(c => (
              <div className="cert-item" key={c.name}>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-desc">{c.desc}</div>
                </div>
                <div className="cert-right">
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-date">{c.date}</div>
                  {c.verify && <a className="cert-verify" href={c.verify} target="_blank" rel="noreferrer">↗ Verify</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="inner">
          <div className="s-head">
            <div><div className="s-num">Contact</div><h2 className="s-title">Let's <em>Connect</em></h2></div>
            <div className="s-line" />
          </div>
          <div className="contact-grid">
            <div>
              <div className="contact-big">Open to new<br /><em>opportunities</em></div>
              <p className="contact-sub">Whether it's an internship, a collaboration, or just a tech conversation — I'd love to hear from you.</p>
              <a className="contact-email" href={`mailto:${DATA.email}`}>✉ {DATA.email}</a>
            </div>
            <div className="c-links">
              <a className="c-link" href={DATA.github} target="_blank" rel="noreferrer">
                <div><div className="c-link-name">GitHub</div><div className="c-link-url">github.com/ashwinmali7781</div></div>
                <div className="c-arr">↗</div>
              </a>
              <a className="c-link" href={DATA.linkedin} target="_blank" rel="noreferrer">
                <div><div className="c-link-name">LinkedIn</div><div className="c-link-url">linkedin.com/in/ashwin-mali-697348286</div></div>
                <div className="c-arr">↗</div>
              </a>
              <a className="c-link" href={DATA.leetcode} target="_blank" rel="noreferrer">
                <div><div className="c-link-name">LeetCode</div><div className="c-link-url">leetcode.com/u/AshwinMali</div></div>
                <div className="c-arr">↗</div>
              </a>
              <a className="c-link" href={RESUME} target="_blank" rel="noreferrer">
                <div><div className="c-link-name">Resume</div><div className="c-link-url">View / Download PDF</div></div>
                <div className="c-arr">↗</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="fc">© 2026 Ashwin Mali · All rights reserved.</div>
        <div className="fc">Built with React · Deployed on Vercel</div>
      </footer>
    </>
  );
}
