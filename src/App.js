import { useRef, useState, useEffect, useCallback } from "react";

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
  portfolio: "https://my-portfolio-54ju.onrender.com/",
  bio: "Computer Science undergraduate specialising in AI-ML. I build scalable full-stack applications with React, Django, and modern backend technologies — and train deep learning models that run in production.",
  learning: ["System Design", "TypeScript", "Next.js", "Docker", "AWS"],
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
  stack: {
    Languages:  [["Python","#3776AB"],["C++","#00599C"],["JavaScript","#F7DF1E"],["Java","#ED8B00"],["SQL","#4479A1"],["TypeScript","#3178C6"]],
    Frontend:   [["React","#61DAFB"],["Next.js","#ffffff"],["Tailwind","#06B6D4"],["Vite","#646CFF"],["HTML5","#E34F26"],["CSS3","#1572B6"]],
    Backend:    [["Django","#092E20"],["Node.js","#339933"],["Express","#ffffff"],["Flask","#ffffff"],["REST APIs","#2563EB"],["JWT","#000000"]],
    Databases:  [["PostgreSQL","#4169E1"],["MongoDB","#47A248"],["MySQL","#4479A1"],["SQLite","#003B57"],["Supabase","#3ECF8E"],["Firebase","#FFCA28"]],
    "AI / ML":  [["TensorFlow","#FF6F00"],["Keras","#D00000"],["PyTorch","#EE4C2C"],["Scikit-learn","#F7931E"],["OpenCV","#5C3EE8"],["NLP","#2563EB"]],
    Tools:      [["Git","#F05032"],["Docker","#2496ED"],["AWS","#232F3E"],["Postman","#FF6C37"],["VS Code","#007ACC"],["Linux","#FCC624"]],
  },
  tools: ["Git","GitHub","VS Code","Vite","Tailwind CSS","Supabase","REST APIs","JWT","Postman","Jupyter Notebook"],
  projects: [
    {
      id:"gethired", title:"GetHired", subtitle:"AI Interview Platform",
      category:"Full-Stack · AI", year:"2026", featured:true,
      desc:"Scalable AI-powered coding interview prep platform with automated code evaluation, algorithmic complexity analysis, leaderboards, and Supabase auth. Reduced page load by 35% and manual evaluation time by 70%.",
      problem:"Manual code review in interviews is slow and biased.",
      solution:"Built an AI evaluation engine with complexity analysis cutting manual review by 70%.",
      metrics:["+35% UI perf","-70% eval time","6-table schema","Real-time leaderboard"],
      tech:["React.js","Vite","Supabase","PostgreSQL","Tailwind CSS"],
      github:"https://github.com/ashwinmali7781/GetHired.git",
      live:"https://gethired-ashwinmali72-gmailcoms-projects.vercel.app/",
    },
    {
      id:"propertypro", title:"PropertyPro", subtitle:"Real Estate Marketplace",
      category:"Full-Stack", year:"2025", featured:true,
      desc:"Full-stack MERN platform for listing, browsing, and managing properties. JWT-based auth with RBAC cut onboarding friction by 40%. Supports image uploads, advanced filtering, and multi-user concurrency.",
      problem:"Property platforms lacked secure role-based access and concurrent user support.",
      solution:"JWT + RBAC auth flow + concurrent session management with 40% friction reduction.",
      metrics:["-40% onboarding","RBAC security","Multi-user concurrent","Mobile responsive"],
      tech:["React.js","Node.js","Express","MongoDB","REST APIs"],
      github:"https://github.com/ashwinmali7781/PropertyPro.git",
      live:null,
    },
    {
      id:"sentiment", title:"Sentiment Analyzer", subtitle:"Deep Learning NLP",
      category:"AI / ML", year:"2025", featured:false,
      desc:"RNN-based deep learning model trained on the IMDB dataset for binary sentiment classification. Full NLP pipeline — tokenization, integer encoding, sequence padding — deployed as a real-time Flask web app.",
      problem:"Real-time sentiment analysis requires a complete production ML pipeline.",
      solution:"Trained RNN on IMDB, built full NLP pipeline, deployed via Flask with sub-second inference.",
      metrics:["Sub-second inference","Full NLP pipeline","Production .h5 model"],
      tech:["Python","TensorFlow","Keras","RNN","NLP","Flask"],
      github:"https://github.com/ashwinmali7781/Movie-Sentiment-Analyzer.git",
      live:null,
    },
    {
      id:"logicart", title:"LogiCart", subtitle:"E-Commerce Platform",
      category:"Full-Stack", year:"2025", featured:false,
      desc:"Django + React e-commerce system with inventory management, custom admin dashboard (30+ products across 7 categories), AJAX coupon validation, cart and order tracking, and fault-tolerant client-side state.",
      problem:"E-commerce systems need fault-tolerant state and flexible inventory management.",
      solution:"Django REST + React with AJAX coupon validation and fault-tolerant cart/order tracking.",
      metrics:["30+ products","7 categories","AJAX coupons","Agile delivery"],
      tech:["Django","React.js","SQLite","JWT","REST APIs"],
      github:"https://github.com/ashwinmali7781/LogiCart.git",
      live:null,
    },
  ],
  achievements:[
    { num:"250+", label:"Problems Solved", sub:"LeetCode · GFG · HackerRank", icon:"💻" },
    { num:"15000", label:"Google Big Code", sub:"Top 15K / 100,000+ nationwide", icon:"🏆", prefix:"Top " },
    { num:"1", label:"Dept. President", sub:"Automation & Robotics Dept.", icon:"👑", display:"Pres." },
    { num:"2", label:"State Competition", sub:"Intelligent Combat Robot", icon:"🥈", suffix:"nd Place" },
  ],
  certs:[
    { name:"Google AI Essentials", issuer:"Google", date:"July 2025", desc:"Generative AI, prompt engineering, and responsible AI use.", verify:"https://coursera.org/verify/L1RPLKLS6JT1" },
    { name:"Python Essentials", issuer:"Cisco Networking Academy", date:"July 2025", desc:"Data types, control flow, functions, and basic OOP.", verify:"https://www.credly.com/badges/2e11521f-8efc-4fba-82fe-c1cbb37d156a" },
  ],
  profiles:[
    { name:"LeetCode", handle:"AshwinMali", stat:"250+ solved", color:"#FFA116", href:"https://leetcode.com/u/AshwinMali/", icon:"⚡" },
    { name:"GeeksforGeeks", handle:"ashwinm6dqi", stat:"Active contributor", color:"#2F8D46", href:"https://www.geeksforgeeks.org/user/ashwinm6dqi/", icon:"🌐" },
    { name:"HackerRank", handle:"ashwinmali72", stat:"Problem solver", color:"#00EA64", href:"https://www.hackerrank.com/profile/ashwinmali72", icon:"⭐" },
    { name:"Codolio", handle:"Ashwin_Mali_7", stat:"Full profile", color:"#6C63FF", href:"https://codolio.com/profile/Ashwin_Mali_7", icon:"📊" },
  ],
  commands:[
    { key:"G", label:"GitHub", action:"github" },
    { key:"L", label:"LinkedIn", action:"linkedin" },
    { key:"R", label:"Resume", action:"resume" },
    { key:"E", label:"Email", action:"email" },
    { key:"1", label:"About", action:"scroll:about" },
    { key:"2", label:"Projects", action:"scroll:projects" },
    { key:"3", label:"Skills", action:"scroll:skills" },
    { key:"4", label:"Contact", action:"scroll:contact" },
  ],
};

/* ─── CSS ─────────────────────────────────────────────────────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#030712; --surface:#111827; --card:#1F2937;
  --primary:#2563EB; --accent:#3B82F6; --hi:#60A5FA;
  --success:#10B981; --white:#FFFFFF; --txt2:#94A3B8;
  --border:rgba(255,255,255,.08);
  --display:'Space Grotesk',sans-serif;
  --body:'Inter',sans-serif;
  --mono:'JetBrains Mono',monospace;
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--white);font-family:var(--body);overflow-x:hidden;line-height:1.6;}
body.light{--bg:#f8fafc;--surface:#ffffff;--card:#f1f5f9;--white:#0f172a;--txt2:#475569;--border:rgba(0,0,0,.08);}
::selection{background:var(--primary);color:#fff;}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:var(--bg);}::-webkit-scrollbar-thumb{background:var(--primary);border-radius:2px;}

/* Cursor */
.cursor{position:fixed;width:8px;height:8px;background:var(--accent);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s;mix-blend-mode:difference;}
.cursor-ring{position:fixed;width:36px;height:36px;border:1px solid rgba(59,130,246,.5);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:left .12s ease-out,top .12s ease-out,width .25s,height .25s;}
.cursor.hover{width:20px;height:20px;}
.cursor-ring.hover{width:50px;height:50px;border-color:var(--accent);}

/* Scroll bar */
.scroll-bar{position:fixed;top:0;left:0;height:2px;background:linear-gradient(to right,var(--primary),var(--hi));z-index:1000;pointer-events:none;transition:width .05s;}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;justify-content:space-between;align-items:center;padding:1.1rem 3rem;background:rgba(3,7,18,.85);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);transition:padding .3s,background .3s;}
body.light .nav{background:rgba(248,250,252,.9);}
.nav.scrolled{padding:.75rem 3rem;}
.nav-logo{font-family:var(--display);font-size:1.1rem;font-weight:700;color:var(--white);letter-spacing:-.03em;cursor:pointer;}
.nav-logo span{color:var(--accent);}
.nav-links{display:flex;gap:2rem;list-style:none;align-items:center;}
.nav-links a{font-size:.78rem;font-weight:500;color:var(--txt2);text-decoration:none;cursor:pointer;transition:color .2s;}
.nav-links a:hover{color:var(--white);}
.nav-right{display:flex;align-items:center;gap:1rem;}
.nav-dot{display:flex;align-items:center;gap:.4rem;font-family:var(--mono);font-size:.65rem;color:var(--txt2);}
.pulse{width:6px;height:6px;border-radius:50%;background:var(--success);animation:pulse 2s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.theme-btn{width:32px;height:32px;border:1px solid var(--border);border-radius:8px;background:transparent;color:var(--txt2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;transition:all .2s;}
.theme-btn:hover{border-color:var(--accent);color:var(--accent);}
.cmd-btn{width:32px;height:32px;border:1px solid var(--border);border-radius:8px;background:transparent;color:var(--txt2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-family:var(--mono);transition:all .2s;}
.cmd-btn:hover{border-color:var(--accent);color:var(--accent);}
.nav-cta{font-family:var(--body);font-size:.75rem;font-weight:600;background:var(--primary);color:#fff;padding:.45rem 1.2rem;border:none;border-radius:6px;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;gap:.4rem;transition:background .2s,transform .15s;}
.nav-cta:hover{background:var(--accent);transform:translateY(-1px);}

/* Hero */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:8rem 3rem 5rem;position:relative;overflow:hidden;}
.hero-noise{position:absolute;inset:0;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");pointer-events:none;}
.hero-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(59,130,246,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.04) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 80% 70% at 50% 50%,black 20%,transparent 100%);pointer-events:none;}
.hero-glow{position:absolute;top:-20%;right:-10%;width:700px;height:700px;background:radial-gradient(circle,rgba(37,99,235,.1) 0%,transparent 70%);pointer-events:none;animation:glow-drift 8s ease-in-out infinite alternate;}
.hero-glow2{position:absolute;bottom:-10%;left:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(16,185,129,.06) 0%,transparent 70%);pointer-events:none;animation:glow-drift 10s ease-in-out infinite alternate-reverse;}
@keyframes glow-drift{0%{transform:translate(0,0) scale(1);}100%{transform:translate(30px,20px) scale(1.05);}}
.hero-inner{max-width:1100px;margin:0 auto;width:100%;position:relative;z-index:1;}
.hero-label{font-family:var(--mono);font-size:.7rem;color:var(--accent);letter-spacing:.15em;text-transform:uppercase;margin-bottom:1.5rem;display:flex;align-items:center;gap:.75rem;}
.hero-label::before{content:'';width:32px;height:1px;background:var(--accent);}
.hero-name{font-family:var(--display);font-size:clamp(3.5rem,11vw,9rem);font-weight:700;line-height:.88;letter-spacing:-.04em;color:var(--white);margin-bottom:1.25rem;}
.hero-name .outline{-webkit-text-stroke:1.5px rgba(255,255,255,.2);color:transparent;display:block;}
body.light .hero-name .outline{-webkit-text-stroke:1.5px rgba(0,0,0,.2);}
.hero-roles{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem;}
.hero-role-tag{font-family:var(--mono);font-size:.68rem;color:var(--txt2);background:rgba(255,255,255,.04);border:1px solid var(--border);padding:.28rem .85rem;border-radius:100px;transition:all .2s;}
.hero-role-tag:hover{border-color:var(--accent);color:var(--hi);}
.hero-tagline{font-family:var(--display);font-size:clamp(1rem,2.5vw,1.35rem);font-weight:400;color:var(--txt2);max-width:520px;margin-bottom:2.5rem;line-height:1.55;letter-spacing:-.01em;}
.hero-tagline strong{color:var(--white);}
.hero-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2.5rem;}
.btn-primary{font-family:var(--body);font-size:.82rem;font-weight:600;background:var(--primary);color:#fff;padding:.7rem 1.6rem;border:none;border-radius:8px;cursor:pointer;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;}
.btn-primary:hover{background:var(--accent);transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,99,235,.3);}
.btn-outline{font-family:var(--body);font-size:.82rem;font-weight:500;background:transparent;color:var(--txt2);padding:.7rem 1.6rem;border:1px solid var(--border);border-radius:8px;cursor:pointer;transition:all .2s;text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;}
.btn-outline:hover{border-color:rgba(255,255,255,.25);color:var(--white);transform:translateY(-2px);}
.hero-socials{display:flex;gap:.75rem;}
.social-link{width:36px;height:36px;border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--txt2);text-decoration:none;font-size:.75rem;font-family:var(--mono);font-weight:600;transition:all .2s;}
.social-link:hover{border-color:var(--accent);color:var(--accent);background:rgba(59,130,246,.08);transform:translateY(-2px);}
.hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.4rem;opacity:.35;}
.hero-scroll span{font-family:var(--mono);font-size:.55rem;letter-spacing:.15em;color:var(--txt2);text-transform:uppercase;}
.scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,transparent,var(--txt2));animation:scrollpulse 2s ease-in-out infinite;}
@keyframes scrollpulse{0%,100%{opacity:.3}50%{opacity:1}}

/* Marquee */
.marquee-wrap{border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;padding:.6rem 0;background:rgba(255,255,255,.01);}
.marquee-track{display:flex;gap:3rem;animation:marquee 25s linear infinite;white-space:nowrap;}
.marquee-wrap:hover .marquee-track{animation-play-state:paused;}
@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.marquee-item{font-family:var(--mono);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:var(--txt2);display:flex;align-items:center;gap:.75rem;}
.marquee-dot{width:3px;height:3px;border-radius:50%;background:var(--accent);}

/* Sections */
.section{padding:7rem 3rem;border-top:1px solid var(--border);}
.container{max-width:1100px;margin:0 auto;}
.s-eyebrow{font-family:var(--mono);font-size:.65rem;letter-spacing:.2em;color:var(--accent);text-transform:uppercase;margin-bottom:.75rem;}
.s-title{font-family:var(--display);font-size:clamp(2rem,5vw,3.2rem);font-weight:700;letter-spacing:-.03em;color:var(--white);margin-bottom:1rem;line-height:1.05;}
.s-title em{font-style:normal;color:var(--hi);}
.s-sub{font-size:.95rem;color:var(--txt2);max-width:480px;line-height:1.7;margin-bottom:3rem;}

/* About */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;}
.about-copy p{font-size:.9rem;line-height:1.85;color:var(--txt2);margin-bottom:1.1rem;}
.about-copy strong{color:var(--white);font-weight:600;}
.edu-cards{display:flex;flex-direction:column;gap:.75rem;}
.edu-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.25rem 1.5rem;transition:all .2s;}
.edu-card:hover{border-color:rgba(59,130,246,.3);transform:translateX(4px);}
.edu-card-deg{font-family:var(--display);font-size:.88rem;font-weight:600;color:var(--white);margin-bottom:.3rem;}
.edu-card-school{font-size:.78rem;color:var(--txt2);margin-bottom:.5rem;}
.edu-card-meta{display:flex;justify-content:space-between;}
.edu-card-year{font-family:var(--mono);font-size:.65rem;color:rgba(148,163,184,.5);}
.edu-card-score{font-family:var(--mono);font-size:.65rem;color:var(--accent);font-weight:500;}
.learning-wrap{margin-top:1.25rem;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.25rem 1.5rem;}
.learning-label{font-family:var(--mono);font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:.75rem;}
.learning-tags{display:flex;flex-wrap:wrap;gap:.4rem;}
.learning-tag{font-family:var(--mono);font-size:.65rem;color:var(--hi);background:rgba(96,165,250,.08);border:1px solid rgba(96,165,250,.2);padding:.22rem .65rem;border-radius:4px;}

/* Achievements */
.ach-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);border-radius:12px;overflow:hidden;margin-bottom:3rem;}
.ach-card{background:var(--surface);padding:2rem 1.5rem;text-align:center;transition:background .2s;position:relative;overflow:hidden;}
.ach-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,var(--primary),transparent);opacity:0;transition:opacity .3s;}
.ach-card:hover::before{opacity:1;}
.ach-card:hover{background:var(--card);}
.ach-icon{font-size:1.5rem;margin-bottom:.5rem;}
.ach-val{font-family:var(--display);font-size:2rem;font-weight:700;color:var(--white);letter-spacing:-.03em;line-height:1;margin-bottom:.4rem;}
.ach-label{font-size:.78rem;font-weight:600;color:var(--txt2);margin-bottom:.2rem;}
.ach-sub{font-family:var(--mono);font-size:.58rem;color:rgba(148,163,184,.4);}

/* Skills */
.skills-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden;}
.sk{padding:1.3rem 1.75rem;background:var(--surface);display:grid;grid-template-columns:1fr auto;align-items:center;gap:1.5rem;transition:background .2s;}
.sk:hover{background:var(--card);}
.sk-left{display:flex;flex-direction:column;gap:.6rem;}
.sk-name{font-size:.78rem;font-weight:600;color:var(--white);}
.sk-track{height:2px;background:rgba(255,255,255,.07);border-radius:2px;position:relative;}
.sk-fill{position:absolute;top:0;left:0;height:2px;border-radius:2px;background:linear-gradient(to right,var(--primary),var(--hi));transition:width 1.4s cubic-bezier(.16,1,.3,1);}
.sk-pct{font-family:var(--mono);font-size:.6rem;color:var(--txt2);min-width:2.5rem;text-align:right;}

/* Tech stack */
.stack-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-bottom:2rem;}
.stack-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.5rem;transition:all .2s;}
.stack-card:hover{border-color:rgba(59,130,246,.25);transform:translateY(-2px);}
.stack-cat{font-family:var(--mono);font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;}
.stack-tags{display:flex;flex-wrap:wrap;gap:.4rem;}
.stack-tag{font-family:var(--mono);font-size:.68rem;color:var(--txt2);background:rgba(255,255,255,.03);border:1px solid var(--border);padding:.22rem .6rem;border-radius:4px;transition:all .15s;display:flex;align-items:center;gap:.35rem;}
.stack-tag:hover{color:var(--hi);border-color:rgba(96,165,250,.3);background:rgba(96,165,250,.06);}
.stack-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;}
.tools-wrap{margin-top:2rem;}
.tools-label{font-family:var(--mono);font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:1rem;}
.tools-row{display:flex;flex-wrap:wrap;gap:.5rem;}
.tool-tag{font-family:var(--mono);font-size:.62rem;color:var(--txt2);background:rgba(255,255,255,.03);border:1px solid var(--border);padding:.25rem .7rem;border-radius:4px;transition:all .15s;cursor:default;}
.tool-tag:hover{color:var(--hi);border-color:rgba(96,165,250,.3);}

/* Projects bento */
.bento{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
.proj-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:1.75rem;transition:all .25s;cursor:pointer;position:relative;overflow:hidden;}
.proj-card::after{content:'';position:absolute;inset:0;border-radius:16px;background:linear-gradient(135deg,rgba(37,99,235,.06) 0%,transparent 60%);opacity:0;transition:opacity .3s;pointer-events:none;}
.proj-card:hover::after{opacity:1;}
.proj-card:hover{border-color:rgba(59,130,246,.3);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,.25);}
.proj-card.featured{background:linear-gradient(135deg,rgba(37,99,235,.07) 0%,var(--surface) 100%);}
.proj-card.expanded{border-color:rgba(59,130,246,.4);}
.proj-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;}
.proj-year{font-family:var(--mono);font-size:.62rem;color:var(--txt2);background:rgba(255,255,255,.05);padding:.2rem .6rem;border-radius:4px;}
.proj-links{display:flex;gap:.5rem;}
.proj-link{width:28px;height:28px;border:1px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--txt2);text-decoration:none;font-size:.7rem;transition:all .2s;}
.proj-link:hover{border-color:var(--accent);color:var(--accent);}
.proj-cat{font-family:var(--mono);font-size:.58rem;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:.4rem;}
.proj-title{font-family:var(--display);font-size:1.25rem;font-weight:700;color:var(--white);letter-spacing:-.02em;margin-bottom:.25rem;}
.proj-subtitle{font-family:var(--mono);font-size:.68rem;color:var(--txt2);margin-bottom:.85rem;}
.proj-desc{font-size:.8rem;line-height:1.75;color:var(--txt2);margin-bottom:1rem;}
.proj-expand{overflow:hidden;max-height:0;transition:max-height .4s ease;}
.proj-card.expanded .proj-expand{max-height:300px;}
.proj-case{background:rgba(255,255,255,.03);border-radius:8px;padding:1rem;margin-bottom:.75rem;border:1px solid var(--border);}
.proj-case-row{display:grid;grid-template-columns:70px 1fr;gap:.5rem;margin-bottom:.5rem;}
.proj-case-row:last-child{margin-bottom:0;}
.proj-case-label{font-family:var(--mono);font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);padding-top:.05rem;}
.proj-case-val{font-size:.75rem;color:var(--txt2);line-height:1.6;}
.proj-metrics{display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:1rem;}
.proj-metric{font-family:var(--mono);font-size:.6rem;color:var(--success);background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);padding:.15rem .5rem;border-radius:100px;}
.proj-tech{display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.75rem;}
.proj-tech-tag{font-family:var(--mono);font-size:.58rem;color:rgba(148,163,184,.6);background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);padding:.12rem .45rem;border-radius:3px;}
.expand-btn{font-family:var(--mono);font-size:.6rem;color:var(--accent);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:.3rem;padding:0;transition:opacity .2s;}
.expand-btn:hover{opacity:.7;}

/* Coding profiles */
.profiles-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;}
.profile-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.25rem;text-decoration:none;transition:all .2s;display:flex;flex-direction:column;gap:.5rem;}
.profile-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.2);}
.profile-icon{font-size:1.5rem;margin-bottom:.25rem;}
.profile-name{font-family:var(--display);font-size:.9rem;font-weight:600;color:var(--white);}
.profile-handle{font-family:var(--mono);font-size:.62rem;color:var(--txt2);}
.profile-stat{font-family:var(--mono);font-size:.65rem;font-weight:500;margin-top:.25rem;}

/* GitHub stats */
.github-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.25rem;}
.github-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;}
.github-card img{width:100%;display:block;}

/* Certs */
.cert-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
.cert-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.5rem;display:flex;justify-content:space-between;align-items:flex-start;gap:1.5rem;transition:all .2s;}
.cert-card:hover{border-color:rgba(59,130,246,.25);transform:translateY(-2px);}
.cert-name{font-family:var(--display);font-size:.95rem;font-weight:600;color:var(--white);margin-bottom:.3rem;}
.cert-desc-txt{font-size:.78rem;color:var(--txt2);line-height:1.6;}
.cert-right{text-align:right;flex-shrink:0;}
.cert-issuer{font-family:var(--mono);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin-bottom:.2rem;}
.cert-date{font-family:var(--mono);font-size:.6rem;color:rgba(148,163,184,.4);margin-bottom:.6rem;}
.cert-verify-btn{font-family:var(--mono);font-size:.6rem;color:var(--hi);text-decoration:none;border:1px solid rgba(96,165,250,.25);padding:.2rem .55rem;border-radius:4px;transition:all .2s;}
.cert-verify-btn:hover{background:rgba(96,165,250,.08);border-color:var(--hi);}

/* Contact */
.contact-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:5rem;align-items:start;}
.contact-heading{font-family:var(--display);font-size:clamp(2rem,4vw,3rem);font-weight:700;letter-spacing:-.04em;color:var(--white);line-height:1.05;margin-bottom:1.25rem;}
.contact-heading em{font-style:normal;color:var(--hi);}
.contact-body{font-size:.88rem;color:var(--txt2);line-height:1.75;margin-bottom:2rem;}
.contact-email-link{font-family:var(--mono);font-size:.82rem;color:var(--accent);text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;border-bottom:1px solid rgba(59,130,246,.3);padding-bottom:.3rem;transition:all .2s;margin-bottom:1.5rem;}
.contact-email-link:hover{color:var(--hi);border-color:var(--hi);}
.c-links{display:flex;flex-direction:column;gap:1px;background:var(--border);border-radius:12px;overflow:hidden;}
.c-link{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 1.5rem;text-decoration:none;color:var(--txt2);background:var(--surface);transition:all .2s;}
.c-link:first-child{border-radius:12px 12px 0 0;}
.c-link:last-child{border-radius:0 0 12px 12px;}
.c-link:hover{background:var(--card);color:var(--white);padding-left:2rem;}
.c-link-left{display:flex;flex-direction:column;gap:.2rem;}
.c-link-name{font-weight:600;font-size:.85rem;}
.c-link-url{font-family:var(--mono);font-size:.58rem;color:rgba(148,163,184,.4);transition:color .2s;}
.c-link:hover .c-link-url{color:var(--accent);}
.c-arr{font-size:.8rem;transition:transform .2s;}
.c-link:hover .c-arr{transform:translate(3px,-3px);color:var(--accent);}

/* Command palette */
.cmd-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:1000;display:flex;align-items:flex-start;justify-content:center;padding-top:15vh;backdrop-filter:blur(8px);animation:fade-in .15s ease;}
.cmd-box{background:var(--surface);border:1px solid rgba(255,255,255,.12);border-radius:16px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,.5);}
.cmd-header{display:flex;align-items:center;gap:.75rem;padding:1rem 1.25rem;border-bottom:1px solid var(--border);}
.cmd-search-icon{color:var(--txt2);font-size:.9rem;}
.cmd-input{flex:1;background:none;border:none;outline:none;font-family:var(--body);font-size:.95rem;color:var(--white);caret-color:var(--accent);}
.cmd-esc{font-family:var(--mono);font-size:.6rem;color:var(--txt2);background:rgba(255,255,255,.06);padding:.15rem .45rem;border-radius:4px;border:1px solid var(--border);}
.cmd-list{max-height:320px;overflow-y:auto;padding:.5rem;}
.cmd-section-label{font-family:var(--mono);font-size:.55rem;letter-spacing:.15em;text-transform:uppercase;color:var(--txt2);padding:.5rem .75rem .3rem;}
.cmd-item{display:flex;align-items:center;gap:.75rem;padding:.7rem .75rem;border-radius:8px;cursor:pointer;transition:background .15s;}
.cmd-item:hover,.cmd-item.active{background:rgba(59,130,246,.12);}
.cmd-item-icon{width:28px;height:28px;border:1px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--txt2);}
.cmd-item-label{font-size:.85rem;color:var(--white);flex:1;}
.cmd-item-key{font-family:var(--mono);font-size:.6rem;color:var(--txt2);background:rgba(255,255,255,.06);padding:.12rem .4rem;border-radius:4px;border:1px solid var(--border);}
.cmd-footer{padding:.6rem 1.25rem;border-top:1px solid var(--border);display:flex;gap:1rem;}
.cmd-hint{font-family:var(--mono);font-size:.58rem;color:rgba(148,163,184,.4);display:flex;align-items:center;gap:.3rem;}

/* Keyboard hints */
.kbd-hint{position:fixed;bottom:1.5rem;right:1.5rem;z-index:200;}
.kbd-btn{font-family:var(--mono);font-size:.6rem;color:var(--txt2);background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:.3rem .65rem;cursor:pointer;display:flex;align-items:center;gap:.35rem;transition:all .2s;}
.kbd-btn:hover{border-color:var(--accent);color:var(--accent);}

/* Scroll-to-top */
.scroll-top{position:fixed;bottom:1.5rem;left:1.5rem;z-index:200;width:36px;height:36px;background:var(--primary);border:none;border-radius:8px;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;transition:all .2s;opacity:0;pointer-events:none;}
.scroll-top.show{opacity:1;pointer-events:all;}
.scroll-top:hover{background:var(--accent);transform:translateY(-2px);}

/* Footer */
footer{padding:2rem 3rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);}
.fc{font-family:var(--mono);font-size:.62rem;color:rgba(255,255,255,.2);letter-spacing:.05em;}
.fc a{color:var(--accent);text-decoration:none;}

/* Fade-in */
.fade-in{opacity:0;transform:translateY(20px);transition:opacity .65s ease,transform .65s ease;}
.fade-in.visible{opacity:1;transform:none;}
.fd1{transition-delay:.08s;}.fd2{transition-delay:.16s;}.fd3{transition-delay:.24s;}.fd4{transition-delay:.32s;}

@keyframes fade-in{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:none;}}

/* Responsive */
@media(max-width:900px){
  .nav{padding:1rem 1.5rem;}.nav-links,.nav-dot{display:none;}
  .hero{padding:7rem 1.5rem 4rem;}
  .section{padding:5rem 1.5rem;}
  .about-grid,.contact-grid{grid-template-columns:1fr;gap:2.5rem;}
  .ach-grid{grid-template-columns:1fr 1fr;}
  .stack-grid{grid-template-columns:1fr 1fr;}
  .bento{grid-template-columns:1fr;}
  .profiles-grid{grid-template-columns:1fr 1fr;}
  .github-grid{grid-template-columns:1fr;}
  .cert-grid{grid-template-columns:1fr;}
  footer{flex-direction:column;gap:.5rem;text-align:center;}
}
@media(max-width:480px){
  .ach-grid,.skills-grid,.stack-grid,.profiles-grid{grid-template-columns:1fr;}
  .hero-name{font-size:clamp(3rem,15vw,4.5rem);}
}
`;

/* ─── Hooks ─────────────────────────────────────────────────────────── */
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
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

function useTheme() {
  const [dark, setDark] = useState(true);
  const toggle = useCallback(() => {
    setDark(d => {
      document.body.classList.toggle("light", d);
      return !d;
    });
  }, []);
  return { dark, toggle };
}

function useShowScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return show;
}

/* ─── Counter ────────────────────────────────────────────────────────── */
function Counter({ target, display, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  const num = parseInt(String(target).replace(/\D/g, ""));
  const hasPlus = String(target).includes("+");

  useEffect(() => {
    if (display) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1600;
        const start = performance.now();
        const step = now => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * num));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [num, display]);

  if (display) return <span ref={ref}>{display}</span>;
  return <span ref={ref}>{prefix}{count}{hasPlus ? "+" : ""}{suffix}</span>;
}

/* ─── SkillBars ──────────────────────────────────────────────────────── */
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
    </div>
  );
}

/* ─── ProjectCard ────────────────────────────────────────────────────── */
function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`proj-card fade-in ${p.featured ? "featured" : ""} ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(x => !x)}>
      <div className="proj-head">
        <span className="proj-year">{p.year}</span>
        <div className="proj-links" onClick={e => e.stopPropagation()}>
          <a className="proj-link" href={p.github} target="_blank" rel="noreferrer" title="GitHub">GH</a>
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
      <div className="proj-expand">
        <div className="proj-case">
          <div className="proj-case-row">
            <span className="proj-case-label">Problem</span>
            <span className="proj-case-val">{p.problem}</span>
          </div>
          <div className="proj-case-row">
            <span className="proj-case-label">Solution</span>
            <span className="proj-case-val">{p.solution}</span>
          </div>
        </div>
        <div className="proj-tech">
          {p.tech.map(t => <span className="proj-tech-tag" key={t}>{t}</span>)}
        </div>
      </div>
      <button className="expand-btn">
        {expanded ? "▲ Collapse" : "▼ Case Study"}
      </button>
    </div>
  );
}

/* ─── CommandPalette ─────────────────────────────────────────────────── */
function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const filtered = DATA.commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (open) { setTimeout(() => inputRef.current?.focus(), 50); setQuery(""); setActive(0); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const fn = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") setActive(a => Math.min(a + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setActive(a => Math.max(a - 1, 0));
      if (e.key === "Enter") { runCommand(filtered[active]); onClose(); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, filtered, active]);

  const runCommand = cmd => {
    if (!cmd) return;
    if (cmd.action === "github") window.open(DATA.github, "_blank");
    else if (cmd.action === "linkedin") window.open(DATA.linkedin, "_blank");
    else if (cmd.action === "resume") window.open(RESUME, "_blank");
    else if (cmd.action === "email") window.location.href = `mailto:${DATA.email}`;
    else if (cmd.action.startsWith("scroll:")) go(cmd.action.split(":")[1]);
  };

  if (!open) return null;
  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-box" onClick={e => e.stopPropagation()}>
        <div className="cmd-header">
          <span className="cmd-search-icon">⌘</span>
          <input className="cmd-input" ref={inputRef} placeholder="Type a command or search..."
            value={query} onChange={e => { setQuery(e.target.value); setActive(0); }} />
          <span className="cmd-esc">ESC</span>
        </div>
        <div className="cmd-list">
          <div className="cmd-section-label">Quick Actions</div>
          {filtered.map((cmd, i) => (
            <div key={cmd.key} className={`cmd-item ${i === active ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => { runCommand(cmd); onClose(); }}>
              <div className="cmd-item-icon">{cmd.key}</div>
              <span className="cmd-item-label">{cmd.label}</span>
              <span className="cmd-item-key">↵</span>
            </div>
          ))}
        </div>
        <div className="cmd-footer">
          <span className="cmd-hint">↑↓ navigate</span>
          <span className="cmd-hint">↵ select</span>
          <span className="cmd-hint">ESC close</span>
        </div>
      </div>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────────────── */
export default function App() {
  const scrollPct = useScrollProgress();
  const { dark, toggle: toggleTheme } = useTheme();
  const showTop = useShowScrollTop();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  // Cursor
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  useEffect(() => {
    const move = e => {
      if (cursorDot.current) { cursorDot.current.style.left = e.clientX + "px"; cursorDot.current.style.top = e.clientY + "px"; }
      if (cursorRing.current) { cursorRing.current.style.left = e.clientX + "px"; cursorRing.current.style.top = e.clientY + "px"; }
    };
    const hover = () => { cursorDot.current?.classList.add("hover"); cursorRing.current?.classList.add("hover"); };
    const unhover = () => { cursorDot.current?.classList.remove("hover"); cursorRing.current?.classList.remove("hover"); };
    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button").forEach(el => { el.addEventListener("mouseenter", hover); el.addEventListener("mouseleave", unhover); });
    return () => { document.removeEventListener("mousemove", move); };
  }, []);

  // Nav scroll
  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const fn = e => {
      if (e.target.tagName === "INPUT") return;
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setCmdOpen(o => !o); }
      if (e.key === "g" || e.key === "G") window.open(DATA.github, "_blank");
      if (e.key === "r" || e.key === "R") window.open(RESUME, "_blank");
      if (e.key === "e" || e.key === "E") window.location.href = `mailto:${DATA.email}`;
      if (e.key === "l" || e.key === "L") window.open(DATA.linkedin, "_blank");
      if (e.key === "1") go("about");
      if (e.key === "2") go("projects");
      if (e.key === "3") go("skills");
      if (e.key === "4") go("contact");
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  useFadeIn();

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const marqueeItems = ["React", "Django", "Node.js", "TensorFlow", "PostgreSQL", "Python", "Flask", "MongoDB", "Supabase", "AWS", "Docker", "Next.js", "TypeScript", "Keras", "NLP"];

  return (
    <>
      <style>{css}</style>

      {/* Cursor */}
      <div className="cursor" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />

      {/* Scroll progress */}
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />

      {/* Command palette */}
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      {/* Scroll to top */}
      <button className={`scroll-top ${showTop ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>

      {/* Keyboard hint */}
      <div className="kbd-hint">
        <button className="kbd-btn" onClick={() => setCmdOpen(true)}>⌘K <span style={{opacity:.5}}>commands</span></button>
      </div>

      {/* ── NAV ── */}
      <nav className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => go("hero")}>ashwin<span>.</span></div>
        <ul className="nav-links">
          {["About","Skills","Projects","Achievements","Contact"].map(s => (
            <li key={s}><a onClick={() => go(s.toLowerCase())}>{s}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="nav-dot"><div className="pulse" />Open to work</div>
          <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">{dark ? "☀" : "◐"}</button>
          <button className="cmd-btn" onClick={() => setCmdOpen(true)} title="Command palette (⌘K)">⌘K</button>
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
          <div className="hero-label fade-in">CSE Undergrad · AI-ML · Full-Stack</div>
          <h1 className="hero-name fade-in fd1">
            ASHWIN<span className="outline">MALI</span>
          </h1>
          <div className="hero-roles fade-in fd2">
            {["Software Engineer","React Developer","Django Backend","AI/ML Engineer","Problem Solver","Open Source"].map(r => (
              <span className="hero-role-tag" key={r}>{r}</span>
            ))}
          </div>
          <p className="hero-tagline fade-in fd2">
            <strong>I build scalable software powered by AI.</strong><br/>
            CS undergraduate shipping production-grade systems — from pixel-perfect UIs to deep learning pipelines.
          </p>
          <div className="hero-actions fade-in fd3">
            <button className="btn-primary" onClick={() => go("projects")}>View Projects →</button>
            <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer">Download Resume</a>
            <button className="btn-outline" onClick={() => go("contact")}>Get in Touch</button>
          </div>
          <div className="hero-socials fade-in fd4">
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

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span className="marquee-item" key={i}>
              {t}<span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="s-eyebrow fade-in">About</div>
          <h2 className="s-title fade-in">Engineering at the<br/><em>intersection</em> of web & AI</h2>
          <div className="about-grid">
            <div className="about-copy fade-in fd1">
              <p>I'm <strong>Ashwin Mali</strong>, a B.Tech student specialising in <strong>Computer Science (AI-ML)</strong> at D.Y. Patil College of Engineering & Technology, Kolhapur.</p>
              <p>I blend strong algorithmic foundations with hands-on engineering — building <strong>React frontends</strong>, <strong>Django APIs</strong>, and <strong>RNN classifiers deployed in production</strong>.</p>
              <p>Ranked <strong>Top 15,000 / 100,000+</strong> in Google Big Code 2026. Solved 250+ DSA problems. Led the Automation & Robotics Department as President.</p>
              <div style={{marginTop:"1.5rem",display:"flex",gap:".75rem",flexWrap:"wrap"}}>
                <a className="btn-primary" href={`mailto:${DATA.email}`} style={{fontSize:".78rem",padding:".55rem 1.2rem"}}>Email Me</a>
                <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer" style={{fontSize:".78rem",padding:".55rem 1.2rem"}}>Resume</a>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:".75rem"}}>
              <div className="edu-cards fade-in fd2">
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
              <div className="learning-wrap fade-in fd3">
                <div className="learning-label">Currently Learning</div>
                <div className="learning-tags">
                  {DATA.learning.map(t => <span className="learning-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="section" id="achievements">
        <div className="container">
          <div className="s-eyebrow fade-in">Achievements</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Numbers that <em>speak</em></h2>
          <div className="ach-grid">
            {DATA.achievements.map((a, i) => (
              <div className={`ach-card fade-in fd${i+1}`} key={a.label}>
                <div className="ach-icon">{a.icon}</div>
                <div className="ach-val">
                  <Counter target={a.num} display={a.display} prefix={a.prefix} suffix={a.suffix} />
                </div>
                <div className="ach-label">{a.label}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="container">
          <div className="s-eyebrow fade-in">Skills</div>
          <h2 className="s-title fade-in">Technical <em>Proficiency</em></h2>
          <p className="s-sub fade-in">Skill levels based on real project delivery and problem-solving.</p>
          <div className="fade-in fd1"><SkillBars /></div>
          <div className="s-eyebrow fade-in" style={{marginTop:"3rem"}}>Stack</div>
          <h3 className="s-title fade-in" style={{fontSize:"clamp(1.5rem,3vw,2.2rem)",marginBottom:"2rem"}}>Tools I <em>build</em> with</h3>
          <div className="stack-grid">
            {Object.entries(DATA.stack).map(([cat, tags], i) => (
              <div className={`stack-card fade-in fd${(i%4)+1}`} key={cat}>
                <div className="stack-cat">{cat}</div>
                <div className="stack-tags">
                  {tags.map(([name, color]) => (
                    <span className="stack-tag" key={name}>
                      <span className="stack-dot" style={{background:color}} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="tools-wrap fade-in">
            <div className="tools-label">Tools & Platforms</div>
            <div className="tools-row">
              {DATA.tools.map(t => <span className="tool-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="container">
          <div className="s-eyebrow fade-in">Projects</div>
          <h2 className="s-title fade-in">Selected <em>Work</em></h2>
          <p className="s-sub fade-in">Click any project to expand the case study — problem, solution, and impact.</p>
          <div className="bento">
            {DATA.projects.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── GITHUB STATS ── */}
      <section className="section" id="github">
        <div className="container">
          <div className="s-eyebrow fade-in">GitHub</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Activity & <em>Stats</em></h2>
          <div className="github-grid fade-in">
            <div className="github-card">
              <img src="https://github-readme-stats.vercel.app/api?username=ashwinmali7781&show_icons=true&theme=github_dark&hide_border=true&count_private=true&title_color=60A5FA&icon_color=3B82F6&text_color=94A3B8&bg_color=111827" alt="GitHub Stats" loading="lazy" />
            </div>
            <div className="github-card">
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=ashwinmali7781&theme=github-dark-blue&hide_border=true&background=111827&ring=2563EB&fire=3B82F6&currStreakLabel=60A5FA&sideLabels=94A3B8" alt="GitHub Streak" loading="lazy" />
            </div>
          </div>
          <div className="github-grid fade-in fd1">
            <div className="github-card">
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ashwinmali7781&layout=compact&theme=github_dark&hide_border=true&bg_color=111827&title_color=60A5FA&text_color=94A3B8&langs_count=8" alt="Top Languages" loading="lazy" />
            </div>
            <div className="github-card" style={{padding:"1rem"}}>
              <img src="https://github-readme-activity-graph.vercel.app/graph?username=ashwinmali7781&bg_color=111827&color=60A5FA&line=2563EB&point=3B82F6&hide_border=true&area=true" alt="Activity Graph" loading="lazy" style={{width:"100%",borderRadius:"8px"}} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CODING PROFILES ── */}
      <section className="section" id="coding">
        <div className="container">
          <div className="s-eyebrow fade-in">Coding Profiles</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Where I <em>practice</em></h2>
          <div className="profiles-grid">
            {DATA.profiles.map((p, i) => (
              <a key={p.name} className={`profile-card fade-in fd${i+1}`} href={p.href} target="_blank" rel="noreferrer"
                style={{borderColor: `${p.color}22`, "--hover-color": p.color}}
                onMouseEnter={e => e.currentTarget.style.borderColor = p.color + "66"}
                onMouseLeave={e => e.currentTarget.style.borderColor = p.color + "22"}>
                <div className="profile-icon">{p.icon}</div>
                <div className="profile-name">{p.name}</div>
                <div className="profile-handle">@{p.handle}</div>
                <div className="profile-stat" style={{color: p.color}}>{p.stat}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section" id="certifications">
        <div className="container">
          <div className="s-eyebrow fade-in">Certifications</div>
          <h2 className="s-title fade-in" style={{marginBottom:"2.5rem"}}>Verified <em>credentials</em></h2>
          <div className="cert-grid">
            {DATA.certs.map((c, i) => (
              <div className={`cert-card fade-in fd${i+1}`} key={c.name}>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-desc-txt">{c.desc}</div>
                </div>
                <div className="cert-right">
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-date">{c.date}</div>
                  <a className="cert-verify-btn" href={c.verify} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>Verify ↗</a>
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
                Whether you're a recruiter at Google, Microsoft, Amazon, or a startup — reach out.
              </p>
              <a className="contact-email-link" href={`mailto:${DATA.email}`}>✉ {DATA.email}</a>
              <div style={{marginTop:"1.5rem",display:"flex",gap:".75rem",flexWrap:"wrap"}}>
                <a className="btn-primary" href={`mailto:${DATA.email}`} style={{fontSize:".78rem"}}>Send Email</a>
                <a className="btn-outline" href={RESUME} target="_blank" rel="noreferrer" style={{fontSize:".78rem"}}>Download Resume</a>
              </div>
            </div>
            <div className="c-links fade-in fd2">
              {[
                { name:"GitHub", url:"github.com/ashwinmali7781", href:DATA.github },
                { name:"LinkedIn", url:"linkedin.com/in/ashwin-mali-697348286", href:DATA.linkedin },
                { name:"LeetCode", url:"leetcode.com/u/AshwinMali", href:DATA.leetcode },
                { name:"Portfolio", url:"my-portfolio-54ju.onrender.com", href:DATA.portfolio },
                { name:"Resume", url:"View / Download PDF", href:RESUME },
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
          Press <span style={{color:"var(--accent)"}}>⌘K</span> for commands · <span style={{color:"var(--accent)"}}>G</span> GitHub · <span style={{color:"var(--accent)"}}>R</span> Resume
        </div>
        <div className="fc">Built with React · <a href={DATA.github} target="_blank" rel="noreferrer">View Source ↗</a></div>
      </footer>
    </>
  );
}
