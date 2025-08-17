import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText, Search, ClipboardCheck, Scale } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Primeiro contato",
      description: "Entre em contato por WhatsApp ou através do nosso site"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Envio de documentos",
      description: "Envie as informações e documentos necessários para análise"
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Análise jurídica inicial",
      description: "Realizamos uma análise completa do seu caso"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "Proposta profissional",
      description: "Apresentamos nossa estratégia e proposta de trabalho"
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Acompanhamento legal",
      description: "Iniciamos o processo jurídico com acompanhamento completo"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como Funciona o Atendimento
          </h2>
          <p className="text-lg text-gray-300">
            Processo simples e transparente para cuidar do seu caso
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-900 border border-gray-700 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-primary"></div>
                  <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;