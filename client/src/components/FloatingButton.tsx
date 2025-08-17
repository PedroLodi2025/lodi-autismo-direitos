import { MessageCircle } from "lucide-react";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open('https://chatvolt.ai/@assistentelodi', '_blank')}
        className="bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center space-x-2 group animate-pulse hover:animate-none"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Atendimento Imediato</span>
      </button>
    </div>
  );
};

export default FloatingButton;