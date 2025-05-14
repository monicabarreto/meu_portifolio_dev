const projetos = [
  {
    titulo: "Sistema de Ponto",
    descricao: "Aplicação com React e câmera integrada para registrar entrada e saída de funcionários.",
    imagem: "https://db.tiagoterron.com/images/tech/react.png",
    tempo: "2 meses",
    progresso: 80,
  },
  {
    titulo: "Landing Page",
    descricao: "Página moderna e responsiva com animações e foco em performance.",
    imagem: "https://db.tiagoterron.com/images/tech/next.png",
    tempo: "1 mês",
    progresso: 60,
  },
];

export default function BannerThree() {
  return (
    <section id="resume" className="w-full py-20 bg-black text-white px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">RESUME</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projetos.map((p, i) => (
          <div
            key={i}
            className="group bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="mb-4 flex items-start">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300 mr-4">
                <img className="w-8 h-8" src={p.imagem} alt={p.titulo} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {p.titulo}
                </h3>
                <div className="inline-block px-3 py-1 mt-2 text-sm rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-all">
                  {p.tempo}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{p.descricao}</p>
            <div className="h-2 bg-gray-700/80 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 relative group-hover:animate-pulse"
                style={{ width: `${p.progresso}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
