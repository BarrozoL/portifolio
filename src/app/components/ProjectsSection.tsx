"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------- 1. Project type & data ------------------------------------ */

interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AMB Assessoria Jurídica",
    description:
      "Website created for a law firm, with a focus on SEO and performance.",
    image: "amb-image.png",
    github: "",
    demo: "https://www.accaciobarrozo.com/",
    stack: ["JavaScript", "React", "HTML", "Tailwind CSS"],
  },
  {
    title: "WildFind",
    description:
      "A nature application where users can report plant and animal sightings through interactive regional maps that are updated in real time. Includes social features such as private chats, a social media feed, personal profiles and more.",
    image: "wildfind-image.png",
    github: "https://github.com/BarrozoL/WildFind-IH-Final-Project",
    demo: "https://wildfind-project.netlify.app",
    stack: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
  },
  {
    title: "AI Chat Agent",
    description:
      "An AI-powered chat agent that uses the OpenAI API to deliver personalized instructions per conversation. Built for mobile first, with a focus on performance and user experience.",
    image: "/ai-chat-image.png",
    github: "https://github.com/BarrozoL/ai-chat-server",
    demo: "https://ai-chat-agent.netlify.app",
    stack: ["JavaScript", "TypeScript", "MongoDB", "HTML", "Tailwind CSS"],
  },
  {
    title: "Pixelaria",
    description:
      "A turn based card game with a medieval pixel art setting. Created using DOM manipulation with vanilla JavaScript, HTML and CSS.",
    image: "pixelaria-image.jpeg",
    github: "https://smammc.github.io/defending-pixelaria/",
    demo: "https://smammc.github.io/defending-pixelaria/",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

/* ---------- 2. Project card component -------------------------------- */

function ProjectCard({
  title,
  description,
  image,
  stack,
  github,
  demo,
}: Project) {
  return (
    <article
      className="mx-auto mb-20 max-w-6xl rounded-3xl bg-slate-900/80
                        shadow-lg shadow-black/30 ring-1 ring-white/10
                        backdrop-blur-md"
    >
      <div className="flex flex-col lg:flex-row gap-10 p-10">
        {/* Screenshot */}
        <div
          className="relative shrink-0 w-full max-w-lg overflow-hidden
                        rounded-xl ring-1 ring-white/10"
        >
          <img
            src={image}
            alt={`${title} screenshot`}
            width={640}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text + links */}
        <div
          className="flex flex-col items-center lg:items-start
                        text-center lg:text-left max-w-xl mx-auto"
        >
          <h3
            className="mb-6 text-3xl font-extrabold
                         bg-clip-text text-transparent
                         bg-gradient-to-r from-yellow-300 via-rose-400 to-pink-500"
          >
            {title}
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-white/90">
            {description}
          </p>

          <div className="mb-8 flex gap-6">
            {github && (
              <Link
                href={github}
                target="_blank"
                aria-label={`${title} source code`}
                className="text-white hover:text-pink-400"
              >
                <GithubIcon className="h-6 w-6" />
              </Link>
            )}
            {demo && (
              <Link
                href={demo}
                target="_blank"
                aria-label={`${title} live demo`}
                className="hover:text-pink-400"
              >
                <ExternalIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Tech stack pills */}
      <ul className="flex flex-wrap justify-center gap-4 px-8 pb-10">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400
                       px-6 py-2 text-sm font-semibold text-slate-900"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ---------- 3. Section that maps over the array ---------------------- */

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full px-6 py-28">
      <h2
        className="mb-12 text-center text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-cyan-400 to-emerald-400"
      >
        Projects
      </h2>

      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}

/* ---------- 4. SVG icons ---------------------------- */

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.403 11.52 11.52 0 0 1 3.003.403c2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.8 5.624-5.475 5.921.43.371.823 1.104.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
  );
}

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
