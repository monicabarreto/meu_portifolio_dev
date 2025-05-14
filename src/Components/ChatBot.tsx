import { useEffect, useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // 👉 Mensagens iniciais simulando uma conversa
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        role: "user",
        content: "Oi! Quem é você?",
      },
      {
        role: "assistant",
        content:
          "Olá! 👋 Sou o assistente virtual da Mônica, uma desenvolvedora fullstack apaixonada por criar soluções com React e .NET! Posso te ajudar a conhecer os projetos dela ou responder qualquer dúvida. 😊",
      },
      {
        role: "user",
        content: "Me fale um pouco sobre o que ela faz.",
      },
      {
        role: "assistant",
        content:
          "Claro! A Mônica desenvolve aplicações web modernas com React, TypeScript e Tailwind no front-end, e utiliza .NET e SQL Server no back-end. Ela também tem experiência com APIs e sistemas ERP como o WinThor. 🚀",
      },
    ];
    setMessages(initialMessages);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, { role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer SUA_API_KEY_AQUI`,
            "Content-Type": "application/json",
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex justify-between items-center">
            <span>Chat com Mônica 🤖</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-blue-100 self-end ml-auto  text-black"
                    : "bg-white text-black self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-black bg-white"
              placeholder="Digite sua mensagem..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <MessageSquare />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
