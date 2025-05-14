import { useState, useEffect, useRef } from "react";

const habilidades = [
  {
    nome: "React",
    icone: "https://db.tiagoterron.com/images/tech/react.png",
    percentual: 90,
  },
  {
    nome: "TypeScript",
    icone: "https://db.tiagoterron.com/images/tech/typescript.png",
    percentual: 80,
  },
  {
    nome: "Tailwind",
    icone: "https://db.tiagoterron.com/images/tech/tailwind.png",
    percentual: 85,
  },
  {
    nome: "C# / .NET",
    icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
    percentual: 75,
  },
  {
    nome: "Next.js",
    icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg",
    percentual: 70,
  },
  {
    nome: "SQL Server",
    icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    percentual: 80,
  },
];

export default function BannerTwo() {
  const [percentuais, setPercentuais] = useState(habilidades.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Detecta quando o banner entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeout = setTimeout(() => {
            setPercentuais(habilidades.map((h) => h.percentual));
          }, 200);
          return () => clearTimeout(timeout);
        } else {
          setPercentuais(habilidades.map(() => 0));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handler de hover individual
 const handleHover = (index: number) => {
  setPercentuais((prev) =>
    prev.map((_, i) => (i === index ? 0 : prev[i]))
  );

  const target = habilidades[index].percentual;
  let current = 0;

  const interval = setInterval(() => {
    current += 1;
    setPercentuais((prev) =>
      prev.map((_, i) => (i === index ? current : prev[i]))
    );

    if (current >= target) {
      clearInterval(interval);
    }
  }, 20); // quanto menor, mais rápido (20ms = ~2s para 100%)
};

  return (
    <section id="Skills"
      ref={sectionRef}
      className="w-full py-20 bg-black text-white px-8"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
        Minhas habilidades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {habilidades.map((h, i) => {
          const dashArray = 283;
          const dashOffset =
            dashArray - (dashArray * percentuais[i]) / 100;

          return (
            <div
              key={i}
              onMouseEnter={() => handleHover(i)}
              className="group cursor-pointer bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center"
            >
              {/* Círculo animado */}
              <div className="relative w-24 h-24 mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <defs>
  <linearGradient id={`gradient-${i}`} x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#8e2de2" />   {/* Roxo Neon */}
    <stop offset="20%" stopColor="#4facfe" />  {/* Azul Neon */}
    <stop offset="40%" stopColor="#f9d423" />  {/* Amarelo Neon */}
    <stop offset="60%" stopColor="#00ff87" />  {/* Verde Neon */}
    <stop offset="80%" stopColor="#ff416c" />  {/* Vermelho/Rosa Neon */}
    <stop offset="100%" stopColor="#f953c6" /> {/* Rosa Neon */}
  </linearGradient>
</defs>

                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#334155"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={`url(#gradient-${i})`}
                    strokeWidth="10"
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    fill="transparent"
                    style={{
                      transition: "stroke-dashoffset 1.2s ease-in-out",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-cyan-300 font-bold text-lg">
                  {percentuais[i]}%
                </div>
              </div>

              {/* Ícone */}
              <img
                src={h.icone}
                alt={h.nome}
                className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Nome */}
              <p className="text-white font-semibold">{h.nome}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
