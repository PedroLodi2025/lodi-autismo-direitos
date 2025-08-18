import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background image with more visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/lovable-uploads/f46ddb13-f3bf-4de0-9f0e-629333a42b45.png')"
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

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
            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://www.youtube.com/embed/NYaBsJtV4x0"
                title="Vídeo do Dr. Pedro Lodi sobre BPC LOAS para crianças com autismo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                data-testid="hero-video-iframe"
              ></iframe>
            </div>
            <p className="text-center text-gray-300 text-sm">
              Assista ao vídeo explicativo do Dr. Pedro Lodi sobre como garantir os direitos do seu filho
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;