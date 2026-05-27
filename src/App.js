import { useState, useEffect, useRef } from "react";
const DATA = {
  name: "Ashwin Mali",
  title: "Software Developer",
  location: "Kolhapur, Maharashtra",
  phone: "+91 7058731964",
  email: "ashwinmali72@gmail.com",

  github: "https://github.com/ashwinmali7781",
  linkedin: "https://www.linkedin.com/in/ashwin-mali-697348286/",
  leetcode: "https://leetcode.com/u/AshwinMali/",

  // Resume Link
  resume:
    "https://drive.google.com/file/d/12tsF3x4N8agrkJCEtYXvXIp83zNIugk3/view?usp=drive_link",

  bio:
    "Computer Science undergraduate specialising in AIML. I build scalable full-stack applications with React, Django, and modern backend technologies.",

  education: [
    {
      degree: "B.Tech — Computer Science (AIML)",
      school: "D.Y. Patil College of Engineering & Technology",
      year: "2024-2027",
      score: "CGPA: 7.91/10",
    },
    {
      degree: "Diploma — Automation & Robotics",
      school: "Sharad Institute of Technology, Polytechnic",
      year: "2021-2024",
      score: "80.90%",
    },
  ],

  skills: [
    { name: "JavaScript", pct: 88 },
    { name: "Python", pct: 82 },
    { name: "React.js", pct: 85 },
    { name: "Django", pct: 78 },
    { name: "Node.js & Express", pct: 72 },
    { name: "MySQL / SQL", pct: 78 },
    { name: "MongoDB", pct: 70 },
    { name: "HTML & CSS", pct: 85 },
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "PyCharm",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "REST APIs",
  ],

  projects: [
    {
      title: "GetHired — AI Interview Prep",
      category: "Full-Stack",
      year: "2026",
      desc:
        "AI-powered interview prep platform with automated code evaluation, complexity analysis, Supabase auth, and leaderboards.",

      tech: [
        "React.js",
        "Vite",
        "Supabase",
        "Tailwind CSS",
        "PostgreSQL",
      ],

      github:
        "https://github.com/ashwinmali7781/GetHired.git",

      live:
        "https://get-hired-nu.vercel.app/",
    },

    {
      title: "PropertyPro — Real Estate Platform",
      category: "Full-Stack",
      year: "2025",
      desc:
        "Full-stack platform for listing, browsing, and managing properties.",

      tech: ["React.js", "Node.js", "Express", "MongoDB"],

      github:
        "https://github.com/ashwinmali7781/PropertyPro.git",
    },
  ],
};

const css = `
body{
  margin:0;
  background:#06060a;
  color:white;
  font-family:sans-serif;
}

.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:40px;
}

.hero-content{
  max-width:700px;
}

.hero-name{
  font-size:80px;
  margin:0;
}

.hero-role{
  color:#c8f53c;
  margin-top:10px;
  letter-spacing:2px;
}

.hero-bio{
  margin-top:20px;
  line-height:1.8;
  color:#aaa;
}

.hero-buttons{
  margin-top:40px;
  display:flex;
  gap:15px;
  justify-content:center;
  flex-wrap:wrap;
}

.btn-primary{
  background:#c8f53c;
  color:black;
  padding:14px 28px;
  border:none;
  text-decoration:none;
  font-weight:bold;
  cursor:pointer;
}

.btn-secondary{
  border:1px solid #444;
  color:white;
  padding:14px 28px;
  text-decoration:none;
}

.section{
  padding:80px 40px;
}

.section-title{
  font-size:42px;
  margin-bottom:40px;
}

.skills{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}

.skill{
  background:#111;
  padding:20px;
  border:1px solid #222;
}

.projects{
  display:flex;
  flex-direction:column;
  gap:25px;
}

.project{
  background:#111;
  padding:25px;
  border:1px solid #222;
}

.project-title{
  font-size:28px;
  margin-bottom:10px;
}

.tags{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:15px;
}

.tag{
  background:#1f1f1f;
  color:#c8f53c;
  padding:6px 12px;
  font-size:12px;
}

.links{
  margin-top:20px;
  display:flex;
  gap:12px;
}

.link-btn{
  text-decoration:none;
  color:white;
  border:1px solid #333;
  padding:10px 16px;
}

.footer{
  text-align:center;
  padding:40px;
  border-top:1px solid #222;
  color:#777;
}
`;

function SkillBars() {
  return (
    <div className="skills">
      {DATA.skills.map((skill) => (
        <div className="skill" key={skill.name}>
          <h3>{skill.name}</h3>

          <div
            style={{
              background: "#222",
              height: "8px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: `${skill.pct}%`,
                background: "#c8f53c",
                height: "100%",
              }}
            />
          </div>

          <p>{skill.pct}%</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <h1 className="hero-name">
            Ashwin Mali
          </h1>

          <h3 className="hero-role">
            SOFTWARE DEVELOPER
          </h3>

          <p className="hero-bio">
            {DATA.bio}
          </p>

          {/* ✅ Resume Button Added */}
          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href={DATA.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>

            <a
              href={`mailto:${DATA.email}`}
              className="btn-secondary"
            >
              Contact Me
            </a>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="section-title">
          Skills
        </h2>

        <SkillBars />
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">

        <h2 className="section-title">
          Projects
        </h2>

        <div className="projects">

          {DATA.projects.map((project) => (
            <div className="project" key={project.title}>

              <div className="project-title">
                {project.title}
              </div>

              <p>{project.desc}</p>

              <div className="tags">
                {project.tech.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-btn"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">

        <h2 className="section-title">
          Contact
        </h2>

        <p>Email: {DATA.email}</p>
        <p>Phone: {DATA.phone}</p>

        <div className="links">

          <a
            href={DATA.github}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            GitHub
          </a>

          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            LinkedIn
          </a>

          <a
            href={DATA.leetcode}
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            LeetCode
          </a>

        </div>
      </section>

      <footer className="footer">
        © 2026 Ashwin Mali
      </footer>
    </>
  );
}