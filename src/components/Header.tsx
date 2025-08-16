import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-lodi.png" 
              alt="Lodi Advocacia" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='serif' font-size='18' font-weight='bold' fill='%23C41E3A'%3ELodi Advocacia%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">Sobre</a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                Serviços
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="p-2">
                  <a href="https://bancos.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Direito Bancário</a>
                  <a href="https://trabalhista.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Direito do Trabalho</a>
                  <a href="https://familia.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Direito de Família</a>
                  <a href="https://consumidor.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Direito do Consumidor</a>
                </div>
              </div>
            </div>
            
            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">Sobre</a>
              <div className="pl-4 space-y-2">
                <p className="text-sm font-medium text-gray-900">Serviços:</p>
                <a href="https://bancos.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">Direito Bancário</a>
                <a href="https://trabalhista.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">Direito do Trabalho</a>
                <a href="https://familia.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">Direito de Família</a>
                <a href="https://consumidor.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-primary">Direito do Consumidor</a>
              </div>
              <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;