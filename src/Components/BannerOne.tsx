import React, { useEffect, useRef, useState } from 'react';

export default function BannerOne() {
  const textoCompleto = 'Olá, eu sou a <Mônica/> ';
  const [textoVisivel, setTextoVisivel] = useState('');
  const [, setDigitando] = useState(true);

  // Ref da imagem
  const imagemRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left - width / 50;
    const y = clientY - top - height / 50;
    

    const rotateX = -(y / 10);
    const rotateY = x / 10;

    if (imagemRef.current) {
      imagemRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };
  //===== FIM DA ROTAÇÃO

  const resetRotation = () => {
    if (imagemRef.current) {
      imagemRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const digitar = () => {
      if (i < textoCompleto.length) {
        setTextoVisivel(textoCompleto.slice(0, i));
        i++;
        timeout = setTimeout(digitar, 100);
      } else {
        setDigitando(false);
        timeout = setTimeout(apagar, 2000);
      }
    };

    const apagar = () => {
      if (i > 0) {
        setTextoVisivel(textoCompleto.slice(0, i));
        i--;
        timeout = setTimeout(apagar, 100);
      } else {
        setTextoVisivel('');
        setDigitando(true);
        timeout = setTimeout(digitar, 500);
      }
    };

    timeout = setTimeout(digitar, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="w-full min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className="flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
        >
          <img
            ref={imagemRef}
            src="foguete2d.png"
            alt="Monica"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-cyan-500 transition-transform duration-300 ease-out"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            {textoVisivel}
            <span className="border-r-2 border-cyan-400 animate-pulse ml-1" />
          </h1>
          <p className="text-lg text-gray-300">
          Graduada em Análise e Desenvolvimento de Sistemas e pós-graduanda em Engenharia de Software. Tenho experiência prática em .Net, C#, ASP.NET Core MVC, Entity Framework e SQL Server no back-end. No front-end, atuo com React, Next.js e TypeScript, com domínio de hooks, componentes funcionais, React Query para gerenciamento de dados assíncronos e tipagem segura para um código escalável. Possuo conhecimento em integração com APIs REST utilizando Axios, e utilizo Bootstrap e Tailwind CSS para estilização, além de Git para controle de versão.
          </p>
        </div>
      </div>
    </section>
  );
}
