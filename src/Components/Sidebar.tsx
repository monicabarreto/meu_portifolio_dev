

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-70 p-8 bg-gradient-to-tl from-gray-800 via-gray-900 to-black text-white flex flex-col items-center shadow-xl z-50">

      {/* Logo com efeito de sombra ao passar o mouse */}
     <div className="relative w-28 h-28">
  <div className="absolute inset-0 rounded-full border-4 border-cyan-400 blur-md opacity-70 animate-pulse"></div>
  <img
    src="moni.png"
    alt="Logo"
    className="w-28 h-28 object-contain rounded-full border-4 border-cyan-400 relative z-10 p-2"
  />
</div>

      {/* Nome e subtítulo aumentados */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-extrabold">Monica Barreto</h1>
        <p className="text-cyan-400 text-base font-medium">Software Developer</p>
      </div>

      {/* Links de navegação com espaçamento maior */}
      <nav className="flex flex-col gap-6 text-lg font-medium w-full px-10">
        <a
          href="#about"
          className="relative group flex items-center gap-2 text-white transition-all duration-500 hover:text-pink-400 "
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="z-10 relative">About Me</span>
          <span className="absolute inset-0 bg-pink-500 blur-sm opacity-0 group-hover:opacity-20 transition duration-500 rounded" />
        </a>

       <a
  href="#Skills"
  className="relative group text-white transition-all duration-300 hover:text-blue-400 flex items-center gap-2"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
  <span className="z-10 relative">Skills</span>
  <span className="absolute inset-0 bg-blue-500 blur-sm opacity-0 group-hover:opacity-20 transition duration-500 rounded shadow-2xl group-hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.7)]" />
</a>

        <a
          href="#projects"
          className="relative group text-white transition-all duration-300 hover:text-purple-400 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <span className="z-10 relative">Projects</span>
         <span className="absolute top-1/2 left-0 w-full h-1 bg-green-500 opacity-0 group-hover:opacity-80 blur-lg scale-x-150 transition-all duration-500 ease-out transform -translate-y-1/2 pointer-events-none rounded" />
        </a>

        <a
          href="#resume"
          className="relative group text-white transition-all duration-300 hover:text-amber-500 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span className="z-10 relative">Resume</span>
          <span className="absolute top-1/2 left-0 w-full h-1 bg-amber-500 opacity-0 group-hover:opacity-80 blur-lg scale-x-150 transition-all duration-500 ease-out transform -translate-y-1/2 pointer-events-none rounded" />
        </a>


      <a
  href="#contacts"
  className="relative group text-white transition-all duration-300 hover:text-green-400 flex items-center gap-2 w-full"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
    stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
  <span className="z-10 relative w-full">Contacts</span>

  {/* Feixe de luz estilo sabre Jedi */}
  <span className="absolute top-1/2 left-0 w-full h-1 bg-green-500 opacity-0 group-hover:opacity-80 blur-lg scale-x-150 transition-all duration-500 ease-out transform -translate-y-1/2 pointer-events-none rounded" />
</a>

       
      </nav>
    </aside>
  );
}
