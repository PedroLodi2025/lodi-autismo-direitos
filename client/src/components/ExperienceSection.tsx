import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Target } from "lucide-react";

const ExperienceSection = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Atuação nas principais áreas jurídicas",
      description: "Conhecimento técnico especializado em diversas áreas do direito"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atendimento personalizado e ético",
      description: "Cada caso é tratado com atenção individual e responsabilidade"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Atualização contínua",
      description: "Sempre acompanhando as mudanças na legislação e jurisprudência"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Foco estratégico na condução dos casos",
      description: "Planejamento cuidadoso para alcançar os melhores resultados"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprometimento com o Direito e com os interesses legítimos dos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-900 border border-gray-700">
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
      </div>
    </section>
  );
};

export default ExperienceSection;