const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Professional Info */}
          <div>
            <img 
              src="/logo-lodi.png" 
              alt="Lodi Advocacia" 
              className="h-12 w-auto mb-4 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='serif' font-size='18' font-weight='bold' fill='white'%3ELodi Advocacia%3C/text%3E%3C/svg%3E";
              }}
            />
            <p className="text-gray-300 mb-2">
              <strong>Dr. Pedro Henrique M. Lodi</strong>
            </p>
            <p className="text-gray-400 mb-4">OAB/SP 210.428</p>
            <p className="text-sm text-gray-400">
              Atuação ética e responsável na defesa dos direitos do cidadão.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>WhatsApp: (19) 99939-1285</p>
              <p>E-mail: contato@lodiadvocacia.com.br</p>
              <p className="text-sm">
                Rua Gal. Luiz F. de Matos, 3338<br />
                Jardim Roma — Pirassununga/SP
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Áreas de Atuação</h3>
            <div className="space-y-2">
              <a href="https://bancos.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                Direito Bancário
              </a>
              <a href="https://trabalhista.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                Direito do Trabalho
              </a>
              <a href="https://familia.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                Direito de Família
              </a>
              <a href="https://consumidor.lodiadvocacia.com.br" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-secondary transition-colors">
                Direito do Consumidor
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Lodi Advocacia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                Termos de Uso
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;