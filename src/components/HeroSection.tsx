import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background image with transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/f46ddb13-f3bf-4de0-9f0e-629333a42b45.png')"
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">BPC LOAS para</span>
              <br />
              <span className="text-secondary">Crianças com Autismo</span>
              <br />
              <span className="text-sm md:text-lg font-normal text-gray-300">Conheça os Direitos do seu Filho</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              O Escritório <strong className="text-secondary">Lodi Advocacia</strong> atua com responsabilidade e conhecimento técnico em casos envolvendo concessão de Benefícios Previdenciários para Crianças com TEA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🔴 FALE COM O ADVOGADO
              </Button>
              
              <Button 
                variant="outline"
                className="bg-accent hover:bg-accent/90 text-white border-accent px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://chatvolt.ai/@assistentelodi', '_blank')}
              >
                🟢 ATENDIMENTO ONLINE
              </Button>
            </div>
          </div>

          {/* Video Area */}
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700">
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-gray-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm">Vídeo do Dr. Pedro Lodi</p>
                <p className="text-xs text-gray-400">sobre BPC LOAS para crianças com autismo</p>
              </div>
            </div>
            <p className="text-center text-gray-300 text-sm">
              Assista ao vídeo explicativo sobre como garantir os direitos do seu filho
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;