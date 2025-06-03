"use client";
import Navbar from "./components/Navbar";
import foto from "./images/eu-foto-2.jpg";
import ProjectsSection from "./components/ProjectsSection";
import TechStacks from "./components/TechStacks";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="h-full pb-80 w-full bg-gradient-to-br
              from-indigo-950 via-indigo-700 to-sky-500"
      >
        <div
          className="relative h-screen w-full 
              flex flex-col sm:flex-row items-center justify-center
              text-white gap-20"
        >
          <div className="absolute inset-0 z-0" aria-hidden="true" />

          <div className="relative z-10 flex flex-col text-center sm:text-center">
            <h1 className="text-4xl mb-3 text-center sm:text-5xl font-semibold">
              Hi! I'm
            </h1>

            <h2
              className="text-5xl mb-3 sm:text-6xl font-extrabold
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-yellow-300 via-rose-400 to-pink-500"
            >
              Lucas Barrozo
            </h2>
            <h3 className="text-2xl text-center sm:text-3xl mt-2 font-medium tracking-wide">
              Full-Stack Developer
            </h3>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="https://github.com/BarrozoL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>GitHub</title>
                  <path d="M12 0C5.37 0 0 5.4 0 12.1c0 5.35 3.438 9.88 8.205 11.49.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.738-4.042-1.65-4.042-1.65-.546-1.396-1.333-1.77-1.333-1.77-1.09-.75.082-.736.082-.736 1.205.086 1.84 1.26 1.84 1.26 1.07 1.86 2.807 1.32 3.492 1.01.108-.783.418-1.32.762-1.625-2.665-.31-5.466-1.376-5.466-6.13 0-1.36.465-2.47 1.235-3.35-.124-.31-.536-1.556.116-3.24 0 0 1.008-.33 3.3 1.27.957-.27 1.983-.402 3.003-.407 1.02.005 2.047.137 3.006.407 2.29-1.6 3.297-1.27 3.297-1.27.653 1.684.242 2.93.118 3.24.77.88 1.233 1.99 1.233 3.35 0 4.77-2.803 5.817-5.476 6.12.43.37.814 1.096.814 2.21 0 1.595-.014 2.882-.014 3.277 0 .32.217.694.824.576C20.565 21.978 24 17.448 24 12.097 24 5.4 18.627 0 12 0z" />
                </svg>
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/lucas-barrozo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>LinkedIn</title>
                  <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.551V9h3.568v11.452zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.447 20.452h-3.554V14.8c0-1.345-.025-3.077-1.874-3.077-1.874 0-2.161 1.46-2.161 2.968v5.761h-3.55V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.605 0 4.269 2.372 4.269 5.457v6.282z" />
                </svg>
                Linkedin
              </a>

              <a
                href="mailto:barrozo.lucasp@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>Email</title>
                  <path d="M1.5 4.5h21A1.5 1.5 0 0 1 24 6v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm0 3v10.5h21V7.5l-10.5 6.75L1.5 7.5zm10.5 5.25L22.5 6h-21l10.5 6.75z" />
                </svg>
                barrozo.lucasp@gmail.com
              </a>
            </div>
          </div>

          <img
            src={foto.src}
            alt="Lucas Barrozo"
            className="relative z-10 w-65 h-65 rounded-full object-cover
                border-4 border-white/60 shadow-lg"
          />
        </div>

        <ProjectsSection />

        <div
          className="flex flex-col items-center justify-center
              text-white gap-20 py-8"
        ></div>

        <div id="about" className="w-full px-6 py-28">
          <div
            className="mx-auto p-15 mb-20 max-w-6xl rounded-3xl bg-slate-900/80
                        shadow-lg shadow-black/30 ring-1 ring-white/10
                        backdrop-blur-md"
          >
            <h2
              className="mb-12 text-center text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-cyan-400 to-emerald-400"
            >
              About me
            </h2>
            <p className="mb-8 text-2xl leading-relaxed text-white text-justify">
              Born in Rio de Janeiro and living in portugal since my teenage
              years, I'm a full-stack developer who is passionate about
              problem-solving. I love breaking down complex challenges and
              figuring out how small parts come together to form a biger picture
              🧩
              <br />
              <br />
              I am driven by a genuine curiosity and determination to find
              solutions. With a solid foundation in both front-end and back-end
              technologies, I can deliver complete products from concept to
              deployment and I'm always keen to pick up new tools and refine my
              skills 🚀
              <br />
              <br />
              When not coding I am probably looking for hiking trails, trying
              new cooking recepies or reading.
            </p>
          </div>
        </div>
        <div className="" id="contact">
          <h2
            className="mb-20 mt-35 text-center text-4xl font-extrabold
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-cyan-400 to-emerald-400"
          >
            Let's Get in Touch!
          </h2>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="https://github.com/BarrozoL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full  border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
            >
              <svg
                className="h-25 w-25 shrink-0"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.4 0 12.1c0 5.35 3.438 9.88 8.205 11.49.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.738-4.042-1.65-4.042-1.65-.546-1.396-1.333-1.77-1.333-1.77-1.09-.75.082-.736.082-.736 1.205.086 1.84 1.26 1.84 1.26 1.07 1.86 2.807 1.32 3.492 1.01.108-.783.418-1.32.762-1.625-2.665-.31-5.466-1.376-5.466-6.13 0-1.36.465-2.47 1.235-3.35-.124-.31-.536-1.556.116-3.24 0 0 1.008-.33 3.3 1.27.957-.27 1.983-.402 3.003-.407 1.02.005 2.047.137 3.006.407 2.29-1.6 3.297-1.27 3.297-1.27.653 1.684.242 2.93.118 3.24.77.88 1.233 1.99 1.233 3.35 0 4.77-2.803 5.817-5.476 6.12.43.37.814 1.096.814 2.21 0 1.595-.014 2.882-.014 3.277 0 .32.217.694.824.576C20.565 21.978 24 17.448 24 12.097 24 5.4 18.627 0 12 0z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/lucas-barrozo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full  border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
            >
              <svg
                className="h-25 w-25 shrink-0"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>LinkedIn</title>
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.551V9h3.568v11.452zM5.337 7.433a2.065 2.065 0 1 1 0-4.13 2.065 2.065 0 0 1 0 4.13zM20.447 20.452h-3.554V14.8c0-1.345-.025-3.077-1.874-3.077-1.874 0-2.161 1.46-2.161 2.968v5.761h-3.55V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.605 0 4.269 2.372 4.269 5.457v6.282z" />
              </svg>
            </a>

            <a
              href="mailto:barrozo.lucasp@gmail.com"
              className="inline-flex items-center gap-3 rounded-full  border-white/25
                    px-8 py-3 text-lg font-medium text-white hover:bg-white/10"
            >
              <svg
                className="h-25 w-25 shrink-0"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>Email</title>
                <path d="M1.5 4.5h21A1.5 1.5 0 0 1 24 6v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm0 3v10.5h21V7.5l-10.5 6.75L1.5 7.5zm10.5 5.25L22.5 6h-21l10.5 6.75z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
