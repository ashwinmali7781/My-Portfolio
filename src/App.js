import { useRef, useState, useEffect, useCallback } from "react";

const RESUME = "https://drive.google.com/file/d/1kgGRLaiqkqlXRGRCimM6BglLT2yzmDT2/view?usp=sharing";

const DATA = {
  name: "Ashwin Mali",
  email: "ashwinmali72@gmail.com",
  phone: "+91 7058731964",
  location: "Kolhapur, Maharashtra, India",
  github: "https://github.com/ashwinmali7781",
  linkedin: "https://www.linkedin.com/in/ashwin-mali-697348286/",
  leetcode: "https://leetcode.com/u/AshwinMali/",
  portfolio: "https://my-portfolio-54ju.onrender.com/",
  tagline: "I build scalable software powered by AI.",
  bio: "Computer Science & Engineering undergraduate specialising in AI-ML. I build scalable full-stack applications and train deep learning models that run in production — from React frontends to Django backends to RNN classifiers.",

  stack: {
    Languages:  ["Python","C++","JavaScript","TypeScript","Java","SQL"],
    Frontend:   ["React","Next.js","Tailwind CSS","Vite","HTML5","CSS3"],
    Backend:    ["Django","Node.js","Express","Flask","REST APIs","JWT"],
    Databases:  ["PostgreSQL","MongoDB","MySQL","SQLite","Supabase","Firebase"],
    "AI / ML":  ["TensorFlow","Keras","PyTorch","Scikit-learn","OpenCV","NLP"],
    Tools:      ["Git","Docker","AWS","Postman","Jupyter","VS Code","Linux"],
  },

  projects: [
    {
      id: "gethired",
      title: "GetHired",
      subtitle: "AI Interview Platform",
      year: "2026",
      category: "Full-Stack · AI",
      desc: "Scalable AI-powered coding interview prep with automated code evaluation, algorithmic complexity analysis, real-time leaderboards, and Supabase auth.",
      problem: "Manual code review in interviews is slow and inconsistent.",
      solution: "Built an AI evaluation engine that analyses code complexity automatically, cutting manual review by 70%.",
      metrics: ["+35% UI performance", "-70% eval time", "6-table schema"],
      tech: ["React","Vite","Supabase","PostgreSQL","Tailwind"],
      github: "https://github.com/ashwinmali7781/GetHired.git",
      live: "https://gethired-ashwinmali72-gmailcoms-projects.vercel.app/",
      featured: true,
    },
    {
      id: "propertypro",
      title: "PropertyPro",
      subtitle: "Real Estate Marketplace",
      year: "2025",
      category: "Full-Stack",
      desc: "Full-stack MERN platform for property listings with JWT auth, RBAC, image uploads, advanced filtering, and multi-user concurrency.",
      problem: "Property listing platforms lack secure role-based access and seamless concurrency.",
      solution: "Implemented JWT + RBAC that cut onboarding friction by 40% while supporting concurrent multi-user sessions.",
      metrics: ["-40% onboarding friction", "Multi-user concurrency", "Mobile responsive"],
      tech: ["React","Node.js","Express","MongoDB","JWT"],
      github: "https://github.com/ashwinmali7781/PropertyPro.git",
      live: null,
      featured: true,
    },
    {
      id: "sentiment",
      title: "Sentiment Analyzer",
      subtitle: "Deep Learning NLP",
      year: "2025",
      category: "AI / ML",
      desc: "RNN-based binary sentiment classifier trained on the IMDB dataset with a full NLP pipeline — tokenization, encoding, padding — deployed as a real-time Flask app.",
      problem: "Accurate real-time sentiment analysis requires a full production ML pipeline.",
      solution: "Trained an RNN on IMDB and deployed via Flask with sub-second inference on live user input.",
      metrics: ["Sub-second inference", "Full NLP pipeline", "Production .h5 model"],
      tech: ["Python","TensorFlow","Keras","RNN","Flask","NLP"],
      github: "https://github.com/ashwinmali7781/Movie-Sentiment-Analyzer.git",
      live: null,
      featured: false,
    },
    {
      id: "logicart",
      title: "LogiCart",
      subtitle: "E-Commerce Platform",
      year: "2025",
      category: "Full-Stack",
      desc: "Django + React e-commerce system with inventory management, custom admin dashboard, AJAX coupon validation, cart, wishlist, and order tracking.",
      problem: "Building a fault-tolerant e-commerce system with a custom admin layer is complex.",
      solution: "Engineered a Django REST backend with 30+ products across 7 categories and fault-tolerant client-side state using Agile delivery.",
      metrics: ["30+ products", "7 categories", "Agile delivery"],
      tech: ["Django","React","SQLite","JWT","REST APIs"],
      github: "https://github.com/ashwinmali7781/LogiCart.git",
      live: null,
      featured: false,
    },
  ],

  achievements: [
    { value: "250+", label: "Problems Solved", sub: "LeetCode · GFG · HackerRank" },
    { value: "Top 15K", label: "Google Big Code", sub: "out of 100,000+ nationwide" },
    { value: "President", label: "Automation & Robotics", sub: "Dept. head & leader" },
    { value: "2nd Place", label: "State Competition", sub: "Intelligent Combat Robot" },
  ],

  education: [
    { degree: "B.Tech — Computer Science (AI-ML)", school: "D.Y. Patil College of Engineering & Technology, Kolhapur", year: "2024 – 2027", score: "CGPA 7.91 / 10" },
    { degree: "Diploma — Automation & Robotics", school: "Sharad Institute of Technology, Polytechnic, Ichalkaranji", year: "2021 – 2024", score: "80.91%" },
  ],

  certs: [
    { name: "Google AI Essentials", issuer: "Google", date: "Jul 2025", desc: "Generative AI, Prompt Engineering, Responsible AI", verify: "https://coursera.org/verify/L1RPLKLS6JT1" },
    { name: "Python Essentials", issuer: "Cisco Networking Academy", date: "Jul 2025", desc: "Python, OOP, Functions, Data Structures", verify: "https://www.credly.com/badges/2e11521f-8efc-4fba-82fe-c1cbb37d156a" },
  ],
};

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}

:root {
  --bg:      #030712;
  --surface: #111827;
  --card:    #1F2937;
  --primary: #2563EB;
  --accent:  #3B82F6;
  --hi:      #60A5FA;
  --success: #10B981;
  --white:   #FFFFFF;
  --txt2:    #94A3B8;
  --border:  rgba(255,255,255,.08);
  --display: 'Space Grotesk', sans-serif;
  --body:    'Inter', sans-serif;
  --mono:    'JetBrains Mono', monospace;
}

html { scroll-behavior: smooth; font-size: 16px; }
body { background: var(--bg); color: var(--white); font-family: var(--body); overflow-x: hidden; line-height: 1.6; }
::selection { background: var(--primary); color: #fff; }
::-webkit-scrollbar { width: 3px; } ::-webkit-scrollbar-track { background: var(--bg); } ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 2px; }

/* ── Custom cursor ── */
.cursor { position: fixed; width: 8px; height: 8px; background: var(--accent); border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%,-50%); transition: transform .1s, width .2s, height .2s, background .2s; }
.cursor-ring { position: fixed; width: 36px; height: 36px; border: 1px solid rgba(59,130,246,.4); border-radius: 50%; pointer-events: none; z-index: 9998; transform: translate(-50%,-50%); transition: transform .15s ease-out, width .25s, height .25s; }
body:hover .cursor { opacity: 1; }

/* ── Scroll progress ── */
.scroll-bar { position: fixed; top: 0; left: 0; height: 2px; background: linear-gradient(to right, var(--primary), var(--hi)); z-index: 1000; transition: width .1s; }

/* ── Nav ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.1rem 3rem;
  background: rgba(3,7,18,.8); backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  transition: padding .3s;
}
.nav.scrolled { padding: .75rem 3rem; }
.nav-logo { font-family: var(--display); font-size: 1.1rem; font-weight: 700; color: var(--white); letter-spacing: -.03em; }
.nav-logo span { color: var(--accent); }
.nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
.nav-links a { font-size: .78rem; font-weight: 500; color: var(--txt2); text-decoration: none; cursor: pointer; transition: color .2s; letter-spacing: .01em; }
.nav-links a:hover { color: var(--white); }
.nav-cta {
  font-family: var(--body); font-size: .75rem; font-weight: 600;
  background: var(--primary); color: #fff; padding: .45rem 1.2rem;
  border: none; border-radius: 6px; cursor: pointer; text-decoration: none;
  display: inline-flex; align-items: center; gap: .4rem;
  transition: background .2s, transform .15s; letter-spacing: .01em;
}
.nav-cta:hover { background: var(--accent); transform: translateY(-1px); }
.nav-dot { display: flex; align-items: center; gap: .5rem; font-size: .7rem; color: var(--txt2); font-family: var(--mono); }
.pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--success); animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }

/* ── Hero ── */
.hero {
  min-height: 100vh; display: flex; flex-direction: column; justify-content: center;
  padding: 8rem 3rem 5rem; position: relative; overflow: hidden;
}
.hero-noise {
  position: absolute; inset: 0; opacity: .03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  pointer-events: none;
}
.hero-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(59,130,246,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%);
  pointer-events: none;
}
.hero-glow {
  position: absolute; top: -20%; right: -10%; width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(37,99,235,.12) 0%, transparent 70%);
  pointer-events: none;
}
.hero-glow2 {
  position: absolute; bottom: 0; left: -10%; width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(16,185,129,.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-inner { max-width: 1100px; margin: 0 auto; width: 100%; position: relative; z-index: 1; }
.hero-label { font-family: var(--mono); font-size: .7rem; color: var(--accent); letter-spacing: .15em; text-transform: uppercase; margin-bottom: 1.5rem; display: flex; align-items: center; gap: .75rem; }
.hero-label::before { content:''; width:32px; height:1px; background: var(--accent); }
.hero-name {
  font-family: var(--display); font-size: clamp(3.5rem, 10vw, 8.5rem);
  font-weight: 700; line-height: .92; letter-spacing: -.04em; color: var(--white);
  margin-bottom: 1.25rem;
}
.hero-name .line2 { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,.25); display: block; }
.hero-roles { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 2rem; }
.hero-role-tag { font-family: var(--mono); font-size: .7rem; color: var(--txt2); background: rgba(255,255,255,.04); border: 1px solid var(--border); padding: .3rem .8rem; border-radius: 100px; }
.hero-tagline { font-family: var(--display); font-size: clamp(1rem,2.5vw,1.4rem); font-weight: 400; color: var(--txt2); max-width: 520px; margin-bottom: 2.5rem; line-height: 1.5; letter-spacing: -.01em; }
.hero-tagline strong { color: var(--white); }
.hero-actions { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: 3rem; }
.btn-primary {
  font-family: var(--body); font-size: .82rem; font-weight: 600;
  background: var(--primary); color: #fff;
  padding: .7rem 1.6rem; border: none; border-radius: 8px; cursor: pointer;
  transition: all .2s; text-decoration: none; display: inline-flex; align-items: center; gap: .5rem;
}
.btn-primary:hover { background: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,.3); }
.btn-outline {
  font-family: var(--body); font-size: .82rem; font-weight: 500;
  background: transparent; color: var(--txt2);
  padding: .7rem 1.6rem; border: 1px solid var(--border); border-radius: 8px; cursor: pointer;
  transition: all .2s; text-decoration: none; display: inline-flex; align-items: center; gap: .5rem;
}
.btn-outline:hover { border-color: rgba(255,255,255,.25); color: var(--white); transform: translateY(-2px); }
.hero-socials { display: flex; gap: 1rem; }
.social-link { width: 36px; height: 36px; border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--txt2); text-decoration: none; font-size: .85rem; transition: all .2s; }
.social-link:hover { border-color: var(--accent); color: var(--accent); background: rgba(59,130,246,.08); transform: translateY(-2px); }
.hero-scroll { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: .4rem; opacity: .4; }
.hero-scroll span { font-family: var(--mono); font-size: .55rem; letter-spacing: .15em; color: var(--txt2); text-transform: uppercase; }
.scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, var(--txt2)); animation: scrollpulse 2s ease-in-out infinite; }
@keyframes scrollpulse { 0%,100%{opacity:.3} 50%{opacity:1} }

/* ── Sections ── */
.section { padding: 7rem 3rem; border-top: 1px solid var(--border); }
.container { max-width: 1100px; margin: 0 auto; }
.s-eyebrow { font-family: var(--mono); font-size: .65rem; letter-spacing: .2em; color: var(--accent); text-transform: uppercase; margin-bottom: .75rem; }
.s-title { font-family: var(--display); font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700; letter-spacing: -.03em; color: var(--white); margin-bottom: 1rem; line-height: 1.05; }
.s-title em { font-style: normal; color: var(--hi); }
.s-sub { font-size: .95rem; color: var(--txt2); max-width: 480px; line-height: 1.7; margin-bottom: 3.5rem; }

/* ── About ── */
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.about-copy p { font-size: .9rem; line-height: 1.85; color: var(--txt2); margin-bottom: 1.1rem; }
.about-copy strong { color: var(--white); font-weight: 600; }
.edu-cards { display: flex; flex-direction: column; gap: .75rem; }
.edu-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem 1.5rem; transition: border-color .2s, transform .2s; }
.edu-card:hover { border-color: rgba(59,130,246,.3); transform: translateX(4px); }
.edu-card-deg { font-family: var(--display); font-size: .88rem; font-weight: 600; color: var(--white); margin-bottom: .3rem; }
.edu-card-school { font-size: .78rem; color: var(--txt2); margin-bottom: .5rem; }
.edu-card-meta { display: flex; justify-content: space-between; }
.edu-card-year { font-family: var(--mono); font-size: .65rem; color: rgba(148,163,184,.5); }
.edu-card-score { font-family: var(--mono); font-size: .65rem; color: var(--accent); font-weight: 500; }

/* ── Achievements ── */
.ach-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.ach-card { background: var(--surface); padding: 2rem 1.5rem; text-align: center; transition: background .2s; position: relative; overflow: hidden; }
.ach-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background: linear-gradient(to right, transparent, var(--primary), transparent); opacity: 0; transition: opacity .3s; }
.ach-card:hover::before { opacity: 1; }
.ach-card:hover { background: var(--card); }
.ach-val { font-family: var(--display); font-size: 2.2rem; font-weight: 700; color: var(--white); letter-spacing: -.04em; line-height: 1; margin-bottom: .5rem; }
.ach-label { font-size: .8rem; font-weight: 600; color: var(--txt2); margin-bottom: .25rem; }
.ach-sub { font-family: var(--mono); font-size: .6rem; color: rgba(148,163,184,.5); }

/* ── Tech Stack ── */
.stack-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
.stack-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; transition: border-color .2s, transform .2s; }
.stack-card:hover { border-color: rgba(59,130,246,.25); transform: translateY(-2px); }
.stack-cat { font-family: var(--mono); font-size: .6rem; letter-spacing: .15em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
.stack-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
.stack-tag { font-family: var(--mono); font-size: .68rem; color: var(--txt2); background: rgba(255,255,255,.04); border: 1px solid var(--border); padding: .22rem .6rem; border-radius: 4px; transition: all .15s; }
.stack-tag:hover { color: var(--hi); border-color: rgba(96,165,250,.3); background: rgba(96,165,250,.06); }

/* ── Projects ── */
.proj-featured { display: grid; grid-template-columns: 1.1fr 1fr; gap: 2rem; margin-bottom: 1.5rem; }
.proj-card {
  background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
  padding: 2rem; transition: all .25s; cursor: default; position: relative; overflow: hidden;
}
.proj-card::after { content:''; position:absolute; inset:0; border-radius: 16px; background: linear-gradient(135deg, rgba(37,99,235,.05) 0%, transparent 60%); opacity: 0; transition: opacity .3s; pointer-events:none; }
.proj-card:hover::after { opacity: 1; }
.proj-card:hover { border-color: rgba(59,130,246,.25); transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,.3); }
.proj-card.featured { background: linear-gradient(135deg, rgba(37,99,235,.08) 0%, var(--surface) 100%); }
.proj-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; }
.proj-year { font-family: var(--mono); font-size: .62rem; color: var(--txt2); background: rgba(255,255,255,.05); padding: .2rem .6rem; border-radius: 4px; }
.proj-links { display: flex; gap: .5rem; }
.proj-link { width: 30px; height: 30px; border: 1px solid var(--border); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: var(--txt2); text-decoration: none; font-size: .75rem; transition: all .2s; }
.proj-link:hover { border-color: var(--accent); color: var(--accent); }
.proj-cat { font-family: var(--mono); font-size: .58rem; letter-spacing: .15em; text-transform: uppercase; color: var(--accent); margin-bottom: .5rem; }
.proj-title { font-family: var(--display); font-size: 1.35rem; font-weight: 700; color: var(--white); letter-spacing: -.02em; margin-bottom: .3rem; line-height: 1.1; }
.proj-subtitle { font-family: var(--mono); font-size: .7rem; color: var(--txt2); margin-bottom: 1rem; }
.proj-desc { font-size: .82rem; line-height: 1.75; color: var(--txt2); margin-bottom: 1.25rem; }
.proj-metrics { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.25rem; }
.proj-metric { font-family: var(--mono); font-size: .62rem; color: var(--success); background: rgba(16,185,129,.08); border: 1px solid rgba(16,185,129,.2); padding: .18rem .55rem; border-radius: 100px; }
.proj-tech { display: flex; flex-wrap: wrap; gap: .35rem; }
.proj-tech-tag { font-family: var(--mono); font-size: .6rem; color: rgba(148,163,184,.6); background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06); padding: .15rem .5rem; border-radius: 3px; }
.proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.proj-card.sm .proj-title { font-size: 1.05rem; }
.proj-card.sm .proj-desc { font-size: .78rem; }

/* ── Certs ── */
.cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
.cert-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; transition: all .2s; }
.cert-card:hover { border-color: rgba(59,130,246,.25); transform: translateY(-2px); }
.cert-name { font-family: var(--display); font-size: .95rem; font-weight: 600; color: var(--white); margin-bottom: .3rem; }
.cert-desc-txt { font-size: .78rem; color: var(--txt2); line-height: 1.6; }
.cert-right { text-align: right; flex-shrink: 0; }
.cert-issuer { font-family: var(--mono); font-size: .6rem; letter-spacing: .1em; text-transform: uppercase; color: var(--accent); margin-bottom: .2rem; }
.cert-date { font-family: var(--mono); font-size: .6rem; color: rgba(148,163,184,.4); margin-bottom: .6rem; }
.cert-verify { font-family: var(--mono); font-size: .6rem; color: var(--hi); text-decoration: none; border: 1px solid rgba(96,165,250,.25); padding: .2rem .55rem; border-radius: 4px; transition: all .2s; }
.cert-verify:hover { background: rgba(96,165,250,.08); border-color: var(--hi); }

/* ── Contact ── */
.contact-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 5rem; align-items: start; }
.contact-heading { font-family: var(--display); font-size: clamp(2rem,4vw,3rem); font-weight: 700; letter-spacing: -.04em; color: var(--white); line-height: 1.05; margin-bottom: 1.25rem; }
.contact-heading em { font-style: normal; color: var(--hi); }
.contact-body { font-size: .88rem; color: var(--txt2); line-height: 1.75; margin-bottom: 2rem; }
.contact-email-link { font-family: var(--mono); font-size: .82rem; color: var(--accent); text-decoration: none; display: inline-flex; align-items: center; gap: .5rem; border-bottom: 1px solid rgba(59,130,246,.3); padding-bottom: .3rem; transition: all .2s; }
.contact-email-link:hover { color: var(--hi); border-color: var(--hi); }
.contact-links { display: flex; flex-direction: column; gap: 1px; background: var(--border); border-radius: 12px; overflow: hidden; }
.c-link { display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.5rem; text-decoration: none; color: var(--txt2); background: var(--surface); transition: all .2s; }
.c-link:first-child { border-radius: 12px 12px 0 0; }
.c-link:last-child { border-radius: 0 0 12px 12px; }
.c-link:hover { background: var(--card); color: var(--white); padding-left: 2rem; }
.c-link-left { display: flex; flex-direction: column; gap: .2rem; }
.c-link-name { font-weight: 600; font-size: .85rem; }
.c-link-url { font-family: var(--mono); font-size: .58rem; color: rgba(148,163,184,.4); transition: color .2s; }
.c-link:hover .c-link-url { color: var(--accent); }
.c-arr { font-size: .8rem; transition: transform .2s; }
.c-link:hover .c-arr { transform: translate(3px,-3px); color: var(--accent); }

/* ── Footer ── */
footer { padding: 2rem 3rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); }
.fc { font-family: var(--mono); font-size: .62rem; color: rgba(255,255,255,.2); letter-spacing: .05em; }
.fc a { color: var(--accent); text-decoration: none; }

/* ── Fade-in animation ── */
.fade-in { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
.fade-in.visible { opacity: 1; transform: none; }
.fade-in-d1 { transition-delay: .1s; }
.fade-in-d2 { transition-delay: .2s; }
.fade-in-d3 { transition-delay: .3s; }
.fade-in-d4 { transition-delay: .4s; }

/* ── Responsive ── */
@media(max-width:900px){
  .nav { padding: 1rem 1.5rem; }
  .nav-links, .nav-dot { display: none; }
  .hero { padding: 7rem 1.5rem 4rem; }
  .section { padding: 5rem 1.5rem; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .ach-grid { grid-template-columns: 1fr 1fr; }
  .stack-grid { grid-template-columns: 1fr 1fr; }
  .proj-featured, .proj-grid, .cert-grid { grid-template-columns: 1fr; }
  footer { flex-direction: column; gap: .5rem; text-align: center; }
}
@media(max-width:480px){
  .ach-grid { grid-template-columns: 1fr; }
  .stack-grid { grid-template-columns: 1fr; }
  .hero-name { font-size: clamp(2.8rem, 14vw, 4rem); }
}
`;

/* ─── Hooks ───────────────────────────────────────────────────────────────── */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return pct;
}

function useCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = e => {
      if (dot.current) { dot.current.style.left = e.clientX + "px"; dot.current.style.top = e.clientY + "px"; }
      if (ring.current) { ring.current.style.left = e.clientX + "px"; ring.current.style.top = e.clientY + "px"; }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return { dot, ring };
}

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

/* ─── Components ──────────────────────────────────────────────────────────── */
function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);
  const isNumeric = /^\d+/.test(target);
  const numericVal = parseInt(target);

  useEffect(() => {
    if (!isNumeric) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        let start = 0;
        const dur = 1400;
        const step = t => {
          const progress = Math.min(t / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * numericVal));
          if (progress < 1) requestAnimationFrame(t2 => step(t2 - t + t));
        };
        requestAnimationFrame(t => step(0));
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [numericVal, isNumeric]);

  if (!isNumeric) return <span ref={ref}>{target}</span>;
  const suffix = target.replace(/^\d+/, "");
  return <span ref={ref}>{count}{suffix}</span>;
}

function ProjectCard({ p, size = "full" }) {
  return (
    <div className={`proj-card fade-in ${p.featured ? "featured" : ""} ${size === "sm" ? "sm" : ""}`}>
      <div className="proj-head">
        <span className="proj-year">{p.year}</span>
        <div className="proj-links">
          <a className="proj-link" href={p.github} target="_blank" rel="noreferrer" title="GitHub">⌥</a>
          {p.live && <a className="proj-link" href={p.live} target="_blank" rel="noreferrer" title="Live">↗</a>}
        </div>
      </div>
      <div className="proj-cat">{p.category}</div>
      <div className="proj-title">{p.title}</div>
      <div className="proj-subtitle">{p.subtitle}</div>
      <div className="proj-desc">{p.desc}</div>
      <div className="proj-metrics">
        {p.metrics.map(m => <span className="proj-metric" key={m}>{m}</span>)}
      </div>
      <div className="proj-tech">
        {p.tech.map(t => <span className="proj-tech-tag" key={t}>{t}</span>)}
      </div>
    </div>
  );
}

/* ─── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  const scrollPct = useScrollProgress();
  const { dot, ring } = useCursor();
  const navScrolled = useNavScroll();
  useFadeIn();

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const featured = DATA.projects.filter(p => p.featured);
  const rest = DATA.projects.filter(p => !p.featured);

  return (
    <>
      <style>{css}</style>

      {/* Custom cursor */}
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />

      {/* Scroll progress */}
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />

      {/* ── NAV ── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">ashwin<span>.</span></div>
        <ul className="nav-links">
          {["About","Stack","Projects","Achievements","Contact"].map(s => (
            <li key={s}><a onClick={() => go(s.toLowerCase())}>{s}</a></li>
          ))}
        </ul>
        <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
          <div className="nav-dot"><div className="pulse"/>Open to work</div>
          <a className="nav-cta" href={RESUME} target="_blank" rel="noreferrer">Resume ↓</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-noise" />
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-inner">
          <div className="hero-label">Full-Stack Developer · AI-ML Engineer</div>
          <h1 className="hero-name">
            ASHWIN<span className="line2">MALI</span>
          </h1>
          <div className="hero-roles">
            {["Software Engineer","React Developer","Django Backend","AI/ML Engineer","Problem Solver"].map(r => (
              <span className="hero-role-tag" key={r}>{r}</span>
            ))}
          </div>
          <p className="hero-tagline">
            <strong>{DATA.tagline}</strong><br/>
            CSE undergraduate specialising in AI-ML, building production-grade systems from frontend to ML pipeline.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go("projects")}>View Projects →</button>
            <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer">Download Resume</a>
            <button className="btn-outline" onClick={() => go("contact")}>Get in Touch</button>
          </div>
          <div className="hero-socials">
            <a className="social-link" href={DATA.github} target="_blank" rel="noreferrer" title="GitHub">GH</a>
            <a className="social-link" href={DATA.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">LI</a>
            <a className="social-link" href={DATA.leetcode} target="_blank" rel="noreferrer" title="LeetCode">LC</a>
            <a className="social-link" href={`mailto:${DATA.email}`} title="Email">✉</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="s-eyebrow fade-in">About</div>
          <h2 className="s-title fade-in">Engineering at the<br/><em>intersection</em> of web & AI</h2>
          <div className="about-grid">
            <div className="about-copy fade-in fade-in-d1">
              <p>I'm <strong>Ashwin Mali</strong>, a B.Tech student specialising in <strong>Computer Science (AI-ML)</strong> at D.Y. Patil College of Engineering & Technology, Kolhapur.</p>
              <p>I blend strong algorithmic foundations with hands-on engineering — building everything from <strong>React frontends</strong> to <strong>Django APIs</strong> to <strong>RNN classifiers running in production</strong>.</p>
              <p>Ranked <strong>Top 15,000 out of 100,000+</strong> in Google Big Code 2026. Solved 250+ DSA problems. Led the Automation & Robotics Department as President. Always shipping, always learning.</p>
              <div style={{marginTop:"1.5rem",display:"flex",gap:".75rem",flexWrap:"wrap"}}>
                <a className="btn-primary" href={`mailto:${DATA.email}`} style={{fontSize:".78rem",padding:".55rem 1.2rem"}}>Email Me</a>
                <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer" style={{fontSize:".78rem",padding:".55rem 1.2rem"}}>Resume</a>
              </div>
            </div>
            <div className="edu-cards fade-in fade-in-d2">
              {DATA.education.map(e => (
                <div className="edu-card" key={e.degree}>
                  <div className="edu-card-deg">{e.degree}</div>
                  <div className="edu-card-school">{e.school}</div>
                  <div className="edu-card-meta">
                    <span className="edu-card-year">{e.year}</span>
                    <span className="edu-card-score">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="section" id="achievements">
        <div className="container">
          <div className="s-eyebrow fade-in">Achievements</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Numbers that<br/><em>speak</em></h2>
          <div className="ach-grid">
            {DATA.achievements.map((a,i) => (
              <div className={`ach-card fade-in fade-in-d${i+1}`} key={a.label}>
                <div className="ach-val"><Counter target={a.value} /></div>
                <div className="ach-label">{a.label}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section" id="stack">
        <div className="container">
          <div className="s-eyebrow fade-in">Tech Stack</div>
          <h2 className="s-title fade-in">Tools I build<br/><em>great things</em> with</h2>
          <p className="s-sub fade-in">A full-spectrum stack — from pixel-perfect UIs to production ML pipelines.</p>
          <div className="stack-grid">
            {Object.entries(DATA.stack).map(([cat, tags], i) => (
              <div className={`stack-card fade-in fade-in-d${(i%4)+1}`} key={cat}>
                <div className="stack-cat">{cat}</div>
                <div className="stack-tags">
                  {tags.map(t => <span className="stack-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="container">
          <div className="s-eyebrow fade-in">Projects</div>
          <h2 className="s-title fade-in">Selected<br/><em>work</em></h2>
          <p className="s-sub fade-in">Production-grade systems built end-to-end — from architecture to deployment.</p>
          <div className="proj-featured" style={{marginBottom:"1.25rem"}}>
            {featured.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
          <div className="proj-grid">
            {rest.map(p => <ProjectCard key={p.id} p={p} size="sm" />)}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section" id="certifications">
        <div className="container">
          <div className="s-eyebrow fade-in">Certifications</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Verified<br/><em>credentials</em></h2>
          <div className="cert-grid">
            {DATA.certs.map((c,i) => (
              <div className={`cert-card fade-in fade-in-d${i+1}`} key={c.name}>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-desc-txt">{c.desc}</div>
                </div>
                <div className="cert-right">
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-date">{c.date}</div>
                  <a className="cert-verify" href={c.verify} target="_blank" rel="noreferrer">Verify ↗</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-in">
              <div className="s-eyebrow">Contact</div>
              <div className="contact-heading">Let's build<br/>something <em>great.</em></div>
              <p className="contact-body">
                Open to SDE internships, full-stack roles, and AI/ML engineering opportunities.
                Whether you're a recruiter, a collaborator, or just want to talk tech — reach out.
              </p>
              <a className="contact-email-link" href={`mailto:${DATA.email}`}>✉ {DATA.email}</a>
              <div style={{marginTop:"1.5rem",display:"flex",gap:".75rem"}}>
                <a className="btn-primary" href={`mailto:${DATA.email}`} style={{fontSize:".78rem"}}>Send Email</a>
                <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer" style={{fontSize:".78rem"}}>Download Resume</a>
              </div>
            </div>
            <div className="contact-links fade-in fade-in-d2">
              {[
                { name:"GitHub", url:"github.com/ashwinmali7781", href: DATA.github },
                { name:"LinkedIn", url:"linkedin.com/in/ashwin-mali-697348286", href: DATA.linkedin },
                { name:"LeetCode", url:"leetcode.com/u/AshwinMali", href: DATA.leetcode },
                { name:"Portfolio", url:"my-portfolio-54ju.onrender.com", href: DATA.portfolio },
                { name:"Resume", url:"View / Download PDF", href: RESUME },
              ].map(l => (
                <a className="c-link" href={l.href} target="_blank" rel="noreferrer" key={l.name}>
                  <div className="c-link-left">
                    <div className="c-link-name">{l.name}</div>
                    <div className="c-link-url">{l.url}</div>
                  </div>
                  <div className="c-arr">↗</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="fc">© 2026 Ashwin Mali · All rights reserved.</div>
        <div className="fc" style={{textAlign:"center"}}>
          📍 {DATA.location} · {DATA.phone}
        </div>
        <div className="fc">Built with React · <a href={DATA.github}>GitHub ↗</a></div>
      </footer>
    </>
  );
}
