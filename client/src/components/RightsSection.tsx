import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, Info, CheckCircle } from "lucide-react";

const RightsSection = () => {
  const rightsInfo = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      title: "Situações que merecem atenção jurídica",
      description: "Identifique quando é necessário buscar orientação legal especializada",
      bgColor: "bg-gray-900 border-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Direitos garantidos em lei",
      description: "Conheça os direitos fundamentais que a legislação assegura",
      bgColor: "bg-gray-900 border-blue-500"
    },
    {
      icon: <Info className="w-8 h-8 text-purple-400" />,
      title: "O papel da orientação jurídica",
      description: "Entenda como o acompanhamento técnico pode fazer a diferença",
      bgColor: "bg-gray-900 border-purple-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Agir com informação e segurança",
      description: "A importância de tomar decisões baseadas em conhecimento jurídico",
      bgColor: "bg-gray-900 border-green-500"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entenda Seus Direitos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            O conhecimento dos seus direitos é fundamental para tomar as melhores decisões em questões jurídicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rightsInfo.map((item, index) => (
            <Card key={index} className={`border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 ${item.bgColor}`}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não espere para conhecer seus direitos
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              O acompanhamento jurídico adequado pode ser decisivo para o sucesso do seu caso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Fale com o Advogado
              </button>
              <button 
                onClick={() => window.open('https://chatvolt.ai/@assistentelodi', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Atendimento Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightsSection;