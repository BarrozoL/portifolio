export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 p-7 bg-gray-800 text-white">
        <ul className="flex justify-center font-medium space-x-20">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              className="bg-emerald-500 rounded-full p-3"
              href="https://drive.google.com/file/d/1N0_y4hzB9Dz7r4LeH7jkhH8qGO37_7tL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
